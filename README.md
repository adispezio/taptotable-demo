# TapToTable

A local-only recipe and pantry UI demo. There are no accounts, APIs, or environment variables. Everything you see is mock data in the client; refresh the page and state resets.

Built with Vite, React, and Tailwind CSS.

## What you can try

- **Home** — trending recipe feed and recently saved recipes
- **Recipes** — open a recipe, view details, save or unsave it
- **Pantry** — browse mock pantry items and add a new one from the drawer
- **Scan** — camera-scan modal (simulated; nothing is uploaded)
- **Settings** — dietary preferences, units, and toast notifications

On a wide viewport you get a desktop sidebar. On smaller screens, use the header.

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- npm (ships with Node)

## Run it

```bash
npm install
npm run dev
```

Open the localhost URL printed in the terminal (usually `http://localhost:5173`).

Create a production build with:

```bash
npm run build
```

Output goes to `dist/`.

## Project layout

```
src/
  app/
    components/   UI screens (home, pantry, recipe detail, settings)
    data/         Mock recipes and pantry items
    lib/          Shared helpers
  styles/         Tailwind and theme tokens
  assets/         Local recipe images
```

## Credits

- UI primitives from [shadcn/ui](https://ui.shadcn.com/) (MIT)
- Some photos from [Unsplash](https://unsplash.com/license)
- [Vite](https://vite.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/)

## License

MIT. See [LICENSE](LICENSE).
