# CLAUDE.md — Le Cabinet

Guidance for Claude Code (and humans) working in this repository.

---

## 1. What this is

**Le Cabinet** is a personal collection of interactive *fiches de révision*
(study sheets) in French, covering **History/Geopolitics** and **Italian
language**. It is a **static website**: a catalogue landing page plus one
self-contained HTML page per fiche.

- **No build step, no framework, no dependencies.** Pure HTML, CSS and
  vanilla JS. You edit files and they are the site.
- Hosted as static files (GitHub Pages style). Fonts come from Google Fonts
  over CDN; everything else is local.
- Content language is **French**. Keep UI text, comments and commit-visible
  strings consistent with the existing French copy.

**Philosophy:** keep it boring and dependency-free. Do **not** introduce a
bundler, a framework, Sass/PostCSS, a package.json, or a dev server. The whole
point is that any page can be opened directly in a browser and edited by hand.
Reach for tooling only if the user explicitly asks.

---

## 2. Directory structure

```
/
├── index.html              # The catalogue / landing page (standalone)
├── fiches.js               # The MANIFEST: the list of all fiches (edit this to add one)
├── CLAUDE.md               # This file
├── assets/                 # Shared, deduplicated CSS
│   ├── base.css            #   universal plumbing for EVERY page (theme-agnostic)
│   ├── theme-histoire.css  #   shared design system for the History family
│   └── theme-langues.css   #   shared design system for the Languages family
└── fiches/                 # One self-contained HTML file per study sheet
    ├── premiere-guerre-mondiale.html
    ├── entre-deux-guerres.html
    ├── seconde-guerre-mondiale.html
    ├── monde-depuis-1945.html
    ├── conjugaison-italienne.html
    ├── mots-utiles-italien.html
    ├── prepositions-italien.html
    ├── gerondif-italien.html
    ├── pronoms-italien.html
    ├── passato-imperfetto-italien.html
    └── subjonctif-italien.html
```

`index.html` and `fiches.js` stay at the **root**. Sheets live in **`fiches/`**.
Shared CSS lives in **`assets/`**.

---

## 3. How the page system works

There are two kinds of page:

1. **The catalogue — `index.html`.**
   It reads the manifest `fiches.js` (which sets the global `window.FICHES`
   array) and renders the cards client-side: it groups fiches by `categorie`,
   colours each card from the category name, powers the live search box, and
   shows the fiche/category counts. It is a **singleton** — it keeps its own
   palette and catalogue-specific CSS inline, and only links `assets/base.css`.

2. **The fiches — `fiches/*.html`.**
   Each is a standalone document. It links the shared stylesheets it needs,
   then carries a small inline `<style>` for whatever is unique to that one
   sheet. Most fiches have a sticky top-bar with a "← Le Cabinet" link back to
   `../index.html`.

`fiches.js` is the single source of truth for *what appears in the catalogue*.
A fiche file existing in `fiches/` does nothing until it has an entry here.

---

## 4. CSS architecture (read this before touching styles)

The look is layered. Each page loads, in cascade order:

```
base.css   →   theme-<family>.css   →   inline <style> (page-specific)
(universal)    (one whole family)       (this page only)
```

- **`assets/base.css`** — tiny, theme-agnostic plumbing only (box-sizing reset,
  smooth scroll, paragraph spacing, reduced-motion). Nothing here assumes a
  colour or a font. Keep it tiny.

- **`assets/theme-histoire.css`** and **`assets/theme-langues.css`** — each is a
  **complete, self-contained design system** for one family: its palette
  (`:root` tokens), typography, layout shell (`.wrap`, `.eyebrow`, `.cover`…),
  and components (top-bar, menus, timelines, tables, quizzes, call-outs).

- **Per-page inline `<style>`** — only the rules unique to that fiche
  (its extra `:root` tokens, bespoke tables/diagrams, etc.).

### Why two separate theme files instead of one shared base?

**Deliberate.** The two families are kept fully independent so they can be made
to look *very different* in the future without affecting each other. Editing
`theme-histoire.css` restyles the entire History family and **never** touches
Languages, and vice-versa. Do not "DRY up" the two theme files by merging their
common parts into a shared layer — that independence is the design goal, not an
oversight. `base.css` holds only what is genuinely identity-neutral.

### Cascade rule when editing

Shared stylesheets are linked **before** the page's inline `<style>`, so a
page's inline rule always wins over the shared one at equal specificity. If you
want to override a shared rule for a single fiche, add the override to that
fiche's inline `<style>` — don't fork the theme file.

---

## 5. Design tokens

Both families expose the same *structural* token names (`--paper`, `--card`,
`--ink`, `--ink-soft`, `--rule`, `--rule-strong`, `--shadow`) plus their own
accent tokens. Always style with `var(--token)`, never hard-coded hex, so a
fiche inherits its family's palette.

**History (`theme-histoire.css`)** — warm paper + a WWI "allied / central
powers" accent set:
```
--paper:#E4DBC5  --card:#EFE8D6  --card-2:#E9E0CB  --ink:#232820  --ink-soft:#56594B
--allied:#8A3324 (rouge brique)   --central:#5C6A50 (vert-de-gris)
--slate:#3C5A68 (bleu ardoise)    --brass:#947726 (laiton)
```

**Languages (`theme-langues.css`)** — lighter paper + Italian verb-group
accents:
```
--paper:#ECE5D3  --card:#F4EFE2  --card-2:#E7DEC9  --ink:#23221C  --ink-soft:#595645
--g-are:#3B6E55  --g-ere:#9C3A2A  --g-ire:#2E5C72  --g-isc:#2F6D76  --gold:#8C6E1C
```

Page-specific accent tokens (e.g. `--p-di` for prepositions, `--t-pp` /
`--t-imp` for passato vs imperfetto) live in that fiche's inline `<style>`.

### Catalogue card colours

`index.html` colours each card by matching the `categorie` string
(case-insensitive) — see `colourFor()`:

| Category keywords | Card accent |
|---|---|
| `hist`, `géo/geo`, `politiq`, `guerre` | red brick (`allied`) |
| `phys`, `math`, `chim`, `scien`, `bio`, `ingé`, `nucl` | slate blue |
| `lang`, `ital`, `angl`, `espagn`, `allem`, `philo`, `littér`, `français` | sage green (`central`) |
| anything else | brass |

So the `categorie` you choose in `fiches.js` decides both the grouping heading
and the card colour.

---

## 6. Key shared component classes

Reuse these instead of reinventing markup; they're defined in the theme files.

- **Both families:** `.wrap` (centred column), `.eyebrow` (mono kicker label),
  `.cover` (page header), `.lead` (intro paragraph), `.topbar` / `.topbar-in`
  (sticky bar), `.part` / `.part-head` (section blocks).
- **History:** `.timeline` / `.tl-event` / `.tl-card` (frises), `.quiz` /
  `.q` / `.opts` / `.opt` (quizzes), `.dossier-body` / `.flip` (foldables),
  `.note-box`, `.chart` / `.bar-row` (bar charts), `.tb-home` (home button).
- **Languages:** `.note--piege` / `.note--ortho` / `.note--reflexe` /
  `.note--retenir` (coloured call-outs), `.fan` / `.fan-row` (fan tables),
  `.ph` / `.ph-col` (phrase columns), `.scroller` / `.scroll-hint` (mobile
  horizontal-scroll tables), `.chip`, `.kbd`, `.totop`.

---

## 7. How to add a new fiche

1. **Create the file** at `fiches/<slug>.html` (kebab-case, e.g.
   `fiches/futur-italien.html`).

2. **In its `<head>`**, keep the Google-Fonts links, then link the shared CSS
   **for its family**:
   ```html
   <link rel="stylesheet" href="../assets/base.css">
   <link rel="stylesheet" href="../assets/theme-langues.css">  <!-- or theme-histoire.css -->
   ```
   Add an inline `<style>` afterwards only for rules unique to this fiche.
   Easiest start: copy an existing fiche from the same family and replace the
   body content. (Paths use `../` because the fiche lives in `fiches/`.)

3. **Add a "home" link** in the top-bar pointing to `../index.html` (copy the
   `.tb-home` block from a sibling fiche).

4. **Register it** in `fiches.js` — copy the template block and fill it in.
   The `fichier` path **starts with `fiches/`**:
   ```js
   {
     titre: "Le futur (futuro semplice & anteriore)",
     fichier: "fiches/futur-italien.html",
     categorie: "Langues",           // controls grouping + card colour
     description: "…",
     date: "2026-07"
   },
   ```

5. **Verify** (see §9) and commit.

---

## 8. How to add a new subject / family

- A new **category** within an existing family: just use a new `categorie`
  string in `fiches.js`. If you want a specific card colour, add a keyword
  branch to `colourFor()` in `index.html`.
- A whole new **visual family** (e.g. Sciences with its own identity): add
  `assets/theme-sciences.css` (a self-contained design system like the existing
  themes), link it from those fiches, and — if desired — give it a card colour
  in `colourFor()`. Do not entangle it with the other theme files.

---

## 9. Verifying visual changes (important)

Because there is no test suite, the safety net for any CSS/layout change is a
**before/after screenshot comparison**. Renders are deterministic, so identical
pixels ⇒ identical sha256.

Chromium is preinstalled in this environment. Render a page to PNG with:

```bash
CHROME=$(ls /opt/pw-browsers/chromium-*/chrome-linux/chrome | head -1)
"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-color-profile=srgb --virtual-time-budget=6000 \
  --run-all-compositor-stages-before-draw \
  --window-size=1280,5000 --default-background-color=FFFFFFFF \
  --screenshot=out.png "file://$PWD/fiches/<slug>.html"
```

Workflow for a refactor that should *not* change appearance: screenshot all
affected pages first, make the change, screenshot again, and compare
`sha256sum`. Any differing hash is a regression to investigate. (This is exactly
how the CSS was extracted into `assets/` — all 12 pages verified pixel-identical.)

For an intentional visual change, just eyeball the new screenshot.

---

## 10. Known inconsistencies / gotchas

- **`subjonctif-italien.html`** is the one fiche whose top-bar has **no
  "← Le Cabinet" home link**. Because of that, the `.tb-home` button styles
  could not be shared across all 7 Languages fiches and instead live inline in
  the other six. If you add a home link to subjonctif, you can promote
  `.tb-home` into `theme-langues.css` and delete it from the six inline blocks.
- **`index.html` is standalone** — it is *not* part of the History family even
  though it shares that warm palette. It keeps its catalogue CSS inline. If you
  restyle History, decide consciously whether the catalogue should follow.
- The two theme files intentionally repeat some structural rules
  (`.wrap`, `.cover`, typography). **Leave it that way** — see §4.

---

## 11. Deployment

Static files served as-is; no build, no CI required. Commit and push; the host
serves the new files. All internal links are relative, so the site also works
opened straight from disk.

---

## 12. Git

Active development branch for the current work: `claude/code-architecture-refactor-m7eflx`.
Do not push to other branches without explicit permission. Write clear,
descriptive commit messages (the existing history is in French; either language
is fine, be consistent within a commit).
