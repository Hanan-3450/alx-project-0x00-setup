# ALX Project 0x00 - Next.js Setup

This project is part of the ALX Frontend Curriculum.  
It sets up a modern web application using:

- Next.js (v13+)
- TypeScript
- Tailwind CSS
- ESLint
- Import Aliases

## Project Structure

- `pages/`: Application routes (using Pages Router)
- `components/`: For reusable UI components (to be added later)
- `styles/`: Global and component-level styles
- `public/`: Static assets

## Setup Commands

```bash
npx create-next-app@latest alx-project-0x00 --typescript
# Options selected:
# ✔ ESLint
# ✔ Tailwind CSS
# ✔ Import alias (@/*)
# ✘ No for App Router
# ✘ No for /src directory

npm run dev -- -p 3000
