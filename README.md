This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO para el portafolio

Nuvora es una marca ficticia y esta página es una demo de práctica. El título,
la descripción y la tarjeta para compartir identifican el proyecto como tal.
No se incluyen datos estructurados de empresa, reseñas ni productos reales.

- En Vercel se utiliza `VERCEL_PROJECT_PRODUCTION_URL` automáticamente.
- En otro hosting, define `SITE_URL` con la URL pública completa antes del build.
  También puedes usar esta variable para dar prioridad a tu dominio personalizado.
- Al cambiar la URL, vuelve a compilar y publicar: los metadatos son estáticos.
- Producción con una URL configurada permite indexación y genera el canonical y
  un sitemap con una sola página. Las secciones `#features`, `#pricing`, etc.
  no son páginas adicionales.
- Desarrollo, previews de Vercel y builds sin URL configurada incluyen `noindex`.
  `robots.txt` permite rastreo para que los buscadores puedan leer esa instrucción.
- Open Graph y Twitter usan la imagen generada en `app/opengraph-image.tsx`.

Después de publicar, comprueba el código fuente HTML, `/robots.txt`,
`/sitemap.xml` y la vista previa al compartir la URL definitiva.
