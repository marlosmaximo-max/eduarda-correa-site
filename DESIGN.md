# DESIGN.md

Design direction for the Eduarda Correa landing page.

This file adapts the DESIGN.md idea from `voltagent/awesome-design-md` to our own project. It is not a copy of another brand. It is a practical guide for keeping the landing page consistent, mobile-first, premium and conversion-focused.

## 1. Brand Position

Eduarda Correa should feel like a performance nutrition professional connected to Max Team Assessoria Esportiva and MaxTeam Suplementos.

The page should communicate:

- Nutrition with method, not generic diet promises.
- Performance, body composition, health and supplementation in the same strategy.
- A premium but human consultation experience.
- Real professional presence through Eduarda's own photos.
- Clear next step: schedule a nutrition assessment through WhatsApp.

Avoid making the site feel like:

- A generic clinic template.
- A heavy fitness sales page.
- A luxury fashion page.
- A card-heavy dashboard.
- A dark page where the person disappears behind overlays.

## 2. Inspiration To Extract

From the `awesome-design-md` approach, use the system, not the surface:

- Keep a single design guide in the project root.
- Define visual theme, colors, typography, components, spacing, responsive behavior and do/don't rules.
- Let future edits follow the same design language instead of inventing a new one each time.

Useful directions for this project:

- Nike-like: strong photography, athletic confidence, direct language, generous visual impact.
- Starbucks-like: warm cream canvas, green as health/food signal, premium but approachable retail feel.
- Notion/Cal.com-like: clean rhythm, readable sections, clear actions, low decoration.
- Apple/Meta-like: person/product visible early, photography leads the page, UI supports the content.

## 3. Visual Theme

Core feel: warm performance nutrition.

Use:

- Cream and paper backgrounds for clarity and warmth.
- Deep green for health, nutrition and trust.
- Gold as premium accent connected to Max Team.
- Charcoal for authority and contrast.
- Real photos as primary visual assets.
- Thin dividers, subtle shadows and controlled motion.

Avoid:

- Overloaded cards.
- Purple/blue gradients.
- Excessive dark overlays over Eduarda's face.
- Text blocks floating over important facial areas.
- Decorative blobs/orbs.
- Too many bordered boxes in the same viewport.

## 4. Color System

Current project tokens should remain the base:

- `--black: #12110f` for premium dark surfaces.
- `--charcoal: #1d1a16` for main text and dark UI.
- `--graphite: #29251f` for secondary dark surfaces.
- `--gold: #c99b52` for accents and CTA warmth.
- `--gold-soft: #f0d89a` for highlight text and soft buttons.
- `--green: #0b6f53` for nutrition, progress and trust.
- `--green-deep: #073b31` for strong green text/icons.
- `--cream: #f7f0e3` and `--paper: #fbf7ef` for readable backgrounds.
- `--white: #fffdf7` for warm white text.
- `--muted: #72695d` for supporting copy.

Rules:

- Gold is for action and premium detail, not for large backgrounds everywhere.
- Green should appear as a quiet signal, not dominate the entire page.
- Cream/paper should carry most reading sections.
- Dark sections should be cinematic and occasional.

## 5. Typography

Use one strong sans-serif system stack unless a custom font is intentionally added.

Hierarchy:

- H1: emotional and simple, one clear promise/name.
- H2: section idea in one sentence.
- H3: direct benefit or step title.
- Body: clear, conversational, no jargon overload.
- Small labels/kickers: uppercase, short, not decorative paragraphs.

Mobile-first type rules:

- Avoid huge desktop-style headlines on mobile.
- Keep line length short.
- Do not place long text in tight cards.
- Do not use negative letter spacing.
- Buttons must remain legible without becoming massive.

## 6. Layout Principles

Mobile first:

- Design the mobile reading order first, then expand to desktop.
- Photos should adapt to the viewport without cutting important faces.
- The WhatsApp action on mobile should be visible but discreet.
- Avoid horizontal scroll at all widths.

Desktop:

- Use larger image compositions and calmer text blocks.
- Do not fill every empty area with cards.
- Let sections breathe.

Section rhythm:

- Hero: person first, clear promise, one main CTA.
- Proof strip: short confidence points.
- About: credibility and Max Team context.
- Experience/Como funciona: process as a journey, not a generic card grid.
- Method: reinforce clarity and follow-up.
- Gallery: show real structure and professional presence.
- Location: make MaxTeam Suplementos easy to find.
- Footer: clear contact, navigation and business context.

## 7. Component Rules

Buttons:

- Primary CTA: warm gold, rounded, high contrast text.
- Secondary CTA: quiet outline or text link.
- Mobile floating WhatsApp: circular icon, no huge sticky bar over content.

Cards:

- Use cards only when they organize individual repeated items.
- Prefer timeline/journey/list formats for process explanations.
- Cards should be minimal: one idea, short copy, restrained border.
- Never stack cards inside cards.

Photo blocks:

- Protect faces and important details.
- Use object-position intentionally per breakpoint.
- Captions should add meaning, not repeat obvious image content.

Motion:

- Subtle parallax and reveal are allowed.
- Motion should never reduce readability.
- Respect reduced-motion preferences.

## 8. Copywriting Rules

Tone:

- Professional, close and practical.
- Confident without exaggerated promises.
- Focus on clarity, consistency and real decisions.

Preferred words:

- Avaliacao, estrategia, rotina, acompanhamento, composicao corporal, performance, suplementacao, ajustes, evolucao.

Avoid:

- "Milagre", "resultado garantido", "transformacao extrema", "dieta perfeita".
- Long explanations before the benefit.
- Technical terms without context.

CTA language:

- "Agendar avaliacao"
- "Agendar consulta"
- "Chamar no WhatsApp"
- "Quero um acompanhamento"

## 9. Accessibility And Legibility

Every update must check:

- Text contrast on photo backgrounds.
- No text over Eduarda's face.
- Buttons readable on mobile.
- E-mail and phone do not overflow.
- Images do not overlap in the mobile gallery.
- Navigation does not cover key hero content.
- Tap targets are comfortable on mobile.

## 10. Agent Prompt For Future UI Work

When editing this project:

1. Read this DESIGN.md before changing layout, typography, colors, sections, cards or CTAs.
2. Preserve the warm performance nutrition identity.
3. Keep the interface mobile-first.
4. Use Eduarda's real photos as the primary visual language.
5. Prefer clean journey/timeline/editorial layouts over heavy card grids.
6. Keep copy concise and conversion-oriented.
7. Verify desktop and mobile previews before finishing.
8. Push to Git only when the user asks or confirms.

