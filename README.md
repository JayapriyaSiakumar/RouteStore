# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Getting started

Install dependencies and run locally:

- npm install
- npm run dev
- npm run build
- npm run preview

Common npm scripts (from the template):

- dev: start Vite dev server
- build: produce production bundle into dist/
- preview: locally preview the built app

## Deploying

### Deploy to GitHub Pages

1. Create a GitHub repository and push your code:

   - git init
   - git add .
   - git commit -m "Initial commit"
   - git remote add origin https://github.com/JayapriyaSiakumar/RouteStore.git
   - git push -u origin main

2. Add gh-pages support:

   - npm install --save-dev gh-pages
   - In package.json add:
     - "homepage": "https://JayapriyaSiakumar.github.io/RouteStore/"
     - "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" }
   - Set Vite base (vite.config.\*):
     - export default defineConfig({ base: '/<repo-name>/', ... })

3. Deploy:
   - npm run deploy
   - GitHub Pages will serve your app at the homepage URL.

Notes:

- For client-side routing you may need a 404 fallback (GitHub Pages does not natively support SPA routing). Consider using a redirect workaround or switch to Vercel for simpler routing.

### Deploy to Vercel

1. Push your repository to GitHub (see above).
2. On vercel.com, Import Project → select the GitHub repo.
3. Configure (Vercel usually auto-detects Vite):
   - Framework preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
   - Root Directory: (leave empty unless monorepo)
4. Click Deploy. Vercel will auto-deploy on every push to the connected branch.

Environment variables:

- Add any needed environment variables in the Vercel dashboard or GitHub repository settings (Actions secrets) as appropriate.

CI/CD (optional):

- Use Vercel for automatic preview and production deployments on push.
- For GitHub Pages continuous deploy, use gh-pages or a GitHub Actions workflow to run the build and publish dist/ to gh-pages branch.

Troubleshooting:

- If the app 404s on refresh in client-side routing, prefer Vercel or configure a fallback for GitHub Pages.
- Ensure the output directory is dist and that build completes without errors before deploying.
