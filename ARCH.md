# Architecture Overview

## Purpose

Static single-page business card website for Ilia Soltanov (Technical Lead / Senior Software Engineer). Displays professional skills, experience, and contact links with a dark-themed professional design.

## Directory Structure

```
business_card/
├── index.html             # The website (single entry point)
├── static/
│   └── css/
│       └── style.css      # All styling: layout, colors, animations, responsive
├── assets/
│   └── index.png          # Preview screenshot
├── CLAUDE.md              # AI assistant guidance
├── ARCH.md                # This file
├── README.md              # Project description
└── LICENSE                # MIT
```

No build step, no bundler, no server-side code. Pure HTML + CSS.

## HTML Structure (index.html)

Sidebar layout using CSS Grid:

```
┌─────────────┬──────────────────────────┐
│   SIDEBAR   │     MAIN CONTENT         │
│             │                          │
│  Name       │  Skills Grid (2 columns) │
│  Role       │  ┌──────────┬──────────┐ │
│  Experience │  │ Group 1  │ Group 2  │ │
│             │  │ Group 3  │ Group 4  │ │
│  ─────────  │  │ ...      │ ...      │ │
│  Contact    │  └──────────┴──────────┘ │
│  Icons      │                          │
└─────────────┴──────────────────────────┘
```

- `<aside class="sidebar">` — identity: name (teal accent), role, computed experience, contact icon links
- `<main class="content">` — skills in 2-column CSS Grid, organized by category (Languages, DB types, Brokers, Web Servers, Monitoring, Dashboards, Virtualization)
- Inline `<script>` — computes work experience from `2016-02-01` dynamically

## CSS Architecture (style.css)

Single stylesheet, organized in sections:

| Section | Responsibility |
|---------|---------------|
| Custom Properties | Color palette: `--bg`, `--accent`, `--text`, `--card-bg`, etc. |
| Base | html/body reset, flex centering, link defaults |
| Gradient Background | 3 animated blurred blobs (`::before`, `::after`, extra div) |
| Card | `.card-wrapper` grid layout (220px sidebar + 1fr content) |
| Sidebar | Name, role, experience, contacts styling |
| Skill Badges | Monochrome badges with teal devicon icons, hover effects |
| Responsive | ≤768px: single column, sidebar stacks on top; ≤480px: compact spacing |

### Background Animation

CSS-only animated gradient mesh — three blurred circular blobs with different sizes, positions, and animation timings (14s, 16s, 18s). No JavaScript required.

## External Dependencies (CDN)

| Dependency | Purpose |
|-----------|---------|
| Bootstrap 5.3.0-alpha1 | CSS reset and utility classes |
| FontAwesome 6+ | Contact icons (envelope, GitHub, LinkedIn, Telegram, Instagram) |
| Devicon | Technology skill icons (Python, Go, Docker, PostgreSQL, etc.) |

## Design Principles

- **Monochrome + single accent**: teal `#5cd7b8` used only for name and devicon icons
- **Professional/strict**: minimal decoration, no gradients on badges, uppercase labels
- **No photo/avatar**: by design choice
- **CSS-only animations**: gradient blobs, fade-in on load, hover transitions
- **Mobile-first responsive**: sidebar collapses to top on narrow screens
