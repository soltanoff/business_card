# Professional Sidebar Redesign

## Goal

Redesign the business card page from a single-column glassmorphism card to a professional sidebar layout with monochrome palette, teal accent, and animated gradient mesh background.

## Design Decisions

- **Vibe:** Professional, strict, trustworthy — like a well-designed CV
- **Layout:** Sidebar (left: identity + contacts, right: skills grid)
- **Colors:** Monochrome (dark grays, white text) + teal (#5cd7b8) only for name and devicon icons
- **Background:** Animated gradient mesh (blurred blobs) replacing particles.js
- **No photo/avatar**

## Architecture

Single-page static HTML/CSS. Three files change:

- `index.html` — restructure to sidebar grid layout
- `static/css/style.css` — complete rewrite for new design
- `static/js/app.js` — remove (particles.js no longer needed)

External dependencies stay: Bootstrap 5 (reset/utilities only), FontAwesome, Devicon CDN.

## Layout Specification

### Desktop (>768px)

```
┌──────────────────────────────────────────────┐
│  ┌─��───────────┬───────────────────────────┐  │
│  │  SIDEBAR    │  SKILLS GRID (2 columns)  │  │
│  │             │                           │  │
│  ��  Name       │  Languages    | Python    │  │
│  │  Role       │  Go           | Row DB    │  │
│  │  Experience │  Column DB    | Doc DB    │  │
│  │             │  Key-Value    | Brokers   │  │
│  │  ─────────  │  Web Servers  | Monitor   │  │
│  │  Contacts   │  Dashboards   | Virtual   │  │
│  │  ✉ GH LI   │                           │  │
│  └─────────────┴───────────────────────────┘  │
│                                               │
│         ░░░ animated gradient blobs ░░░       │
└──────────────────────────────────────────────┘
```

- Card: `grid-template-columns: 220px 1fr`, max-width 820px
- Card background: `rgba(18, 18, 18, 0.85)`, border `rgba(255,255,255,0.06)`, border-radius 12px
- Sidebar: border-right separator, flex column with space-between (info top, contacts bottom)
- Skills grid: `grid-template-columns: 1fr 1fr`, gap 0.5rem 1.5rem

### Mobile (<=768px)

```
┌────────────────────┐
│  Name               │
│  Role               │
│  Experience         │
│  Contacts ✉ GH LI  │
│  ──────���───────     │
│  Languages          │
│  Python             │
│  Go                 │
│  Row DB             │
│  Column DB          │
│  ...                │
└────────────────────┘
```

- Card: single column (`grid-template-columns: 1fr`)
- Sidebar: no border-right, border-bottom instead
- Skills grid: single column (`grid-template-columns: 1fr`)
- Card: `width: auto`, `margin: 1rem`, scrollable content
- body: `align-items: flex-start` to allow scroll when content exceeds viewport

### Tablet (481px–768px)

- Same as mobile but with more padding
- Skills grid stays 1 column (not enough room for 2)

## Color Palette

```
--bg:           #0a0a0a          (page background)
--card-bg:      rgba(18,18,18,0.85)  (card fill)
--card-border:  rgba(255,255,255,0.06)
--accent:       #5cd7b8          (name, devicon icons, contact hover)
--text:         #c0c0c0          (badge text)
--text-muted:   #555             (labels, role, contacts default)
--text-bright:  #e0e0e0          (experience value, badge hover)
```

Badges are monochrome: `background: rgba(255,255,255,0.04)`, `border: rgba(255,255,255,0.08)`, `color: #c0c0c0`. Only devicon `<i>` icons inside badges are teal.

## Background

Three animated blurred blobs using `::before`, `::after`, and an extra div:

- Blob 1: top-left, teal, opacity ~15%, 600px, blur 80px, 14s animation
- Blob 2: bottom-right, teal, opacity ~8%, 500px, blur 80px, 16s animation
- Blob 3: center-right, neutral gray, opacity ~12%, 400px, blur 100px, 18s animation

Each blob animates position with `translate()` and `scale()` on infinite alternate loop. Slow, subtle movement.

## Typography

- Font: `monospace` system stack (SF Mono, Fira Code, Cascadia Code)
- Name: 1.3rem, 700 weight, teal, letter-spacing -0.02em
- Role: 0.7rem, uppercase, letter-spacing 0.15em, muted gray
- Skill group labels: 0.65rem, uppercase, letter-spacing 0.12em, muted
- Badges: 0.73rem, normal weight

## Interactions

- Badge hover: border-color shifts to `rgba(92,215,184,0.3)`, text brightens to `#e0e0e0`
- Contact icon hover: color from `#555` to `#5cd7b8`
- All transitions: 0.25–0.3s ease
- Page load: single fadeIn animation (0.8s) on card

## Files to Remove

- `static/js/app.js` — particles.js config (no longer needed)
- `static/js/particles.min.js` — particles.js library

## Experience Script

Keep the inline `<script>` that computes work experience from `2016-02-01`. No changes.

## What Stays

- Bootstrap 5 CDN (used for reset/utilities)
- FontAwesome CDN (contact icons)
- Devicon CDN (skill icons)
- `unselectable` class on container
- All current skill groups and contact links
