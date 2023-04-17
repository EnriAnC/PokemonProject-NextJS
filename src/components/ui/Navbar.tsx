import { Text, Spacer, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar: React.FC = () => {

    const { theme } = useTheme()

    return(
        
        <div style={{
            display:"flex",
            width:"100%",
            justifyContent:"flex-start",
            alignItems:"center",
            padding:"0 1rem",
            backgroundColor: theme?.colors.accents1.value
        }}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
            alt="Icon app"
            width={70}
            height={70}/>

            <NextLink href='/' passHref style={{display:'flex'}}>
                <Text h2 css={{margin:0}}>P</Text>
                <Text h3 css={{margin:0}} >okemon</Text>
            </NextLink>
            
            <Spacer css={{flex:"1"}}/>

            <NextLink href='/favorites'>
                <Text>Favoritos</Text>      
            </NextLink>            
        </div>
    )
}