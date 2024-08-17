<div align="center">
  <a href="https://github.com/tyronejosee/project_fandomhub_docs#gh-light-mode-only" target="_blank">
    <img src="docs/assets/logo.svg" alt="logo-light" width="80">
  </a>
  <a href="https://github.com/tyronejosee/project_fandomhub_docs#gh-dark-mode-only" target="_blank">
    <img src="docs/assets/logo.svg" alt="logo-dark" width="80">
  </a>
</div>
<div align="center">
  <h1><strong>FandomHub - Docs</strong></h1>
  <a href="https://project-fandomhub-docs.pages.dev/"><strong>Deploy on Cloudflare 🚀</strong></a>
</div>
<br>
<p align="center">
Documentation created for the API and platform of FandomHub, made with VitePress and Cloudflare Pages.
<p>
<p align="center">
  <a href="https://vitepress.dev/">
    <img src="https://img.shields.io/badge/vitepress-1.2.3-white" alt="python-version">
  </a>
</p>

## ⚙️ Installation

Clone the repository.

```bash
git clone git@github.com:tyronejosee/project_fandomhub_docs.git
```

Install dependencies.

```bash
npm i
```

Run the development server.

```bash
npm run docs:dev
```

Build the project for production.

```bash
npm run docs:build
```

## 💡 Github Pages (Optional)

```yml
name: FandomHub Github Pages

on:
  push:
    branches: [main]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with VitePress
        run: |
          npm run docs:build # o pnpm docs:build / yarn docs:build / bun run docs:build
          touch docs/.vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
