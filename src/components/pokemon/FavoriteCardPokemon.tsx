import { Card, Grid } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props{
    id:Number;
}

const FavoriteCardPokemon:React.FC<Props> = ({id}) => {

    const router = useRouter()

    const onFavoriteClicked = () =>{
        router.push(`/pokemon/${id}`)
    }

    return ( 
        
            <Grid onClick={onFavoriteClicked} xs={ 6 } sm={3} md={2} xl={1} key={id.toString()}>
                <Card isHoverable isPressable css={{padding: 10}}>
                    <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={ 100 }
                    height={ 140 }/>
                </Card>
            </Grid>
        
    );
}
 
export default FavoriteCardPokemon;