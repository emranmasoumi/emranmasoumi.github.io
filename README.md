# Emran Portfolio

Personal portfolio and blog built with Astro.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro, normally `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

## Replace the portrait

Put your image in:

`public/images/emran.webp`

Then in `src/pages/index.astro` replace:

```astro
<img src="/images/profile-placeholder.svg" alt="Portrait placeholder for Emran" />
```

with:

```astro
<img src="/images/emran.webp" alt="Emran Masoumifeshani" />
```

## Next steps

- Replace placeholder social links and email.
- Add the real CV to `public/cv/emran-cv.pdf`.
- Add detailed project case studies.
- Add Astro Content Collections for the blog.
- Add SEO metadata and analytics.
- Configure GCP deployment after choosing the hosting target.
