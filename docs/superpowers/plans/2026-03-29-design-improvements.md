# Business Card Design Improvements Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the business card page with glassmorphism, animations, badges, and improved typography/layout.

**Architecture:** All changes are in 3 files: `index.html` (structure + CDN links), `static/css/style.css` (all styling), `static/js/app.js` (particles config). No photo/avatar.

**Tech Stack:** HTML5, CSS3 (animations, backdrop-filter, grid/flex), Bootstrap 5, FontAwesome, Devicon CDN, particles.js

---

### Task 1: Add Devicon CDN and restructure HTML sections

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Devicon CDN link in `<head>`**

Add after FontAwesome link:
```html
<link href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" rel="stylesheet">
```

- [ ] **Step 2: Wrap name + title in a `<header>` section**

```html
<header class="card-header-section">
  <h1 class="gradient-name">Ilia Soltanov</h1>
  <h5 class="subtitle">Technical Lead / Senior Software Engineer</h5>
</header>
```

- [ ] **Step 3: Wrap skills in `<section class="skills-section">`**

Replace the flat `<ul>` with badge-based layout. Group by category using `<div class="skill-group">` with category label and `<span class="badge">` tags containing devicon icons.

- [ ] **Step 4: Restructure contacts as horizontal icon bar**

Change `.contact` from vertical `<ul>` to horizontal `<div class="contact-bar">` with flex layout, each link as an icon button.

- [ ] **Step 5: Verify page renders in browser**

Open `index.html` in browser, confirm structure is intact.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: restructure HTML with sections, badges, devicons, horizontal contacts"
```

---

### Task 2: Glassmorphism card + typography + layout CSS

**Files:**
- Modify: `static/css/style.css`

- [ ] **Step 1: Add CSS custom properties for colors**

```css
:root {
  --accent: rgb(92, 215, 184);
  --accent-glow: rgba(92, 215, 184, 0.4);
  --bg: rgb(10, 10, 10);
  --card-bg: rgba(30, 30, 30, 0.6);
  --card-border: rgba(255, 255, 255, 0.08);
  --text: #b0b0b0;
  --text-bright: #e0e0e0;
}
```

- [ ] **Step 2: Glassmorphism `.container` styles**

```css
.container {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 2.5rem 3rem;
  /* keep existing centering */
}
```

- [ ] **Step 3: Gradient name + subtitle typography**

```css
.gradient-name {
  background: linear-gradient(135deg, var(--accent), #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.subtitle {
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text);
  font-size: 0.85rem;
}
```

- [ ] **Step 4: Skill badge styles**

```css
.skill-group { margin-bottom: 0.75rem; }
.skill-group-label { color: var(--text); font-size: 0.8rem; margin-bottom: 0.4rem; }
.badge {
  background: rgba(92, 215, 184, 0.1);
  border: 1px solid rgba(92, 215, 184, 0.2);
  color: var(--accent);
  padding: 0.3em 0.7em;
  border-radius: 6px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}
.badge:hover {
  background: rgba(92, 215, 184, 0.2);
  box-shadow: 0 0 8px var(--accent-glow);
}
```

- [ ] **Step 5: Horizontal contact bar**

```css
.contact-bar {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.contact-bar a {
  color: var(--text);
  font-size: 1.4rem;
  transition: color 0.3s, text-shadow 0.3s;
}
.contact-bar a:hover {
  color: var(--accent);
  text-shadow: 0 0 10px var(--accent-glow);
}
```

- [ ] **Step 6: Link hover glow globally**

```css
a {
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
a:hover {
  color: var(--accent);
  text-shadow: 0 0 8px var(--accent-glow);
}
```

- [ ] **Step 7: Commit**

```bash
git add static/css/style.css
git commit -m "feat: glassmorphism card, gradient name, badges, hover effects"
```

---

### Task 3: Fade-in animation on load

**Files:**
- Modify: `static/css/style.css`

- [ ] **Step 1: Add keyframes and animation class**

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(calc(-50% + 20px));
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
}

.container {
  animation: fadeInUp 0.8s ease-out both;
}
```

- [ ] **Step 2: Add staggered delays for child sections**

```css
.card-header-section { animation: fadeIn 0.6s 0.2s ease-out both; }
.skills-section { animation: fadeIn 0.6s 0.4s ease-out both; }
.contact-bar { animation: fadeIn 0.6s 0.6s ease-out both; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

- [ ] **Step 3: Commit**

```bash
git add static/css/style.css
git commit -m "feat: fade-in animations on page load"
```

---

### Task 4: Particles.js color + count tuning

**Files:**
- Modify: `static/js/app.js`

- [ ] **Step 1: Change particle color from white to teal accent**

```js
"color": { "value": "#5cd7b8" }
```

- [ ] **Step 2: Change line_linked color to match**

```js
"line_linked": { ..., "color": "#5cd7b8", "opacity": 0.15 }
```

- [ ] **Step 3: Reduce particle count from 120 to 60**

```js
"number": { "value": 60, ... }
```

- [ ] **Step 4: Commit**

```bash
git add static/js/app.js
git commit -m "feat: teal accent particles, reduce count for cleaner look"
```

---

### Task 5: Responsive breakpoints

**Files:**
- Modify: `static/css/style.css`

- [ ] **Step 1: Replace single media query with multiple breakpoints**

```css
@media (max-width: 768px) {
  .container { padding: 1.5rem 1.5rem; max-width: 90vw; }
  .gradient-name { font-size: 1.5rem; }
  .contact-bar { flex-wrap: wrap; justify-content: center; }
}

@media (max-width: 480px) {
  .container { padding: 1rem 1rem; font-size: 0.8rem; }
  .gradient-name { font-size: 1.2rem; }
  .subtitle { font-size: 0.7rem; }
  .contact-bar { gap: 0.8rem; }
}
```

- [ ] **Step 2: Verify in browser at different widths**

- [ ] **Step 3: Commit**

```bash
git add static/css/style.css
git commit -m "feat: improved responsive breakpoints for tablet and mobile"
```

---

### Final verification

- [ ] Open page in browser, check: glassmorphism, gradient name, badges with icons, horizontal contacts, fade-in, particles color, mobile view
