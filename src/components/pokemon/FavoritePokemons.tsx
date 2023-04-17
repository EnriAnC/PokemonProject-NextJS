import { Grid } from "@nextui-org/react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props{
    favoritePokemons: Number[];
}

const FavoritePokemons:React.FC<Props> = ({favoritePokemons}) => {
    return ( 
        <Grid.Container gap={ 2 } direction="row" justify="flex-start">
            {favoritePokemons.map((id:Number)=>(
                <FavoriteCardPokemon id={id} key={id.toString()}/>
            ))}
        </Grid.Container>
     );
}
 
export default FavoritePokemons;