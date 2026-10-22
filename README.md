# Sac — Interactive Chess Openings & Gambits Trainer

An interactive, modern chess trainer designed to help players master classical openings, sharp gambits, tactical sacrifices, and master-level continuations.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/keerthanmahesh/sac)

---

## Features

- **22+ Curated Openings & Gambits**:
  - **Gambits & Traps**: Evans Gambit, King's Gambit (Muzio, Kieseritzky, Classical), Queen's Gambit (QGA, Elephant Trap, Carlsbad), Smith-Morra Gambit, Stafford Gambit, Danish Gambit, Vienna Gambit, Budapest Gambit, and the Fried Liver Attack.
  - **Classical Openings & Defenses**: Italian Game (Moller Attack, Giuoco Pianissimo, Two Knights Traxler), Ruy Lopez (Chigorin, Marshall Attack, Open Spanish), Sicilian Defense (Najdorf English Attack, Dragon Yugoslav Attack, Fischer-Sozin), Caro-Kann (Advance Shirov, Classical Capablanca, Fantasy Trap), Slav Defense (Czech Mainline, Meran Variation, Exchange), Alapin Sicilian, English Opening, Reti Opening, Bird's Opening, Nimzo-Larsen Attack, Scotch Game, London System, and Catalan Opening.
- **Deep Tactical Continuations**: Lines extend past move 4–5 into their real tactical payoffs (15 to 28 plies each), showcasing checkmates, royal forks, piece sacrifices, and master refutations.
- **Interactive Move Validation**: Drag-and-drop or click-to-move chessboard powered by `chess.js` and `react-chessboard` with real-time legal move feedback.
- **Why-This-Move Explanations**: Strategic rationales and key squares highlighted for every ply.
- **Move History & Timeline Ribbon**: Chronological timeline of all completed moves with stepping buttons (`⏮ ◀ ▶ ⏭`), past position preview, and 1-click `Resume Live Board →`.
- **Instructional Tactical Arrows & Sacrifice Banners**: Visual arrows pointing out threats and breakdowns of material surrendered vs. positional compensation.
- **Progress & Mastery Tracking**: Persists mastered variations directly in browser local storage.
- **Sound & Celebrations**: Crisp move audio and victory confetti upon completing lines.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Chess Engine & Board**: [chess.js](https://github.com/jhlywa/chess.js) & [react-chessboard](https://github.com/Clariity/react-chessboard)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Effects**: [Lucide React](https://lucide.dev/) & [canvas-confetti](https://github.com/catdad/canvas-confetti)

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/keerthanmahesh/sac.git
   cd sac
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Compiles and builds the production application with static prerendering.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint across the codebase.

---

## Deployment on Vercel

This application is ready for zero-configuration deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Deploy! No environment variables or custom server configurations are required.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
