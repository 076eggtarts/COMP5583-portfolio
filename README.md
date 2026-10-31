# COMP5583 Portfolio — website

Three published iterations of one personal website. Each version is a standalone static
site (no build step, no server, no login) published from its own folder.

```
COMP5583-portfolio/
├── index.html          # hub page linking to the three versions
└── website/
    ├── V0/             # index.html, styles.css, content.js, render.js, assets/
    ├── V1/             # index.html, styles.css, content.js, render.js, nav.js, assets/
    └── V2/             # index.html, styles.css, content.js, render.js, assets/
```

## Published URLs (GitHub Pages, no login)

| Version | URL |
| --- | --- |
| Hub | https://076eggtarts.github.io/COMP5583-portfolio/ |
| V0 | https://076eggtarts.github.io/COMP5583-portfolio/website/V0/ |
| V1 | https://076eggtarts.github.io/COMP5583-portfolio/website/V1/ |
| V2 | https://076eggtarts.github.io/COMP5583-portfolio/website/V2/ |

Pages is served from `main` / repository root, so every push redeploys automatically.

## Cloudflare Pages

Each version is deployed as its own Pages project with the publish root set to its folder:

| Project | Root directory | URL |
| --- | --- | --- |
| comp5583-v0 | `website/V0` | https://comp5583-v0.pages.dev |
| comp5583-v1 | `website/V1` | https://comp5583-v1.pages.dev |
| comp5583-v2 | `website/V2` | https://comp5583-v2.pages.dev |

Deployed on 2026-10-31 by direct upload, each project uploading exactly its own version
folder as the site root:

```bash
wrangler pages project create comp5583-v0 --production-branch main
wrangler pages deploy website/V0 --project-name comp5583-v0 --branch main
```

(`v1` and `v2` are identical with their own folder.) To connect them to Git instead:
**Workers & Pages → Create → Pages → Connect to Git**, pick this repo, framework preset
**None**, build command *empty*, build output directory `website/V0`
(respectively `website/V1`, `website/V2`).

## Notes

- All asset and script references inside `website/V*/` are relative, so the same files work
  from a repository subpath (GitHub Pages) and from a domain root (Cloudflare Pages).
- `website/` sources are kept byte-for-byte as submitted; the only addition is this hub page
  at the repository root.
