# DESIGN.md — โคตร QR (Code QR)

## 1. Brand Identity & Creative Direction

**Creative North Star: "The Modern Thai Curator"**

The design moves away from utilitarian, boxed-in aesthetics toward an 
editorial, high-end feel. It balances Thai cultural warmth with modern 
SaaS sophistication.

- **Primary Name (EN):** Code QR
- **Primary Name (TH):** โคตร QR
- **Logo:** "โคตร QR" in bold as primary, "Code QR" as subtitle in lighter weight
- **Tagline TH:** เมนูดิจิทัล สร้างง่าย สแกนเลย
- **Tagline EN:** Digital menu made easy. Scan & go.
- **Tone:** Friendly, modern, approachable for non-tech restaurant owners

---

## 2. Strict Color Palette

> ⚠️ ONLY these colors are permitted. No generic grays, no unmapped colors.

| Color Name     | Hex       | Usage                                                    |
|----------------|-----------|----------------------------------------------------------|
| Coral Orange   | `#F47B5B` | Primary CTAs, active nav, recommended badges, alerts     |
| Steel Blue     | `#6B89B5` | Secondary CTAs, secondary text, inactive nav, LINE btn   |
| Amber Orange   | `#F5A623` | Price display, accents, highlights, star ratings         |
| Light Blue     | `#92B4D8` | Phone button, backgrounds (10% opacity), AI buttons      |
| Warm Sand      | `#E8BF82` | Card borders, dividers, subtle elements, maps button     |
| Black          | `#1A1A1A` | Headings, primary body text, icons                       |
| White          | `#FFFFFF` | Page backgrounds, card backgrounds, button text          |

### Derived Colors (from palette only)

```
Light Blue 10%    → #EDF3F9  (page backgrounds, section differentiation)
Coral Orange dark → #E06A4A  (button hover state)
Warm Sand 50%     → #E8BF82 at 0.5 opacity (disabled states)
Steel Blue 15%    → rgba(107,137,181,0.15) (focus rings, shadows)
```

### Tailwind Config

```js
// tailwind.config.ts → theme.extend.colors
colors: {
  brand: {
    coral:  '#F47B5B',
    steel:  '#6B89B5',
    amber:  '#F5A623',
    light:  '#92B4D8',
    sand:   '#E8BF82',
    black:  '#1A1A1A',
    bg:     '#EDF3F9',
  }
}
```

---

## 3. Typography

**Primary Font:** `Plus Jakarta Sans` (modern, high-tech SaaS feel)
**Thai Font:** `Sarabun` (clean Thai rendering, Google Fonts free)
**Fallback:** `sans-serif`

```js
// tailwind.config.ts → theme.extend.fontFamily
fontFamily: {
  sans: ['Plus Jakarta Sans', 'Sarabun', 'sans-serif'],
}
```

### Type Scale

| Element            | Size   | Weight       | Color     |
|--------------------|--------|--------------|-----------|
| Page Title (H1)    | 28px   | Bold 700     | `#1A1A1A` |
| Section Title (H2) | 22px   | SemiBold 600 | `#1A1A1A` |
| Card Title (H3)    | 18px   | SemiBold 600 | `#1A1A1A` |
| Body Text          | 16px   | Regular 400  | `#1A1A1A` |
| Secondary Text     | 14px   | Regular 400  | `#6B89B5` |
| Caption/Label      | 12px   | Medium 500   | `#6B89B5` |
| Price (large)      | 24px   | Bold 700     | `#F5A623` |
| Price (small)      | 18px   | Bold 700     | `#F5A623` |
| Button Text        | 16px   | SemiBold 600 | `#FFFFFF` |
| Nav Item           | 14px   | Medium 500   | `#6B89B5` / `#F47B5B` active |

### Typography Rules
- Headings: tight tracking (-0.02em)
- Body: normal tracking
- Thai text: slightly increased line-height (1.7) for readability
- English text: line-height 1.5

---

## 4. Buttons

### Primary CTA
```css
background: #F47B5B;
color: #FFFFFF;
border-radius: 12px;
padding: 12px 24px;
font-weight: 600;
font-size: 16px;
transition: all 0.2s ease;
/* hover */
background: #E06A4A;
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(244, 123, 91, 0.3);
```

### Secondary Button
```css
background: #6B89B5;
color: #FFFFFF;
border-radius: 12px;
padding: 12px 24px;
font-weight: 600;
```

### Ghost/Outline Button
```css
background: transparent;
color: #6B89B5;
border: 2px solid #6B89B5;
border-radius: 12px;
padding: 10px 22px;
font-weight: 600;
```

### AI Action Button (small, inline)
```css
background: #92B4D8;
color: #FFFFFF;
border-radius: 8px;
padding: 6px 12px;
font-size: 13px;
font-weight: 500;
/* labels: 🤖 AI แปลให้, 🤖 AI เขียนให้ */
```

### Platform Buttons (Mini Landing Page)
| Button          | Background | Text Color | Icon |
|-----------------|-----------|------------|------|
| ดูเมนู          | `#F47B5B` | `#FFFFFF`  | 📖   |
| สั่งผ่าน LINE    | `#6B89B5` | `#FFFFFF`  | 💬   |
| โทรสั่ง          | `#92B4D8` | `#FFFFFF`  | 📞   |
| นำทางไปร้าน      | `#E8BF82` | `#1A1A1A`  | 📍   |

### Danger/Delete Button
```css
background: transparent;
color: #F47B5B;
border: 1px solid #F47B5B;
border-radius: 8px;
padding: 8px 16px;
```

### Disabled State
```css
background: #E8BF82;
opacity: 0.5;
color: #FFFFFF;
cursor: not-allowed;
```

---

## 5. Cards & Containers

### Standard Card
```css
background: #FFFFFF;
border: 1px solid #E8BF82;
border-radius: 12px;
padding: 16px;
box-shadow: 0 1px 3px rgba(107, 137, 181, 0.1);
/* hover */
box-shadow: 0 4px 12px rgba(107, 137, 181, 0.15);
```

### Menu Item Card (Customer)
```css
background: #FFFFFF;
border-radius: 16px;
box-shadow: 0 2px 8px rgba(107, 137, 181, 0.12);
overflow: hidden;
/* image: 16:10 ratio, fills card width */
/* name: #1A1A1A bold */
/* price: #F5A623 bold, right-aligned */
/* allergen icons: small row below name */
```

### Stat Card (Dashboard)
```css
background: #FFFFFF;
border: 1px solid #E8BF82;
border-radius: 12px;
padding: 20px;
/* number: 32px bold #1A1A1A */
/* label: 14px #6B89B5 */
```

---

## 6. Navigation

### Sidebar (Desktop Admin)
```css
background: #FFFFFF;
border-right: 1px solid #E8BF82;
width: 260px;
padding: 16px;

/* nav item default */
padding: 10px 16px;
border-radius: 8px;
color: #6B89B5;
font-weight: 500;

/* nav item active */
background: #F47B5B;
color: #FFFFFF;

/* nav item hover */
background: #EDF3F9;
```

### Category Tabs (Customer Menu — Horizontal Pills)
```css
display: flex;
overflow-x: auto;
gap: 8px;
position: sticky;
top: 0;
background: #FFFFFF;
padding: 12px 16px;

/* pill default */
background: #EDF3F9;
color: #6B89B5;
border-radius: 20px;
padding: 8px 16px;
font-size: 14px;
white-space: nowrap;

/* pill active */
background: #F47B5B;
color: #FFFFFF;
```

---

## 7. Forms

### Text Input
```css
border: 1px solid #E8BF82;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
color: #1A1A1A;
background: #FFFFFF;

/* focus */
border-color: #6B89B5;
outline: none;
box-shadow: 0 0 0 3px rgba(107, 137, 181, 0.15);

/* label */
font-size: 14px;
font-weight: 500;
color: #1A1A1A;
margin-bottom: 6px;
```

### Toggle Switch
```css
/* off */
background: #E8BF82;
/* on */
background: #F47B5B;
/* knob */
background: #FFFFFF;
width: 48px;
height: 26px;
border-radius: 13px;
transition: background 0.2s ease;
```

---

## 8. Badges & Tags

| Badge Type      | Background | Text Color | Example          |
|-----------------|-----------|------------|------------------|
| Popular/แนะนำ   | `#F47B5B` | `#FFFFFF`  | "ยอดนิยม"        |
| Category        | `#EDF3F9` | `#6B89B5`  | "อาหารจานเดียว"  |
| Plan (Pro)      | `#F5A623` | `#FFFFFF`  | "แนะนำ"          |
| Allergen (icon) | transparent | `#6B89B5` | 🌶️🥬☪️🥜🌾🥛🦐 |

```css
/* all badges */
border-radius: 6px;
padding: 2px 8px;
font-size: 11px;
font-weight: 600;
```

---

## 9. Spacing System

| Token | Value | Usage                              |
|-------|-------|------------------------------------|
| xs    | 4px   | Icon gaps, tight elements          |
| sm    | 8px   | Between related items              |
| md    | 16px  | Card padding, form gaps            |
| lg    | 24px  | Section gaps, content padding      |
| xl    | 32px  | Page sections                      |
| 2xl   | 48px  | Major sections on landing page     |

> Use generous white space (32px+ between sections) for "Editorial" feel.

---

## 10. Shadows

```css
/* Card default */
box-shadow: 0 1px 3px rgba(107, 137, 181, 0.1);

/* Card hover */
box-shadow: 0 4px 12px rgba(107, 137, 181, 0.15);

/* Customer menu card */
box-shadow: 0 2px 8px rgba(107, 137, 181, 0.12);

/* Modal overlay */
background: rgba(26, 26, 26, 0.6);
backdrop-filter: blur(4px);
```

---

## 11. Border Radius

| Element          | Radius |
|------------------|--------|
| Primary buttons  | 12px   |
| Admin cards      | 12px   |
| Customer cards   | 16px   |
| Inputs           | 8px    |
| Badges/Pills     | 6px    |
| Category pills   | 20px   |
| Toggle switch    | 13px   |
| Avatar/Logo      | 50%    |
| Food images      | 12px (top corners in cards) |

---

## 12. Icons

Use **Lucide React** icon library.
- Default color: `#6B89B5`
- Active/Alert color: `#F47B5B`
- Sizes: 16px (small), 20px (default), 24px (large)

---

## 13. Animations & Transitions

```css
/* Default */
transition: all 0.2s ease;

/* Button hover */
transform: translateY(-1px);

/* Price save success */
/* Steel Blue #6B89B5 checkmark icon, fade out after 1.5s */

/* Modal entrance */
animation: fadeIn 0.3s ease;
/* backdrop: 0.2s, content: slideUp 0.3s */

/* Skeleton loading */
/* Shimmer: #EDF3F9 → #E8BF82 at 20% opacity */

/* Toast auto-dismiss: 3 seconds */
```

---

## 14. Toast Notifications

| Type    | Background | Text     |
|---------|-----------|----------|
| Success | `#6B89B5` | `#FFFFFF` |
| Error   | `#F47B5B` | `#FFFFFF` |
| Info    | `#92B4D8` | `#FFFFFF` |

Position: bottom-right, auto-dismiss 3s, border-radius 8px.

---

## 15. Layout

### Admin Pages
- Max width: 1200px, centered
- Sidebar: 260px fixed left (desktop), slide-out (mobile)
- Content padding: 24px
- Page background: `#EDF3F9` (Light Blue 10%)
- Cards on white to "pop" against background

### Customer Menu (Public)
- Max width: 480px, centered (mobile-first)
- No sidebar
- Sticky header + category tabs
- Full-bleed food images (16:10 ratio)

### Mini Landing Page (Public)
- Max width: 420px, centered
- Stacked full-width buttons
- High-contrast logo placement
- Logo: 80px diameter circle

### Responsive Breakpoints
```css
sm:  640px   /* Large phone */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Wide desktop */
```

---

## 16. Screen-Specific Rules

- **Admin Dashboard:** Light Blue 10% page background, white cards pop
- **Mini Landing Page:** High-contrast logo, stacked full-width action buttons
- **Customer Menu:** Large food images (16:10), clear price in Amber Orange
- **Onboarding:** Option A (AI Scan) visually prioritized with more vibrant accents
- **Gate Modals:** Celebratory tone, rewards-first design, confetti/sparkle elements

---

## 17. File Naming Convention

- Components: PascalCase → `MenuItemCard.tsx`, `DailyMenuToggle.tsx`
- Pages/routes: kebab-case → `/admin/menu-items`, `/admin/daily-menu`
- Utilities: camelCase → `useAccessGate.ts`, `formatPrice.ts`
- Constants: UPPER_SNAKE_CASE → `ALLERGEN_TAGS`, `SUPPORTED_LANGUAGES`

---

## 18. Dark Mode

Not supported in V1. All designs are light mode only.
