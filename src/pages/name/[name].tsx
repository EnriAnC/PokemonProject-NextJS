import { Layout } from "@/components/layouts/Layout"
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import {  useState } from "react";
import { getPokemonInfo, localFavorites } from "@/utils";
import confetti from "canvas-confetti";

interface Props{
    // pokemon:any;
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
    const [isInFavorites, setIsInFavorites] = useState<boolean>( localFavorites.existInFavorites(pokemon.id) )

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorites( !isInFavorites )
        if ( isInFavorites ) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x:1,
                y:0
            }
        })
    }


    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{marginTop: "1rem", gap:"2"}} justify="space-evenly">
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding:"30px"}}>
                       <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'} 
                            alt={pokemon.name}
                            width="100%" 
                            height={ 200 }/>
                        </Card.Body> 
                    </Card>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button onPress={onToggleFavorite} 
                            color="gradient" 
                            ghost={!isInFavorites}>
                                { isInFavorites ? 'En Favoritos': 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex" gap={2}>
                                <Image src={pokemon.sprites.front_default} 
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>
                                <Image src={pokemon.sprites.back_default} 
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>
                                <Image src={pokemon.sprites.front_shiny} 
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>
                                <Image src={pokemon.sprites.back_shiny} 
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}/>
                            </Container>
                        </Card.Body>
                        
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
} 

export const getStaticPaths: GetStaticPaths = async (ctx) =>{
    // const pokemon151 = [...Array(151)].map((value, index)=>`${index + 1}`)
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const pokemonNames = data.results.map(poke=>poke.name)

    return{
        paths:pokemonNames.map(name=>({
            params: { name }
        })),
        fallback:false
    }
}

export const getStaticProps:GetStaticProps = async ({ params }) => {
    // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const { name } = params as { name: string}
    return {
      props: {
        pokemon: await getPokemonInfo( name )
      }
    }
  }

export default PokemonByNamePage