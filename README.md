# website

GoatFist Interactive's site, served at https://goatfist.com: the studio, Global Assault and the game's legal pages.

| Route | What |
|---|---|
| `/` | the studio |
| `/global-assault` | the game |
| `/global-assault/privacy` | the privacy policy (`/global-assault/privacy-policy.html`, its first address, redirects here) |
| `/global-assault/terms` | the terms of use (a draft until their text exists) |

## Develop
```bash
npm install
npm run dev       # http://localhost:5173
npm run check
npm run build     # build/, run with `node build` (PORT, default 3000)
```

## Brand
The logo, favicons and og image come from the brand kit (`GoatFist/brand`): `brand/vectors/{icon,goatfist,interactive}.svg` →
`src/lib/brand/`, `brand/dist/{favicon/*,social/og-image.png,svg/*}` → `static/brand/`.

## Deploy
Dokploy, project `goatfist`, application `website`: built from this repository's `Dockerfile` on every push to `main` (auto deploy),
domains `goatfist.com` and `www.goatfist.com` (port 3000, Let's Encrypt, behind Cloudflare's proxy).
