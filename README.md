# Math Editor Demo

A simple Next.js demo for **rendering and editing maths** in a web app. Built for BridgePoint EdTech testing.

## Features

- **MathRenderer**: Renders LaTeX in text. Supports inline `\( ... \)` and block `\[ ... \]`.
- **MathEditor**: Textarea with LaTeX input, snippet palette (fractions, roots, Greek, etc.), and live preview.
- **KaTeX** for rendering (fast, lightweight).

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## LaTeX Quick Reference

| Symbol | LaTeX |
|--------|-------|
| Fraction | `\frac{a}{b}` |
| Power | `x^2`, `e^{-x}` |
| Root | `\sqrt{x}` |
| Plus/minus | `\pm` |
| Greek | `\alpha`, `\beta`, `\pi`, `\theta` |
| Sum/Integral | `\sum_{i=1}^{n}`, `\int_0^1` |

## Components

- `src/components/MathRenderer.tsx` — Client component for LaTeX → HTML
- `src/components/MathEditor.tsx` — Editor with snippets and live preview
- `src/components/MathEditorDemo.tsx` — Demo wrapper with edit + student view
