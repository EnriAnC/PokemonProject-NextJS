# Proyecto de Pokemón

En este proyecto, he utilizado la API de Pokemón para crear páginas para cada uno de los 151+ Pokemones existentes. Para hacer esto, hemos utilizado las funciones de Next.js `GetStaticPaths` y `GetStaticProps`.

## Funcionamiento del proyecto

1. Primero, hemos utilizado la API de Pokemón para obtener información sobre cada Pokemón existente.
2. Luego, hemos utilizado `GetStaticPaths` para generar páginas dinámicamente para cada Pokemón.
3. Finalmente, hemos utilizado `GetStaticProps` para obtener la información relevante para cada página y pasarla a nuestro componente de Pokemón.
4. Se configura para que se renderizen inicialmente 151 páginas, luego si desea acceder a pokemons recientes puede cambiar la url por...152..589...322, dependiendo de la Api pokemon a que haga referencia ese ID o por el nombre del pokemon.

De esta manera, hemos sido capaces de crear una página para cada uno de los 151+ Pokemones existentes, lo que permite a los usuarios buscar información detallada sobre cada uno de ellos.

## Tecnologías utilizadas

- Next.js
- Next UI
- Axios
- API de Pokemón

## Conclusiones

El uso de `GetStaticPaths` y `GetStaticProps` en Next.js ha hecho posible la creación de una gran cantidad de páginas de manera eficiente y escalable. Además, trabajar con la API de Pokemón ha sido una forma interesante y divertida de aprender más sobre el desarrollo web y el manejo de APIs.

¡Gracias por leer acerca de este proyecto de Pokemón! Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto.





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
