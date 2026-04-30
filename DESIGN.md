# Design System: Bytewer

## 1. Visual Theme & Atmosphere
The project employs a modern, clean, and adaptable aesthetic, featuring distinct light and dark modes. The atmosphere leans towards a sophisticated, tech-oriented look with a striking brand color that pops against both light backgrounds and deep, moody dark surfaces. The design relies on subtle contrasts and precisely rounded geometries, creating an interface that feels structured yet approachable.

## 2. Color Palette & Roles

The system is built on OKLCH values for predictable and perceptually uniform color scaling.

**Brand Colors:**
* **Vibrant Indigo-Purple (#5B4EFF)** (`oklch(57.75% 0.246 270deg)`)
  * **Role:** Primary brand color, used for prominent section blocks, key interactive elements, and scrollbar highlights.
* **Deep Night Sky (#14121A)** (`oklch(8% 0.01 270deg)`)
  * **Role:** Brand background color (dark mode specific).
* **Elevated Night Surface (#1E1B26)** (`oklch(13% 0.02 270deg)`)
  * **Role:** Brand surface color (dark mode specific).

**Base Interface (Light Theme / Dark Theme):**
* **Background:** Pure White (`oklch(100% 0 0deg)`) / Near Black (`oklch(14.5% 0 0deg)`)
  * **Role:** The foundational canvas of the application.
* **Foreground:** Very Dark Gray (`oklch(14.5% 0 0deg)`) / Pure White (`oklch(98.5% 0 0deg)`)
  * **Role:** Primary text color ensuring high readability.
* **Card Background:** Off-White with a hint of purple (`oklch(96.5% 0.005 265deg)`) / Dark Gray (`oklch(17% 0 0deg)`)
  * **Role:** Container background for grouped content, providing slight separation from the main background.
* **Primary Actions:** Dark Gray (`oklch(20.5% 0 0deg)`) / White (`oklch(98.5% 0 0deg)`)
  * **Role:** High-emphasis components and main action buttons.
* **Secondary/Muted:** Light Gray (`oklch(97% 0 0deg)`) / Medium Dark Gray (`oklch(26.9% 0 0deg)`)
  * **Role:** Secondary buttons, quiet backgrounds, and subtle structural elements.
* **Border & Input:** Very Light Gray (`oklch(92.2% 0 0deg)`) / Medium Dark Gray (`oklch(26.9% 0 0deg)`)
  * **Role:** Dividers, input outlines, and component boundaries.

**Feedback & Status:**
* **Destructive:** Bright Red/Orange (`oklch(57.7% 0.245 27.325deg)`) / (`oklch(39.6% 0.141 25.723deg)`)
  * **Role:** Error states and destructive actions (e.g., delete buttons).
* **Success:** Soft Green (`oklch(78% 0.08 200deg)`) / (`oklch(28% 0.1 200deg)`)
  * **Role:** Positive feedback, confirmations.
* **Warning:** Yellow (`oklch(89% 0.1 75deg)`) / (`oklch(35% 0.08 70deg)`)
  * **Role:** Cautions and warnings.

## 3. Typography Rules
* **Font Families:**
  * **Sans-serif:** Inter (`var(--font-inter)`) and Geist Sans (`var(--font-geist-sans)`). Provides a clean, highly legible, and modern typographic base.
  * **Monospace:** Geist Mono (`var(--font-geist-mono)`). Used for code blocks or technical data.
* **Headings:**
  * Base headings have normal font-weight globally, but `h2` elements emphasize weight (`font-weight: 600`).
  * Sizing scales responsively (e.g., `h1` at 2.5rem for base, expanding to 3.5rem at `md` breakpoints).

## 4. Component Stylings
* **General Geometry:** The standard radius is set to `0.625rem` (10px). This results in smoothly rounded corners that are pronounced enough to be friendly but sharp enough to maintain a structured, professional look.
* **Cards/Containers:** Feature subtly rounded corners (10px). They rely on slight background color shifts (e.g., Card vs. Background) and a subtle border (`border-border`) rather than heavy drop shadows to distinguish layers.
* **Inputs/Forms:** Squared off with 10px rounded corners, matching the global radius. Defined by a subtle border that highlights (`outline-ring/50`) when focused.
* **Scrollbars:** Customized to be sleek and thin (10px width globally, 4px for specific components like testimonials) with a dark track and a thumb that highlights to the Vibrant Indigo-Purple (`#5B4EFF`) on hover, reinforcing the brand identity.

## 5. Layout Principles
* **Structure:** The layout is anchored by a centered `.container` class with responsive maximum widths matching specific breakpoints (sm: 40rem, md: 48rem, lg: 64rem, xl: 80rem, 2xl: 86rem).
* **Spacing:** Uses consistent inline padding (e.g., 1rem by default, 2rem at the `md` breakpoint) to ensure content breathes while remaining aligned.
* **Grid & Columns:** Relies heavily on Tailwind's grid system, with explicit support for 4, 6, 8, and 12 column spans for flexible layout combinations.
* **Full Height:** The main body is forced to take up at least the full viewport height (`min-h-[100vh]`) utilizing a flex column layout, ensuring footers are pushed to the bottom.