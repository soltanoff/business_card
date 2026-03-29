# Route Page Redesign

## Goal

Redesign route.html from a jQuery/Typed.js animated landing to a minimal, professional router page consistent with the updated index.html design.

## Design Decisions

- **Full redesign**: new visual style consistent with index.html (monochrome + teal)
- **No jQuery, no Typed.js**: pure HTML/CSS, no JavaScript dependencies
- **CSS fade-in** instead of typing animation
- **Minimalist selector**: two names side by side with "/" divider, both teal
- **Animated gradient blobs** background (same as index.html)
- **Keep Yandex.Metrika** analytics

## Layout

```
        soltanov.dev — select a card

          Ilia    /    Alexander
       Tech Lead     Senior Engineer
```

Centered on screen. On mobile (<=480px): names stack vertically, divider hidden.

## Color Palette (same as index.html)

- Background: #0a0a0a
- Names: #5cd7b8 (teal accent)
- Subtitle text: #555
- Title text: #555, domain name in teal
- Divider: #333
- Hover: text-shadow glow rgba(92, 215, 184, 0.4)

## Files

- **Rewrite**: `route.html` — self-contained single file with inline CSS (no external stylesheets)
- **Delete**: `css/signup.css`, `css/main.css`, `css/hover.css`, `css/bootstrap.css`
- **Delete**: `js/static.js`, `js/index.js`, `js/framework/typed.umd.js`, `js/framework/jquery-3-6-0.js`

## What Stays

- Yandex.Metrika counter (script + noscript)
- Links: ilia.soltanov.dev, alex.soltanov.dev
- Favicon link
