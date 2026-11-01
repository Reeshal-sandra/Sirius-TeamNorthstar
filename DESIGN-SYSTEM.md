# Sirius Design System

## Colors

| Token       | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Background  | `#F7F2E8` | Page background              |
| Surface     | `#FFFFFF` | Cards, inputs, modals        |
| Ink (Text)  | `#1F2933` | Body text, borders           |
| Primary     | `#1F5F4A` | Buttons, active states       |
| Accent      | `#E0A030` | Highlights, stars            |
| Error       | `#B23B2E` | Wrong answers, warnings      |
| Success     | `#2E7D4F` | Correct answers, badges      |
| Muted       | `#5F6B76` | Secondary text, labels       |
| Maths       | `#D9822B` | Subject strip color          |
| Science     | `#2F7F8F` | Subject strip color          |
| English     | `#8C4A6B` | Subject strip color          |

Flat solid colors only. No gradients, glassmorphism, blur, glow, or drop shadows.

## Typography

| Element | Font     | Size  | Weight   |
|---------|----------|-------|----------|
| H1      | Fraunces | 40px  | Semibold |
| H2      | Fraunces | 28px  | Semibold |
| Body    | Inter    | 18px  | Regular  |
| Small   | Inter    | 15px  | Regular  |
| Badge   | Inter    | 13px  | Medium   |

Fonts loaded via `next/font/google` as CSS variables `--font-fraunces` and `--font-inter`.

## Layout Rules

- Desktop-first for laptops.
- Content centered in a container: `max-width: 1100px`, `margin: 0 auto`, `padding: 0 24px`.
- Multi-column grids on wide screens; stack to one column on narrow screens.
- Borders: `1.5px solid` using ink or ink/10.
- Corner radius: `10px`.
- Generous whitespace between sections (32–48px).
- Text is left-aligned.
- Buttons: minimum height `44px`.
- Copy is short, calm, and plain — like a patient teacher.

## Components

### Button
Props: `children`, `variant` ("primary" | "secondary"), `onClick`, `disabled`, `className`, `type`

### Card
Props: `children`, `className`

### Badge
Props: `children`, `color` ("muted" | "success" | "error" | "accent" | "primary"), `className`

### Navbar
Props: `language`, `studentName`, `onToggleLanguage`

### ToggleGroup
Props: `options` (array of `{ value, label }`), `value`, `onChange`

### OptionButton
Props: `children`, `state` ("default" | "correct" | "wrong" | "disabled"), `onClick`, `disabled`

### ProgressBar
Props: `current`, `total`, `className`

### ExplanationCard
Props: `misconception` (object with `name` string and `explanation` object), `style` ("steps" | "picture" | "story"), `className`

### SubjectCard
Props: `name`, `lessonCount`, `completedCount`, `color` ("maths" | "science" | "english"), `onClick`, `className`

### LessonRow
Props: `name`, `bestScore`, `onStart`, `className`

## Mascot

Component: `components/Mascot.js`
Props: `page` ("home" | "subject" | "lesson" | "result" | "wrong"), `className`

Image files in `public/mascot/`:

| File         | Page      | Width |
|--------------|-----------|-------|
| home.png     | Home      | 200px |
| subject.png  | Subjects  | 140px |
| lesson.png   | Lesson    | 140px |
| result.png   | Results   | 140px |
| wrong.png    | Wrong ans | 140px |

If `wrong.png` is missing, falls back to `lesson.png`. If any image is missing, the component renders nothing.

## Strict Rules

- No emoji in the UI.
- No purple/blue "AI" palette.
- No sparkle icons.
- No gradients, glassmorphism, blur, glow, or drop shadows.
- All text diagrams in explanations use `[###---]` style, not emoji or images.
