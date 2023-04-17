import { Navbar } from "../ui/Navbar";
import Head from "next/head"

interface Props{
    children?: React.ReactElement;
    title?: string;
}

const origin = typeof window !== 'undefined' ? window.location.origin : ''

export const Layout: React.FC<Props> = ({ children, title })=> {

    console.log(origin)

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="autor" content="Enrique Ansa"/>
                <meta name="keywords" content={title}/>
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}img/pokemon-banner.jpg`} />
            </Head>
            <main>
                <Navbar />
                { children }
            </main>
        </>
    )
}