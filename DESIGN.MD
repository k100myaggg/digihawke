---
name: Velocity Digital
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c3c0ff'
  primary: '#c3c0ff'
  on-primary: '#1d00a5'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#4d44e3'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#586076'
  on-tertiary-container: '#d4dbf5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style
The design system is engineered to project a synthesis of corporate reliability and high-velocity digital innovation. Targeting forward-thinking enterprises and fast-scaling startups, the aesthetic balances the "trust" of established finance with the "energy" of cutting-edge tech.

The visual direction utilizes a **Modern Corporate** foundation augmented by **Glassmorphism** and **High-Contrast** accents. This creates a "command center" feel—sophisticated, data-driven, and results-oriented. Expect deep-seated backgrounds, crisp geometric lines, and luminous interactive elements that simulate digital growth and movement.

## Colors
The palette is anchored in a dark-mode-first philosophy to emphasize "Midnight" depth and "Electric" vibrancy.

- **Primary (Electric Indigo):** Used for primary actions, success states, and key brand identifiers. It represents the "High-Energy" aspect of the brand.
- **Secondary (Cyan):** Used for highlights, data visualizations, and secondary accents. This color represents "Digital Growth" and provides high-contrast visibility against dark backgrounds.
- **Surface (Midnight Blue):** The primary background color (#0F172A). It provides a stable, trustworthy foundation.
- **Neutral (Slate):** Used for secondary text, borders, and subtle UI metadata.

## Typography
The typography strategy pairings prioritize authority and clarity.

- **Headlines:** Montserrat is utilized for its geometric stability and aggressive weights. Large display sizes should use "ExtraBold" (800) with tight letter spacing to create a sense of momentum and impact.
- **Body & Interface:** Inter provides a systematic, neutral counter-balance to the expressive headings. Its high x-height ensures readability in data-heavy dashboard contexts. 
- **Scale:** Use responsive sizing for all headlines above 32px. Mobile headlines should compress significantly to maintain high-impact messaging without overwhelming the viewport.

## Layout & Spacing
This design system uses a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The rhythm is based on an 8px base unit.

- **Containers:** Content is housed in a centered container with a maximum width of 1280px.
- **Negative Space:** Use generous vertical margins (80px+) between sections to emphasize the premium, sleek nature of the brand.
- **Consistency:** All component internal padding must be a multiple of 8px. Use 16px (2 units) for standard padding and 24px (3 units) for card padding.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional black shadows.

- **Surface Tiers:** Backgrounds use the darkest Midnight Blue (#0F172A). Elevated cards use a slightly lighter shade (#1E293B).
- **Glass Effects:** Use 12px to 20px Backdrop Blurs on navigation bars and floating overlays. Overlay backgrounds should be semi-transparent (e.g., `rgba(15, 23, 42, 0.7)`).
- **Luminous Borders:** Instead of shadows, use 1px solid borders with 10-15% opacity of the Cyan accent color to define edges and create a "glow" effect.
- **Shadows:** If used for extreme emphasis (e.g., modals), shadows should be tinted with Indigo and have a very high spread and low opacity to appear as an ambient light source.

## Shapes
The shape language is **Soft (Level 1)**, leaning toward a precise, technical aesthetic.

- **Standard Elements:** Buttons, inputs, and small widgets use a 4px (0.25rem) corner radius.
- **Cards:** Larger containers use an 8px (0.5rem) radius.
- **Geometric Accents:** Incorporate 45-degree angled lines or subtle dot-grid patterns in the background to reinforce the "tech-forward" and "data-driven" narrative.

## Components
- **Buttons:** Primary buttons use a solid Electric Indigo fill with white text. Secondary buttons are "Ghost" style with a Cyan border and Cyan text. Interactive states should feature a subtle outer glow (0px 0px 12px) of the button color on hover.
- **Cards:** Use the elevated Midnight Blue background with a 1px border (#334155). Apply a subtle gradient from top-left to bottom-right to simulate a light source.
- **Input Fields:** Dark backgrounds (#020617) with Slate borders. On focus, the border transitions to Cyan with a faint outer glow.
- **Chips/Labels:** Small, high-contrast pills with Cyan text and a low-opacity Cyan background (`rgba(6, 182, 212, 0.1)`).
- **Data Visualization:** Use the primary Indigo and secondary Cyan as the leading chart colors. Ensure all charts use a clean, sans-serif font and avoid unnecessary grid lines to maintain the sleek look.
- **Progress Indicators:** Use linear gradients moving from Indigo to Cyan to symbolize "Growth" and "Velocity."