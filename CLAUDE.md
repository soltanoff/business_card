# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page business card / portfolio website for Ilia Soltanov (Technical Lead / Senior Software Engineer). Dark theme, sidebar layout, monochrome + teal accent.

## Architecture

```
index.html           # The website (edit directly)
static/css/style.css # All styling: layout, colors, animations, responsive
assets/index.png     # Preview screenshot
```

No build step, no bundler, no server-side code. Edit HTML/CSS directly and open `index.html` in a browser.

## Design Decisions

- Sidebar layout: left panel (identity + contacts), right panel (skills grid 2-col)
- Monochrome palette with single teal accent (#5cd7b8) for name and devicon icons
- Animated gradient mesh background (CSS blurred blobs, no JS)
- Responsive: single column on <=768px
- No photo/avatar by design
- User manages all git operations — do not run git add/commit/push

## Tools

Use Narsil MCP tools for code analysis tasks:
- `mcp__narsil__get_project_structure` — directory layout overview
- `mcp__narsil__search_code` — semantic/keyword search across files
- `mcp__narsil__find_symbols` — find classes, functions, variables
- `mcp__narsil__get_file` — read files with optional line ranges
- `mcp__narsil__scan_security` — security vulnerability scan
- `mcp__narsil__check_owasp_top10` / `check_cwe_top25` — security checklists
- `mcp__narsil__find_dead_code` — unused code detection
- `mcp__narsil__get_complexity` — code complexity metrics

## Dependencies (CDN)

- Bootstrap 5.3.0-alpha1 (reset/utilities)
- FontAwesome (contact icons)
- Devicon (technology skill icons)
