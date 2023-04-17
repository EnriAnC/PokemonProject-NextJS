import { Layout } from "@/components/layouts/Layout"
import {FavoriteCardPokemon} from "@/components/pokemon/index"
import {FavoritePokemons} from "@/components/pokemon/index"
import { NoFavorites } from "@/components/ui/NoFavorites"
import { localFavorites } from "@/utils"
import { Card, Grid } from "@nextui-org/react"
import { useEffect, useState } from "react"

const FavoritesPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<Number[]>([])
    
    useEffect(()=>{
        setFavoritePokemons( localFavorites.pokemons() )
    },[])
    
    return (
        <Layout title="Pokémons - Favoritos">
            {
                favoritePokemons.length === 0
                ? (<NoFavorites />)
                : (
                    <FavoritePokemons favoritePokemons={favoritePokemons} />
                )
            }
        </Layout>
    )
}

export default FavoritesPage