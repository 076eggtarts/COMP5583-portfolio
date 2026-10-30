# COMP5583 Portfolio

Three iterations of the same portfolio site, kept side by side so the design process is visible:

```
COMP5583-portfolio/
├── index.html          # hub page, links to the three versions
├── V0/                 # iteration 0 - structure / greybox
│   ├── index.html
│   ├── style.css
│   └── assets/
├── V1/                 # iteration 1 - visual design
│   ├── index.html
│   ├── style.css
│   └── assets/
└── V2/                 # iteration 2 - final interactive build
    ├── index.html
    ├── style.css
    └── assets/
```

## Live site

- Hub: https://076eggtarts.github.io/COMP5583-portfolio/
- V0: https://076eggtarts.github.io/COMP5583-portfolio/V0/
- V1: https://076eggtarts.github.io/COMP5583-portfolio/V1/
- V2: https://076eggtarts.github.io/COMP5583-portfolio/V2/

## Deploying with GitHub Pages

Pages is served straight from `main` / repository root, so every push is a deploy.
Enable it once under **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

## Deploying with Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**
2. Pick `COMP5583-portfolio`
3. Framework preset: **None**; build command: *(empty)*; build output directory: `/`
4. Deploy — preview + production URLs are generated automatically.

## Editing

Each version is self-contained: `index.html` + `style.css` + `assets/`. No build step, no
dependencies, no CDN calls. Replace the placeholder copy (name, module details, project
write-ups) and drop images into the matching `assets/` folder.
