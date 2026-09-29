# Shalini Manoharan — Portfolio

A responsive personal portfolio for Shalini Manoharan, a full stack developer based in Almere, Netherlands. It presents her backend and full-stack skills, project work, experience, certifications and interest in Generative AI.

## Technologies

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4 with the Vite plugin
- Lucide React icons
- CSS design tokens and responsive layouts

## Local Setup

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL, usually `http://localhost:5173/`.

## Development Command

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`. The build command runs the TypeScript project checks before bundling.

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. It installs the locked dependencies, builds the site and publishes `dist/` to GitHub Pages whenever code is pushed to `main`.

1. Push this project to a GitHub repository. If its default branch is not `main`, change the branch in `.github/workflows/deploy.yml`.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run **Deploy to GitHub Pages** from the repository’s **Actions** tab.
4. Once the workflow completes, open the Pages URL shown in the deployment job.

Vite automatically uses the repository path for project sites (for example, `https://username.github.io/repository/`) and `/` for `username.github.io` user or organization sites. The CV links open the shared Google Drive file in a new tab.
