# SnackSync - Interactieve Boterham Bouwer

## Concept

**SnackSync** is een interactieve 3D webapplicatie waarmee gebruikers stap voor stap hun eigen virtuele boterham kunnen samenstellen. De applicatie combineert een intuïtief formulier met real-time 3D visualisatie en speelse animaties.

### Wat maakt dit project uniek?

- **Synchrone ervaring**: Terwijl je ingrediënten selecteert in het formulier, zie je direct de 3D boterham groeien met vloeiende animaties
- **Stapsgewijze opbouw**: Van brood → beleg → top → finishing touch (vork!)
- **Speelse GSAP animaties**: Elk ingrediënt heeft zijn eigen unieke animatie (bounce, throw, spin, stagger)
- **Moderne tech stack**: React 19, Three.js/R3F, Zustand state management, GSAP animaties

## Features

-  Interactief stappenformulier met validatie
-  Real-time 3D preview van je boterham
-  Vloeiende animaties per ingrediënt
-  Voortgangsbalk die je creatie volgt
-  Responsive design

## Tech Stack

| Technologie       | Gebruik            |
| ----------------- | ------------------ |
| React 19          | UI Framework       |
| React Three Fiber | 3D rendering       |
| Three.js          | 3D graphics        |
| GSAP              | Animaties          |
| Zustand           | State management   |
| React Hook Form   | Formulier handling |
| Vite              | Build tool         |

## Installatie

```bash
npm install
npm run dev
```

## Structuur

```
src/
├── components/
│   ├── Boterham/      # 3D model component
│   ├── Form/          # Hoofdformulier
│   ├── FormComponents/ # Herbruikbare form onderdelen
│   └── Scene/         # 3D scene met animaties
├── animations/        # GSAP animatie functies
├── store/            # Zustand state management
└── Experience.jsx    # Three.js Canvas setup
```
