# Nuvora

Landing page responsive para una plataforma ficticia de marketing y productividad. Un proyecto de portafolio centrado en composición visual, componentes reutilizables e interacciones cuidadas, construido con Next.js, React y TypeScript.

La interfaz está en inglés e incluye presentación del producto, funcionalidades, beneficios, métricas, planes y testimonios.

## Qué incluye

- Diseño adaptable a escritorio, tablet y móvil, con navegación entre secciones y menú móvil.
- Composiciones de producto con tarjetas, gráficos SVG y retratos servidos desde el proyecto.
- Comparador de planes con selección mensual o anual y cálculo del descuento del 20 %.
- Carrusel de testimonios con flechas y selección directa.
- Diálogos de demostración para los botones de acceso y selección de planes.
- Formularios con validación nativa de correo y confirmación visual.
- Animaciones de entrada en el hero y al hacer scroll, contadores de métricas y respuesta visual en botones y tarjetas.
- Soporte para movimiento reducido, indicadores de foco, enlace para saltar al contenido y etiquetas accesibles en los controles.
- Metadatos SEO, imagen para compartir, canonical, `robots.txt` y sitemap según el entorno.

## Alcance de la demo

Nuvora es una marca ficticia. Los precios, las métricas, los testimonios y las referencias a marcas forman parte de la presentación de ejemplo; no representan clientes, resultados ni afiliaciones reales.

Las interacciones funcionan en el navegador. Los formularios no envían ni guardan correos, el acceso no autentica usuarios y la selección de planes no procesa pagos. El proyecto no requiere un backend, una base de datos ni claves de servicios externos para ejecutarse.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.8 · App Router | Estructura de la aplicación, imágenes, fuentes y metadatos |
| React 19.2.8 · TypeScript | Componentes y estado de las interacciones |
| Tailwind CSS 4 · CSS | Estilos globales, variables visuales y layouts responsive |
| Motion · Web Animations API | Contadores y animaciones de entrada |
| Lucide React · SVG | Iconos y gráficos |
| Biome · Ultracite | Lint y formato |
| pnpm 12.8.1 | Gestión de dependencias |

La fuente Geist se carga desde un archivo local mediante `next/font/local`. Las imágenes están en `public/images/` y se utilizan con `next/image`.

## Desarrollo local

Necesitas Node.js y **pnpm 12.8.1**, la versión indicada en `package.json`. El entorno de desarrollo de este proyecto utiliza Node.js 24.

Desde la raíz del repositorio:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Abre [localhost:3000](http://localhost:3000). Los cambios en la página y los componentes se reflejan durante el desarrollo.

No necesitas configurar variables de entorno para probar la landing localmente.

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera la compilación de producción |
| `pnpm start` | Sirve la compilación de producción; requiere ejecutar `pnpm build` antes |
| `pnpm lint` | Revisa el código con Ultracite y Biome |
| `pnpm format` | Aplica formato y correcciones automáticas |

Para revisar cambios de código antes de publicar:

```bash
pnpm lint
pnpm build
```

## Estructura

```text
app/
  page.tsx                 Composición de la landing
  layout.tsx               Layout, fuente y metadatos
  globals.css              Estilos, variables y reglas responsive
  fonts/                   Fuente Geist local
  opengraph-image.tsx       Imagen para compartir
  robots.ts                Reglas de rastreo
  sitemap.ts               Sitemap de la página
components/                Secciones, tarjetas e interacciones
lib/
  site.ts                  URL pública y configuración SEO
public/
  icon.svg                 Icono del sitio
  images/                  Fotografías y retratos
.env.example               Ejemplo de configuración de la URL pública
biome.json                 Configuración de lint y formato
```

## Personalización

- **Contenido y orden de secciones:** edita `app/page.tsx` y los componentes `*-section.tsx`.
- **Colores, espaciado y responsive:** modifica `app/globals.css`; las variables principales están en `:root`.
- **Planes y precios:** actualiza los datos de `components/pricing.tsx`.
- **Testimonios:** edita los datos de `components/stories.tsx` y sus imágenes en `public/images/testimonials/`.
- **Navegación y contacto:** revisa `components/navigation.tsx` y `components/footer.tsx`.
- **Animaciones:** ajusta `components/entrance-animations.tsx`, `components/hero-entrance-styles.tsx`, `components/metric-counter.tsx` y las reglas CSS correspondientes.
- **Identidad y SEO:** actualiza `lib/site.ts`, `app/layout.tsx`, `app/opengraph-image.tsx` y `public/icon.svg`.

## URL pública y SEO

Para configurar el dominio fuera de Vercel, o dar prioridad a un dominio personalizado, copia el archivo de ejemplo:

```bash
cp .env.example .env.local
```

Define la URL pública completa, incluyendo el protocolo:

```dotenv
SITE_URL=https://tu-dominio.com
```

En el hosting, configura esta variable **antes del build**. Si `SITE_URL` está vacía, el proyecto utiliza `VERCEL_PROJECT_PRODUCTION_URL` cuando está disponible. Al cambiar el dominio, vuelve a compilar y publicar para actualizar los metadatos.

- Producción con una URL configurada permite indexación y genera el canonical y un sitemap con la página principal.
- Desarrollo, previews de Vercel y builds sin URL configurada incluyen `noindex`.
- `robots.txt` permite el rastreo para que los buscadores puedan leer esa instrucción.
- Las anclas como `#features` y `#pricing` pertenecen a la misma página y no se incluyen como rutas adicionales.
- Open Graph y Twitter utilizan la imagen definida en `app/opengraph-image.tsx`.

## Producción

Para ejecutar la aplicación con un servidor Node.js:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

Después de publicar, verifica la navegación, los formularios de demostración y el diseño móvil. Revisa también el HTML generado, `/robots.txt`, `/sitemap.xml` y la vista previa al compartir la URL definitiva.
