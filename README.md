# Blog de Sebastian Pérez

Sitio personal en Next.js (App Router), con la interfaz en español e inglés. Los artículos viven en `content/es` y `content/en` como MDX: un archivo por idioma, con el slug y la fecha en el frontmatter. Las dos traducciones de un mismo texto comparten `id`. Si una traducción no existe, el cambio de idioma se queda en el artículo actual.

Repositorio: [Sebastian-pz/blog](https://github.com/Sebastian-pz/blog)

## Desarrollo

Requiere Node 20.9 o superior y pnpm 11.5.

```bash
git clone https://github.com/Sebastian-pz/blog.git
cd blog
pnpm install
pnpm dev
```

El servidor queda en [http://localhost:3000](http://localhost:3000). `/` redirige a `/en`.

```bash
pnpm lint
pnpm test
pnpm build
```

## Un artículo nuevo

Crea `content/<locale>/<slug>.mdx`. El slug del archivo y el del frontmatter tienen que coincidir, y no se recalculan a partir del título: cambiar el título no mueve la URL.

```md
---
id: "un-id-estable"
slug: "mi-articulo"
title: "Mi artículo"
type: "opinion"
mediaType: "image"
image: "/blog/portada.webp"
date: "2026-09-22"
author: "Sebastian Pérez"
tags:
  - "Opinion"
---

El cuerpo es Markdown. `##` es un subtítulo, `>` una nota y los enlaces van en Markdown.
```

`type` es `opinion`, `experience` o `project`. `mediaType` es `image` o `video`. Si es un vídeo, añade `media` con la URL de embed. La imagen de portada va en `public/`.

Para publicar el mismo texto en el otro idioma, copia el `id` y escribe el otro archivo con su propio slug.
