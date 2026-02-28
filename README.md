# Vinext Landing Page

A community-built landing page for [vinext](https://github.com/cloudflare/vinext) — the Vite plugin that reimplements the Next.js API surface.

This repository is **not** affiliated with, endorsed by, or officially maintained by Cloudflare.

---

## About vinext

vinext reimplements the Next.js API on Vite — routing, SSR, React Server Components, server actions, and more. Key features include:

- **Agent Skill for migration** — Works with Cursor, Claude Code, OpenCode, Codex, and other AI coding tools. Run `npx skills add cloudflare/vinext` and say "migrate this project to vinext".
- **Cloudflare Workers deployment** — Single `vinext deploy` command, zero cold starts.
- **94% API coverage** — Your existing Next.js code works with minimal changes.

---

## From Pandito, with admiration

Pandito is a small startup that has always admired Cloudflare. We've watched from the sidelines as they've built in the open — making the internet faster, safer, and more resilient for everyone. When they announced vinext, rebuilt in a week with AI, we felt that same spark of possibility: the future of software development is being written in real time.

This landing page is our humble contribution. It's a love letter to the team that dared to reimplement Next.js on Vite. To the engineers who believe that great APIs deserve great foundations. And to everyone who keeps building, shipping, and pushing the web forward.

We're doing our small part. We hope it helps.

---

## Requirements

- **Node.js 22+** — vinext uses `fs.promises.glob`, available only in Node 22+

## Quick start

```bash
# 1. Use Node 22+ (required)
nvm use 22          # if you use nvm and have Node 22 installed
# or: nvm install 22 && nvm use 22
# or: fnm use       # if you use fnm (reads .nvmrc)

# 2. Install dependencies
pnpm install
# or: npm install

# 3. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Installing Node 22

| Tool | Command |
|------|---------|
| **nvm** | `nvm install 22 && nvm use 22` |
| **fnm** | `fnm install 22 && fnm use` |
| **Homebrew** | `brew install node@22` |

---

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `pnpm dev`    | Start dev server with HMR      |
| `pnpm build`  | Production build               |
| `pnpm start`  | Start production server        |
| `pnpm deploy` | Build and deploy to Workers    |

---

## Links

- [vinext on GitHub](https://github.com/cloudflare/vinext)
- [Agent Skills](https://agentskills.io/home) — AI-assisted migration for vinext
- [How we rebuilt Next.js with AI in one week](https://blog.cloudflare.com/vinext/) (Cloudflare Blog)
- [Cloudflare](https://www.cloudflare.com/)

---

With love by **Pandito**
