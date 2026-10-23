---
name: Obsidian Cyber-Intelligence
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2eb'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e0e2eb'
  inverse-on-surface: '#2d3037'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#c487ff'
  on-tertiary-container: '#550093'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#10131a'
  on-background: '#e0e2eb'
  surface-variant: '#32353c'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-terminal:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
  metric-huge:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system synthesizes high-velocity modern tech bootcamps with technical portfolio precision. It captures the persona of an elite Applied AI, Agentic Workflow, and Machine Learning Systems engineer: relentlessly outcome-driven, architecturally sound, and palpably intelligent.

The visual style merges **Deep Cyber-Minimalism** with **Luminous Glassmorphism**:
- **Rich Obsidian Canvas**: The UI operates primarily in deep midnight space (`#080B11` and `#0B0F17`), grounding content in an immersive, focused void.
- **Precision Neon Signals**: Vibrant mint/emerald teal (`#10B981` / `#2DD4BF`) and electric cyan (`#38BDF8`) act as navigational beacons, signaling operational metrics, verified outputs, and real-time computation states.
- **Architectural Thematic Accents**: Four contextual accents partition domain authority:
  - *Emerald Tech (`#10B981`)*: Applied automation, node pipelines, active micro-services.
  - *Sapphire Agentic RAG (`#38BDF8`)*: Real-time vector retrieval, LLM memory engines, embeddings.
  - *Amber Enterprise ROI (`#F59E0B`)*: Concrete business returns, labor hours recovered, revenue velocity.
  - *Amethyst Deep Science (`#A855F7`)*: Predictive ML, statistical kernels, academic rigour.
- **Tactile Technical Artifacts**: Crisp 1px glassmorphic borders (`rgba(255, 255, 255, 0.08)`), subtle micro-dot matrix patterns, and hairline dividers evoke terminal-grade HUDs and high-fidelity production dashboards.

## Colors

The palette balances profound dark surfaces with high-contrast, luminous indicators.

### Key Tokens & Functional Application
- **Canvas Root (`#080B11`)**: The primary viewport substrate. Deep, cold obsidian that prevents eye strain during extended analysis.
- **Card Base Surface (`#0B0F17`)**: The default panel elevation, providing subtle separation from the canvas root.
- **Elevated Hover Surface (`#111827`)**: Used for hover states, floating drawers, and nested utility panels.
- **Primary Accent (`#10B981` / Emerald)**: Indicates verified status, active agentic loops, successful deployment markers, and high-impact calls to action.
- **Secondary Accent (`#38BDF8` / Electric Cyan)**: Signifies real-time live data queries, stream processing, terminal highlights, and interactive code toggles.
- **Tertiary Accent (`#A855F7` / Amethyst)**: Designates core machine learning algorithms, deep computer science theory, and specializations.
- **Warning / Metric Accent (`#F59E0B` / Amber)**: Highlights financial metrics, cost reductions, high-urgency notifications, and business ROI.

### Border & Overlay Utilities
- **Ghost Glass Border**: `rgba(255, 255, 255, 0.08)` for crisp containment without visual clutter.
- **Active / Focused Glass Border**: `rgba(45, 212, 191, 0.35)` to convey current system focus.
- **Micro-Glow Wash**: Radially dispersed glows at 6% to 12% opacity behind key hero targets and high-yield metric clusters.

## Typography

The type system blends calculated cybernetic aesthetics with strict reading comfort:
- **Headlines (`Space Grotesk`)**: Technical, geometric, and bold. Headlines feature tight tracking (-0.02em) and stark pure-white headers (`#FFFFFF`) with selective dual-tone gradient word-highlights that emphasize key verbs (e.g., *Intelligent AI Systems*, *Fundamentals*).
- **Body (`Inter`)**: High-legibility neutral sans-serif designed for data absorption. Primary body text uses `#94A3B8` (Slate 400) and `#E2E8F0` (Slate 200) to maintain crisp, non-distracting reading comfort.
- **Labels & Microcopy (`JetBrains Mono`)**: Strict, monospaced execution for telemetry tags, live stream status, ROI labels, code signatures, and pill badges. Tracked out (+0.05em to +0.08em) when uppercase.

## Layout & Spacing

The layout is built upon a **12-column fluid grid** centered within a maximum width of `1280px` (`max-w-7xl`).

### Responsive Adaptation
- **Desktop (>=1024px)**: Full 12-column matrix with `2rem` gutters and `4rem` outer canvas padding. Complex 2-column or 3-column asymmetric splits (e.g., Interactive RAG Sandbox 60% / Telemetry Output 40%).
- **Tablet (768px - 1023px)**: 8-column layout with `1.5rem` gutters and `2.5rem` outer canvas padding. Metrics cards switch to a 2x2 grid; side-by-side terminal demos stack into vertical tabbed segments.
- **Mobile (<768px)**: 4-column layout with `1rem` gutters and `1.5rem` margin. Complex modules collapse to clean full-width cards; toolbars and filters convert to horizontal scrolling flex tracks.

### Spacing Cadence
Sections breathe using standard cadence stops:
- Compact inter-card gaps: `space-md` (`1rem`) to `space-lg` (`1.5rem`).
- Thematic section rhythm: `space-2xl` (`4rem`) to `space-3xl` (`6rem`), paired with subtle gradient dividers to mark transitions across agentic, RAG, and financial domains.

## Elevation & Depth

Visual hierarchy is constructed via tonal layering, low-contrast luminous outlines, and ambient dark-mode glows.

1. **Layer 0 (Canvas Backing)**: `#080B11` with optional subtle CSS micro-dot matrix pattern (`radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)` with a `24px` grid).
2. **Layer 1 (Card & Sub-Containers)**: `#0B0F17` encased in a hairline `1px solid rgba(255, 255, 255, 0.08)` border. Backdrop blur is applied when positioned over micro-dots (`backdrop-blur-md`).
3. **Layer 2 (Interactive Floating & Active Cards)**: `#111827` border enhanced to `1px solid rgba(45, 212, 191, 0.25)`.
4. **Luminous Glow Accents**: Dynamic drop-shadows are restricted to active neon states:
   - *Emerald Glow*: `0 0 24px -4px rgba(16, 185, 129, 0.25)`
   - *Cyan Pulse*: `0 0 24px -4px rgba(56, 189, 248, 0.25)`
   - *Amethyst Halo*: `0 0 28px -6px rgba(168, 85, 247, 0.2)`
   Drop shadows should remain ethereal and diffused, never harsh or opaque.

## Shapes

The interface balances sharp, technical discipline with approachable, tactile interactions:
- **Default Elements (`0.5rem` / `8px`)**: Input fields, inner terminal shells, metric micro-cards, code blocks, and data tables.
- **Cards & Major Panels (`rounded-lg` / `1rem` / `16px`)**: Curated project showcases, RAG interactive playpens, and testimonial containers.
- **Modal Containers & Deep Section Frames (`rounded-xl` / `1.5rem` / `24px`)**: Outer hero card frames, ROI calculator shells, and primary interactive sections.
- **Pills & Status Signals (`full-pill` / `9999px`)**: Category filter chips, operational badges, "Available for Work" indicators, and action triggers.

## Components

### Buttons & Action Triggers
- **Primary Cyber Button**: Filled `#10B981` (Emerald Teal) or `#2DD4BF` with text in stark `#080B11` JetBrains Mono bold. Rounded `0.5rem` or pill-shaped `9999px`. On hover, applies an emerald edge glow (`0 0 16px rgba(16, 185, 129, 0.4)`) with an interactive arrow micro-slide (`translateX(4px)`).
- **Secondary Ghost Button**: Solid dark surface (`#0B0F17`) with `1px solid rgba(255, 255, 255, 0.12)` border and `#F8FAFC` typography. Hover shifts the border to `#38BDF8` (Cyan) and text to `#38BDF8`.
- **Icon Action Buttons**: Encapsulated `36px x 36px` squares with rounded `8px` borders, subtle `rgba(255, 255, 255, 0.05)` fill, displaying SVG vectors in `#94A3B8`.

### Status Badges & Category Chips
- **Pill Category Chips**: Background `rgba(255, 255, 255, 0.03)` with `1px solid rgba(255, 255, 255, 0.08)`. Text rendered in `11px` JetBrains Mono uppercase.
- **Active Filter State**: High-contrast invert or cyan tint (`background: rgba(56, 189, 248, 0.1)`, `border-color: #38BDF8`, `color: #38BDF8`).
- **Telemetry Live Pill**: Includes a `6px` pulsing neon dot (emerald or cyan) with CSS keyframe radar ripple, paired with labels like `ONLINE`, `99.2% ACCURACY`, or `ACTIVE AGENT`.

### Interactive RAG & Terminal Consoles
- **Console Frame**: Darkest obsidian `#05070B` casing with top title bar containing mock window dots or active terminal tabs (`My Resume Assistant`, `Vector DB Stream`).
- **Prompt Field**: Integrated input bar with pill action send button, monospace query text, and contextual instant prompts below.

### Metric Cards & Key Performance Indicators
- **Metric Unit**: Prominent `metric-huge` number in `#FFFFFF` with trailing mint/cyan unit (`15+`, `< 48h`, `100%`).
- **Label**: Monospace subhead in `#64748B` uppercase tracking.
- **ROI Delta Indicator**: Pill badge beneath the metric tagged with `Verified ROI: +42% After-Hours Conversion` in `#10B981`.

### Form Fields & Inputs
- **Input Background**: Solid `#080B11` with `1px solid rgba(255, 255, 255, 0.1)`. Height `44px`, padding `0 1rem`, text `#FFFFFF`.
- **Focus State**: `outline: none; border-color: #10B981; box-shadow: 0 0 0 1px #10B981, 0 0 12px rgba(16, 185, 129, 0.2)`.
- **Placeholder**: `#475569` font style clean and unobtrusive.