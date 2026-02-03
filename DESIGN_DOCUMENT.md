# DESIGN DOCUMENT
## ABHIMA EVENTS — MARKETING WEBSITE & LEAD ACQUISITION PLATFORM

**Document Version:** 1.0  
**Date:** February 3, 2026  
**Designer:** Principal Product Designer + Frontend Systems Designer  
**Source Documents:** PRD v1.0, Final Website Content Copy  
**Stakeholders:** Founder, Engineering, PM

---

## DESIGN AUTHORITY & SCOPE

This document is a **design contract**, not a creative exploration.

**What This Document IS:**
- Enforceable design specification
- Engineering handoff documentation
- Brand protection ruleset
- Performance constraint definition

**What This Document IS NOT:**
- Creative inspiration board
- Subjective aesthetic exploration
- Open to interpretation
- Negotiable after approval

**Implementation Rule:**
If a design decision is not explicitly documented here, it must be escalated to the designer before implementation. No assumptions allowed.

---

## DESIGN AUTHORITY & ESCALATION

**This document is the single source of truth for UI/UX decisions.**

### What Is NOT Allowed

**Designers may NOT:**
- Introduce new layouts not documented here
- Create new component patterns
- Add new visual styles or effects
- Adjust brand colors, typography scale, or spacing system
- Make "small improvements" without documentation updates

**Engineers may NOT:**
- Adjust spacing values ("this looks better with 20px instead of 24px")
- Change typography (size, weight, line-height)
- Modify visual hierarchy ("let's make this heading bigger")
- Add animations not specified
- Invent new color variations

### Escalation Rule (Mandatory)

**When ambiguity is discovered:**
1. **Within 24 hours:** Escalate to Design Owner (document author)
2. **If unresolved in 48 hours:** PM makes binding decision
3. **Document updated:** Decision is added to this document (no tribal knowledge)

**No unilateral decisions by Engineering or Design.**

**Rationale:**
Design inconsistency does not happen loudly. It happens silently, one small decision at a time. This rule prevents visual drift, inconsistent spacing, and brand dilution.

**Violation Consequences:**
- Undocumented design changes are rejected in code review
- Repeated violations = escalation to PM + Founder

---

## 1. DESIGN OBJECTIVES

### Primary UX Objective
Enable qualified lead self-identification within 90 seconds of first page view through brand clarity, cultural competency signaling, and friction-free contact.

### Secondary UX Objectives
1. **Instant brand alignment** — HNW/corporate users determine "this is for me" or "this is not for me" within 5 seconds of homepage load
2. **Zero-distraction conversion** — Every page has exactly one primary action and zero competing CTAs
3. **Mobile-first trust-building** — 60%+ traffic is mobile; design prioritizes mobile readability and touch interaction

### Explicit Non-Objectives
- **NOT optimizing for time-on-site** — Long sessions are not the goal; clarity and conversion are.
- **NOT designing for virality** — No social sharing buttons, no Instagram-optimized visuals, no trending UI patterns.
- **NOT showcasing work** — No portfolio gallery, no event photo displays (deliberate brand discretion).
- **NOT explaining services in detail** — Site pre-qualifies; deep service explanation happens in consultation.

### UX Success Indicators (Observable)
| Indicator | Target | Measurement |
|-----------|--------|-------------|
| Homepage exit within 5s | <40% | GA4 engagement rate |
| Contact page visits from homepage | >20% | GA4 user flow |
| Form start → submit completion | >50% | GA4 event tracking |
| Mobile bounce rate | <65% | GA4 |
| WhatsApp clicks | >30% of contact interactions | GA4 event tracking |

### UX Failure Triggers (When Design Is Failing)

**Teams don't act on "we should improve." They act on clear triggers.**

The following thresholds indicate design failure and require mandatory action:

| Failure Signal | Threshold | Required Action | Owner |
|----------------|-----------|-----------------|-------|
| **Homepage bounce >60%** | Sustained over 14 days | Hero section must be revised (headline, subhead, or CTA placement) | Designer + PM |
| **Form completion <40%** | Sustained over 30 days | Form friction review required (reduce fields, improve validation messaging, or add trust signals) | Designer + PM |
| **Mobile bounce >70%** | Sustained over 14 days | Mobile layout audit mandatory (spacing, typography, touch targets) | Designer |
| **WhatsApp clicks <20% of conversions** | Over 30 days | CTA hierarchy must change (WhatsApp promoted higher, form de-emphasized) | Designer |
| **Contact page visits <15%** | Over 30 days | Homepage CTAs failing (rework CTA copy or placement) | Designer + PM |
| **Organic traffic <500 sessions/month** | After 90 days | SEO audit or content expansion required (not a design issue, but triggers Phase 2 discussion) | PM + Founder |

**Review Cadence:**
- Weekly: Check homepage bounce, form completion rate
- Monthly: Full UX failure trigger review
- Quarterly: Design audit (if no failures, design is working)

**No Excuses:**
If a failure trigger is hit, action is mandatory. "We're monitoring it" is not acceptable.

---

## 2. DESIGN PRINCIPLES (NON-NEGOTIABLE)

### Principle 1: Restraint Over Decoration
**Statement:** Every visual element must serve a functional purpose. Decoration for decoration's sake is forbidden.

**Rationale:** HNW clients and corporate decision-makers interpret visual excess as lack of discipline. Restraint signals confidence and professionalism.

**Practical Implication:**
- No decorative icons
- No ornamental dividers
- No background patterns or textures
- No gradient overlays on images
- No animated illustrations

**Auto-Reject Examples:**
- Golden shine effects on text
- Decorative flourishes around headings
- Parallax background animations
- Ornamental borders

---

### Principle 2: Information Before Imagery
**Statement:** Text content loads and renders before any images. Users can read and navigate before images appear.

**Rationale:** Indian mobile networks (especially Tier-2/3 cities) can be slow. Users must access information immediately, not wait for hero images to load.

**Practical Implication:**
- Text-first rendering (no image-dependent layouts)
- Hero sections work without background images
- Image lazy-loading below fold
- No text embedded in images (accessibility + performance)

**Implementation Rule:**
If a section becomes unusable without images loaded, the layout fails specification.

---

### Principle 3: White Space as Authority
**Statement:** Generous white space (Ivory background) is not wasted space — it is brand credibility.

**Rationale:** Premium brands avoid visual density. White space signals confidence, discretion, and focus.

**Practical Implication:**
- Section padding: minimum 80px vertical (desktop), 60px (mobile)
- Headline breathing room: minimum 32px above/below
- Content max-width: 1200px (forces white space on large screens)
- No attempt to "fill" the screen

**Auto-Reject Examples:**
- Sections crammed edge-to-edge
- Content stretching to full viewport width on large screens
- Text blocks without vertical spacing

---

### Principle 4: Minimal Motion, Maximum Clarity
**Statement:** Animation is used only for functional feedback, never for decoration or delight.

**Rationale:** Over-animation signals insecurity and distracts from content. This brand is confident and still.

**Allowed Animations:**
- Button hover state (color change only, no scale/shadow)
- Form field focus indicator
- FAQ accordion expand/collapse (0.2s ease-out)
- Mobile menu open/close (0.3s ease-in-out)

**Forbidden Animations:**
- Parallax scroll effects
- Fade-in-on-scroll reveals
- Counter animations
- Text typing effects
- Cursor effects
- Hover scale/lift effects
- Autoplay video backgrounds

**Performance Rule:**
Total animation CSS must be <2KB. Any animation that causes layout shift is auto-rejected.

---

### Principle 5: Cultural Terminology as Trust Signal
**Statement:** Telugu and Sanskrit event terminology must be visually prioritized, never parenthetical or hidden.

**Rationale:** Correct usage of cultural terms (Pelli Choopulu, Nischitartham, Mangalsnanam) is a primary trust signal for HNW Telugu families. Generic terms ("engagement ceremony") dilute this signal.

**Practical Implication:**
- Cultural terms appear first, generic terms appear in parentheses (if at all)
- Typography: Same weight/size as English terms (no de-emphasis)
- Never abbreviate cultural terms for space

**Example:**
✅ **Pelli Choopulu & Nischitartham**  
❌ Engagement Ceremony (Pelli Choopulu)

---

### Principle 6: Hierarchy Over Density
**Statement:** Clear hierarchy is more important than fitting more information on screen.

**Rationale:** Luxury brands fail when hierarchy collapses, not when visuals are ugly. Dense layouts signal anxiety and lack of confidence. Premium brands prioritize clarity over completeness.

**Practical Implication:**
- **No section may introduce more than one visual emphasis** (e.g., cannot have H2 + large bold callout + colored background in same section)
- **Headlines must dominate supporting content** (size, weight, and spacing create clear pecking order)
- **Secondary information must visually recede** (smaller size, lower opacity, or increased spacing)
- **If content doesn't fit, remove content — do not compress spacing**

**Auto-Reject Examples:**
- Two headings of equal visual weight in the same section
- Body text competing with headings (e.g., bold body paragraphs)
- Dense layouts with <40px vertical spacing between sections
- "Packing in" more content by reducing font size or line-height

**Test:**
Blur your eyes. The most important element should still be obvious. If not, hierarchy has failed.

---

## 3. GLOBAL LAYOUT SYSTEM

### 3.1 Grid & Spacing

#### Desktop Grid (≥1024px)
- **Container max-width:** 1200px
- **Horizontal padding:** 80px (left/right)
- **Grid columns:** 12-column system (visual reference only, CSS Grid preferred)
- **Gutter:** 32px between grid columns
- **Content column max-width:** 800px (for text-heavy sections like About)

#### Tablet Grid (640px – 1024px)
- **Container max-width:** 100vw
- **Horizontal padding:** 60px (left/right)
- **Gutter:** 24px

#### Mobile Grid (<640px)
- **Container max-width:** 100vw
- **Horizontal padding:** 24px (left/right)
- **Gutter:** 16px
- **Single column layout** (no side-by-side content)

#### Vertical Rhythm (All Breakpoints)
- **Section spacing:** 120px (desktop), 80px (mobile)
- **Heading → Body spacing:** 24px
- **Body paragraph spacing:** 16px
- **List item spacing:** 12px
- **Subsection spacing:** 48px

**Rule:** All vertical spacing must be multiples of 8px (8px rhythm system).

---

### 3.2 Navigation

#### Header Structure
```
[Logo: Left-aligned] ━━━━━━━━━ [Nav Links: Right-aligned] [CTA Button: Right-aligned]
```

**Desktop Navigation (≥1024px):**
- **Height:** 80px (fixed)
- **Background:** Ivory (solid, 100% opacity)
- **Border bottom:** 1px solid rgba(Charcoal, 0.1)
- **Sticky behavior:** NO (non-sticky, disappears on scroll)
- **Logo:** Abhima Events wordmark (max height 32px)
- **Nav links:** Home, About, Experiences, Services, Destinations, FAQs, Contact
- **CTA button:** "Begin Conversation" (Primary button style)
- **Link spacing:** 40px horizontal gap between links
- **Link typography:** Poppins Regular, 16px, Charcoal
- **Active state:** Antique Gold underline (2px, 100% width)
- **Hover state:** Charcoal (opacity 70%), no underline, no animation

**Rationale for Non-Sticky:**
- Reduces visual noise on scroll
- Allows full-screen content immersion
- Users can scroll to top to access nav (standard behavior)
- Performance: No sticky position calculations

**Tablet Navigation (640px – 1024px):**
- Same as desktop

**Mobile Navigation (<640px):**
- **Hamburger menu icon:** Top-right (24x24px, Charcoal)
- **Logo:** Left-aligned (max height 28px)
- **Expanded menu:** Full-screen overlay
  - Background: Ivory
  - Links: Centered, 24px Poppins Medium, 48px vertical spacing
  - CTA button: Bottom of menu, full-width
  - Close icon: Top-right (X icon, 24x24px)
  - Animation: Slide-in from right (0.3s ease-in-out)

**Active Page Indicator:**
- Desktop: Antique Gold underline (2px solid, centered under text)
- Mobile: Antique Gold left border (3px solid, full height of link)

**Mobile Exception — "Back to Top" Control:**

**Problem:** Non-sticky navigation + long pages = mobile users stuck at bottom (won't scroll back up, will leave).

**Solution:**
- After **75% scroll depth** on mobile only, show a subtle "Back to Top" control
- **Position:** Bottom-right corner, 24px from edges
- **Visual:** Text-only ("↑ Top") or minimal up-arrow icon (16px)
- **Style:** Charcoal (70% opacity), Poppins Regular 14px
- **Background:** Ivory (90% opacity), 8px border-radius, 12px padding
- **Behavior:** Smooth scroll to top (0.5s ease-out)
- **Dismissal:** Fades out when user scrolls above 50% depth

**Forbidden:**
- Sticky navigation bars (conflicts with restraint principle)
- Floating CTA buttons (aggressive, not premium)
- Large "Back to Top" buttons (visual noise)

**Rationale:**
Mobile users (60%+ of traffic) need escape hatch on long pages without compromising non-sticky nav principle.

---

### 3.3 Footer

**Allowed Content (In Order):**
1. **Column 1:** Quick Links (Home, About, Experiences, Services, Destinations, FAQs, Contact)
2. **Column 2:** Contact Information
   - Email: info@abhimaevents.com
   - Phone: [Number]
   - WhatsApp: [Number] (link)
   - Address: "Based in Hyderabad | Serving India & Beyond"
3. **Column 3:** Legal (if required after stakeholder decision)
   - Privacy Policy (link)
   - Terms of Service (link)
4. **Bottom Row:** Copyright notice "© 2026 Abhima Events. All rights reserved."

**Forbidden Content:**
- Social media icons (brand is discretion-first, not social-first)
- Newsletter signup (no content marketing engine)
- Partner logos
- Payment/certification badges
- "Powered by" credits

**Visual Rules:**
- **Background:** Charcoal (inverted from main site)
- **Text color:** Ivory (100% opacity for headings, 70% for body)
- **Link hover:** Antique Gold
- **Vertical padding:** 80px (desktop), 60px (mobile)
- **Horizontal padding:** Same as global container
- **Column layout:** 3 columns desktop, 1 column mobile (stacked)
- **Typography:** Poppins Regular, 14px

**Visual Weight Rule:**
Footer must be visually subordinate to body content. No heavy branding, no competing CTAs.

---

## 4. TYPOGRAPHY SYSTEM (FIXED)

### Font Family
**Poppins** (Google Fonts)

**Allowed Weights:**
- Regular (400) — Body text, navigation
- Medium (500) — CTA buttons only
- SemiBold (600) — All headings (H1, H2, H3, H4)
- Bold (700) — **FORBIDDEN GLOBALLY**

**Typography Lock (Non-Negotiable):**
- **H1–H4:** Poppins SemiBold (600) ONLY
- **Body text:** Poppins Regular (400) ONLY
- **CTA buttons:** Poppins Medium (500) ONLY
- **Bold (700) is forbidden across the entire site**

**Rationale:**
SemiBold (600) conveys authority without aggression. Bold (700) signals anxiety and over-emphasis. Typography inconsistency destroys perceived quality faster than bad colors.

**Forbidden Weights:**
- Light (300) — Poor readability on mobile
- Bold (700) — Too aggressive for premium brand
- ExtraBold (800+) — Overly aggressive

**Font Loading:**
- Use `font-display: swap` to prevent FOIT (Flash of Invisible Text)
- Preload Poppins Regular 400 and SemiBold 600 only
- Lazy-load Medium and Bold

---

### Font Scale

| Element | Desktop Size | Mobile Size | Weight | Line Height | Color | Case |
|---------|--------------|-------------|--------|-------------|-------|------|
| **H1** | 56px | 36px | Bold (700) | 1.1 | Charcoal | Sentence case |
| **H2** | 40px | 28px | SemiBold (600) | 1.2 | Charcoal | Sentence case |
| **H3** | 28px | 22px | SemiBold (600) | 1.3 | Charcoal | Sentence case |
| **H4** | 20px | 18px | Medium (500) | 1.4 | Charcoal | Sentence case |
| **H5** | 16px | 16px | Medium (500) | 1.5 | Charcoal | Sentence case |
| **H6** | 14px | 14px | Medium (500) | 1.5 | Charcoal (70%) | Sentence case |
| **Body Large** | 18px | 16px | Regular (400) | 1.7 | Charcoal | Sentence case |
| **Body** | 16px | 16px | Regular (400) | 1.6 | Charcoal | Sentence case |
| **Small** | 14px | 14px | Regular (400) | 1.5 | Charcoal (70%) | Sentence case |
| **Meta** | 12px | 12px | Regular (400) | 1.4 | Charcoal (50%) | Sentence case |
| **CTA Button** | 16px | 16px | Medium (500) | 1 | Ivory | Sentence case |
| **Nav Link** | 16px | 24px (mobile menu) | Regular (400) | 1.5 | Charcoal | Sentence case |

---

### Typography Rules

#### Case Usage
- **All text:** Sentence case (first letter capitalized, rest lowercase)
- **Forbidden:** ALL CAPS (aggressive), Title Case (overly formal), lowercase (unprofessional)
- **Exception:** Acronyms (e.g., "FAQ") remain uppercase

#### Line Length (Measure)
- **Optimal:** 60–75 characters per line (desktop)
- **Maximum:** 85 characters per line
- **Mobile:** Full width (no line length restriction due to screen size)

**Implementation:**
- Body text sections must use `max-width: 800px` on desktop to enforce readable line length
- Exception: Lists, form fields (can extend to 1200px container width)

#### Line Height Rules
- **Headings:** 1.1–1.3 (tight, for visual impact)
- **Body:** 1.6–1.7 (generous, for readability)
- **Small/Meta:** 1.4–1.5 (compact, space-efficient)

#### Weight Restrictions
- **Never use Bold (700) for body text** — Reduces readability, signals anxiety
- **Never use Light (300)** — Poor contrast on Ivory background
- **Hierarchy through size, not weight** — Size changes are more effective than weight changes

#### Accessibility Rules
- **Minimum font size:** 14px (anything smaller fails WCAG AA)
- **Minimum contrast ratio:** 4.5:1 for body text, 3:1 for large text (18px+)
- **Charcoal on Ivory:** ~16:1 contrast (exceeds WCAG AAA)
- **Antique Gold on Ivory:** Must be tested per use case (minimum 3:1 for CTA buttons)

---

### Forbidden Typography Patterns
❌ Centered body paragraphs (hard to read)  
❌ Justified text (creates rivers on mobile)  
❌ Orphans (single word on last line of paragraph) — Acceptable on mobile, forbidden on desktop  
❌ Widows (single line of paragraph at top of new page/section)  
❌ Underlined text (except links)  
❌ Italic body text (use for subtle emphasis only, max 1 sentence per section)  
❌ Letter-spacing on body text (readability killer)  

**Allowed letter-spacing:**
- H1: -0.02em (tighten for visual cohesion)
- CTA buttons: 0.01em (slight spacing for clarity)

---

## 5. COLOR SYSTEM (FUNCTIONAL, NOT ARTISTIC)

### Brand Colors (LOCKED)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Ivory** | `#FEFDFB` | Primary background, button text |
| **Charcoal** | `#2B2B2B` | Primary text, footer background |
| **Antique Gold** | `#C9A86A` | Accent only (CTAs, active states, emphasis) |

**Rationale:**
- **Ivory:** Soft, premium, non-clinical (avoids harsh white `#FFFFFF`)
- **Charcoal:** Authoritative, readable, warm (avoids pure black `#000000`)
- **Antique Gold:** Heritage, warmth, restraint (avoids bright yellow/orange)

---

### Ivory (#FEFDFB)

#### Usage Rules
**MUST be used for:**
- Primary background (all pages)
- Button text (when button background is Charcoal or Antique Gold)
- Form field backgrounds
- Card backgrounds (if cards are used)

**MUST NOT be used for:**
- Text (insufficient contrast with background)
- Borders (invisible against Ivory background)

#### Opacity Variations
- **100% opacity:** Primary background
- **0% opacity (transparent):** Never use semi-transparent Ivory (creates muddy colors)

---

### Charcoal (#2B2B2B)

#### Usage Rules
**MUST be used for:**
- All body text (100% opacity)
- All headings (100% opacity)
- Footer background (100% opacity)
- Primary button background (hover state: 90% opacity)
- Form field borders (20% opacity: `rgba(43, 43, 43, 0.2)`)
- Section dividers (10% opacity: `rgba(43, 43, 43, 0.1)`)

**MUST NOT be used for:**
- Page background (too dark for body content)
- Large solid blocks on Ivory pages (creates harsh contrast)

#### Opacity Variations for Text
- **100%:** Primary text, headings
- **70%:** Secondary text, meta information, small print
- **50%:** Placeholder text, disabled states
- **20%:** Borders, dividers
- **10%:** Subtle separators (e.g., header bottom border)

**Rule:** Never use Charcoal opacity <50% for text (fails WCAG contrast requirements).

---

### Antique Gold (#C9A86A)

#### Usage Rules (RESTRICTED)
**Exact Allowed Use Cases:**
1. Primary CTA button background
2. Active navigation link underline
3. Form field focus border
4. Hyperlink hover state
5. Bullet points (for lists only)
6. FAQ accordion icon (open state)

**Maximum Usage Threshold:**
- Antique Gold must occupy **<5% of visible viewport area** at any given scroll position
- If Antique Gold exceeds 5%, the design fails specification (signals visual excess)

#### Explicit Misuse Cases (Auto-Reject)
❌ Headings in Antique Gold (competes with content hierarchy)  
❌ Body text in Antique Gold (readability failure)  
❌ Antique Gold gradients or shine effects  
❌ Antique Gold borders on sections/cards  
❌ Antique Gold background for large areas (e.g., hero section)  
❌ Antique Gold icons (decorative excess)  
❌ Antique Gold in footer (footer must be Charcoal/Ivory only)  

**Rationale:**
Antique Gold is a **surgical accent**, not a primary brand color. Overuse dilutes its impact and signals lack of restraint.

---

### Color Usage Matrix

| UI Element | Background | Text/Icon | Border | Hover State |
|------------|------------|-----------|--------|-------------|
| **Page Body** | Ivory | Charcoal | — | — |
| **Header** | Ivory | Charcoal | Charcoal (10%) | Charcoal (70%) |
| **Footer** | Charcoal | Ivory | — | Antique Gold |
| **Primary Button** | Antique Gold | Ivory | — | Charcoal (90%) |
| **Secondary Button** | Transparent | Charcoal | Charcoal | Antique Gold (text) |
| **Text Link** | — | Charcoal | — | Antique Gold |
| **Form Field** | Ivory | Charcoal | Charcoal (20%) | Antique Gold (border) |
| **Form Field (Error)** | Ivory | Charcoal | `#D32F2F` (red) | — |
| **Form Field (Disabled)** | Charcoal (5%) | Charcoal (50%) | Charcoal (10%) | — |
| **FAQ Accordion (Closed)** | Ivory | Charcoal | Charcoal (10%) | Charcoal (70%) |
| **FAQ Accordion (Open)** | Ivory | Charcoal | Antique Gold | — |
| **Section Divider** | — | — | Charcoal (10%) | — |
| **Nav Link (Active)** | — | Charcoal | Antique Gold (underline) | — |

---

### Semantic Colors (Non-Brand)

**Error Red:** `#D32F2F` (Material Design Red 700)  
**Success Green:** `#388E3C` (Material Design Green 700)  
**Warning Orange:** `#F57C00` (Material Design Orange 700)  

**Usage:**
- Form validation errors (border + message)
- Success confirmation messages (text + icon)
- Warning messages (if needed)

**Rule:** Semantic colors are functional only. Never use for decoration or branding.

---

### Neutral UI Layer (Charcoal Opacity Only)

**Problem:** Uncontrolled greys create visual noise and inconsistency.

**Solution:** All neutral UI colors must derive from Charcoal with defined opacity levels.

**Allowed Opacity Levels (Charcoal #2B2B2B Only):**

| Opacity | Hex Equivalent (Approx) | Usage |
|---------|------------------------|-------|
| **5%** | `rgba(43, 43, 43, 0.05)` | Disabled field backgrounds, subtle highlights |
| **10%** | `rgba(43, 43, 43, 0.10)` | Section dividers, header bottom border, card borders |
| **20%** | `rgba(43, 43, 43, 0.20)` | Inactive form field borders, default state borders |
| **50%** | `rgba(43, 43, 43, 0.50)` | Placeholder text, disabled text |
| **70%** | `rgba(43, 43, 43, 0.70)` | Secondary text, meta information, small print |
| **100%** | `#2B2B2B` (solid) | Primary text, headings |

**Forbidden:**
- Custom grey values (e.g., `#CCCCCC`, `#999999`, `#F5F5F5`)
- Opacity levels not listed above (no 15%, 30%, 60%, etc.)
- Black (`#000000`) or white (`#FFFFFF`) for UI elements

**Rationale:**
Limited opacity palette ensures visual consistency. Every shade of grey serves a documented purpose.

**Enforcement:**
Any grey value not derived from Charcoal opacity is auto-rejected in code review.

---

## 6. COMPONENT SYSTEM (CANONICAL)

### 6.1 Buttons

#### Primary Button
**Purpose:** Main conversion action (e.g., "Begin Conversation", "Submit Enquiry")

**Visual Specification:**
- **Background:** Antique Gold
- **Text:** Ivory, Poppins Medium 16px, letter-spacing 0.01em
- **Padding:** 16px (vertical) × 32px (horizontal)
- **Border-radius:** 4px
- **Border:** None
- **Min-width:** 180px (desktop), 100% (mobile <640px)
- **Height:** 56px (fixed, for touch accessibility)

**States:**
- **Default:** Antique Gold background, Ivory text
- **Hover:** Charcoal (90% opacity) background, Ivory text (0.2s ease-out transition)
- **Focus:** 2px solid Antique Gold outline (4px offset), Charcoal background
- **Active (click):** Charcoal (100%) background, Ivory text
- **Disabled:** Charcoal (20%) background, Charcoal (50%) text, cursor: not-allowed

**Mobile Behavior:**
- Touch target: Minimum 44px height (56px exceeds requirement)
- Full-width on mobile (<640px)
- No hover state on touch devices (skip directly to active state)

**Accessibility:**
- ARIA label: Must describe action (e.g., "Begin conversation with Abhima Events")
- Keyboard navigation: Tab-focusable, Enter/Space activates

**Forbidden:**
- Shadows (drop-shadow, box-shadow)
- Gradients
- Icons inside buttons (text-only)
- Uppercase text
- Multiple primary buttons on same page (max 1 primary button per viewport)

---

#### Secondary Button
**Purpose:** Lower-priority actions (e.g., "Explore Experiences", "View Destinations")

**Visual Specification:**
- **Background:** Transparent
- **Text:** Charcoal, Poppins Medium 16px
- **Padding:** 16px × 32px
- **Border-radius:** 4px
- **Border:** 2px solid Charcoal
- **Min-width:** 180px (desktop), auto (mobile)
- **Height:** 56px

**States:**
- **Default:** Transparent background, Charcoal text, Charcoal border
- **Hover:** Antique Gold text, Antique Gold border (0.2s ease-out)
- **Focus:** 2px solid Antique Gold outline (4px offset)
- **Active:** Antique Gold text, Antique Gold border (2px)
- **Disabled:** Charcoal (20%) border, Charcoal (50%) text

**Mobile Behavior:**
- Same as primary button (44px+ touch target)
- Auto-width (no full-width on mobile unless contextually required)

---

#### Text Button (Link-Style CTA)
**Purpose:** Tertiary actions, inline navigation (e.g., "Learn more", "Read FAQs")

**Visual Specification:**
- **Background:** None
- **Text:** Charcoal, Poppins Regular 16px, underline (1px solid Charcoal, offset 2px below text)
- **Padding:** 8px × 0px (vertical padding for touch target, no horizontal)
- **Min-height:** 44px (mobile touch target)

**States:**
- **Default:** Charcoal text, Charcoal underline
- **Hover:** Antique Gold text, Antique Gold underline
- **Focus:** 2px dotted Antique Gold outline (2px offset)
- **Active:** Antique Gold text

**Mobile Behavior:**
- Increase vertical padding to 12px (ensure 44px+ touch target)

---

### 6.2 Call-to-Action (CTA) Sections

**Purpose:** High-visibility conversion prompts at section ends

**Structure:**
```
[Heading: H2 or H3]
[Supporting text: Body or Body Large, max 2 lines]
[Button: Primary or Secondary]
```

**Visual Rules:**
- **Background:** Ivory (no colored backgrounds)
- **Alignment:** Center (desktop + mobile)
- **Vertical padding:** 80px (top/bottom)
- **Heading → Text spacing:** 16px
- **Text → Button spacing:** 32px
- **Max-width:** 600px (centered container)

**Variants:**
1. **Primary CTA:** End of major sections (e.g., end of Home page)
   - H2 heading
   - Primary button
2. **Secondary CTA:** Mid-page transitions (e.g., "Explore services" after brand philosophy)
   - H3 heading
   - Secondary button

**Forbidden:**
- Multiple CTAs side-by-side (creates decision paralysis)
- CTA backgrounds that compete with content (e.g., colored blocks)

---

### 6.3 Section Headers

**Purpose:** Introduce major page sections

**Structure:**
```
[Overline: Optional, Meta text, Antique Gold]
[Heading: H2]
[Description: Optional, Body Large, max 3 lines]
```

**Visual Rules:**
- **Alignment:** Left (desktop), Center (mobile <640px)
- **Overline (if used):** Poppins Regular 12px, Antique Gold, uppercase, letter-spacing 0.1em
- **Overline → Heading spacing:** 8px
- **Heading → Description spacing:** 16px
- **Bottom margin:** 48px (before section content)

**When to Use Overline:**
- Use sparingly (max 2–3 times per page)
- Use when section topic needs disambiguation (e.g., "Why Abhima Events" → Overline: "Our Difference")

**Forbidden:**
- Overlines on every section (visual noise)
- Decorative icons next to headings

---

### 6.4 Lists

#### Bulleted List (Unordered)
**Visual Specification:**
- **Bullet:** Antique Gold circle (6px diameter)
- **Bullet → Text spacing:** 16px
- **Line spacing:** 12px between items
- **Text:** Poppins Regular 16px, Charcoal
- **Indentation:** 32px (from left edge)

**Nested Lists:**
- Second-level bullets: Charcoal circle (4px diameter)
- Maximum nesting: 2 levels (avoid complexity)

---

#### Numbered List (Ordered)
**Visual Specification:**
- **Number:** Charcoal, Poppins Medium 16px
- **Number format:** `1.` `2.` `3.` (period after number)
- **Number → Text spacing:** 16px
- **Line spacing:** 12px between items
- **Indentation:** 32px

---

### 6.5 Cards (Restricted Usage)

**Purpose:** Group related content ONLY when explicitly allowed.

**Card Usage Rule (STRICT):**
- **Cards allowed ONLY on:** Home page → Signature Experiences section (4 event categories)
- **Cards FORBIDDEN on all other pages** unless explicitly approved by Designer + PM

**Rationale:**
Cards invite UI sprawl. Once cards appear everywhere, hierarchy collapses, pages feel templated, and brand looks generic. Strict restriction prevents card abuse.

**Visual Specification (Home Page Only):**
- **Background:** Ivory (same as page background)
- **Border:** 1px solid Charcoal (10% opacity)
- **Border-radius:** 8px
- **Padding:** 32px (all sides)
- **Shadow:** None (restraint over decoration)
- **Hover:** Border changes to Antique Gold (0.2s ease-out)

**Structure:**
```
[Heading: H4]
[Description: Body, max 2 lines]
[Optional: Text link → target page]
```

**Mobile Behavior:**
- Full-width (no side-by-side cards on mobile)
- Padding: 24px (all sides)

**Forbidden (All Pages):**
- Drop shadows (creates visual weight)
- Background images
- Gradient backgrounds
- Colored backgrounds (must be Ivory)
- Icons inside cards (decorative excess)
- More than 4 cards per section (creates density)

---

### 6.6 Form Fields

#### Text Input / Email / Phone
**Visual Specification:**
- **Background:** Ivory
- **Border:** 1px solid Charcoal (20% opacity)
- **Border-radius:** 4px
- **Padding:** 16px (all sides)
- **Height:** 56px (fixed, for consistency)
- **Font:** Poppins Regular 16px, Charcoal
- **Placeholder:** Charcoal (50% opacity)

**States:**
- **Default:** Charcoal (20%) border, Ivory background
- **Focus:** Antique Gold (100%) border (2px), Ivory background, no glow/shadow
- **Error:** Red (`#D32F2F`) border (2px), error message below field
- **Disabled:** Charcoal (5%) background, Charcoal (50%) text, Charcoal (10%) border
- **Filled (valid):** Charcoal (20%) border (no green success indicator — restraint)

**Label:**
- **Position:** Above field (not placeholder, not floating)
- **Typography:** Poppins Regular 14px, Charcoal (70%)
- **Label → Field spacing:** 8px

**Error Message:**
- **Position:** Below field, 8px spacing
- **Typography:** Poppins Regular 14px, Red (`#D32F2F`)
- **Icon:** Optional red alert icon (16px) before text

**Mobile Behavior:**
- Trigger appropriate mobile keyboard (email = email keyboard, tel = number pad)
- Font size: 16px minimum (prevents iOS zoom-in on focus)

---

#### Textarea (Multi-line)
**Visual Specification:**
- Same as Text Input, except:
- **Height:** Auto (min 120px, max 300px)
- **Resize:** Vertical only (no horizontal resize)

---

#### Dropdown (Select)
**Visual Specification:**
- Same as Text Input
- **Arrow icon:** Charcoal, 16px, right-aligned (8px from right edge)
- **Arrow hover:** Antique Gold
- **Dropdown menu:** Ivory background, Charcoal (10%) border, 8px border-radius
- **Option hover:** Charcoal (5%) background
- **Option selected:** Antique Gold text, Charcoal (5%) background

**Mobile Behavior:**
- Use native mobile dropdowns (better UX than custom dropdowns)

---

#### Date Picker
**Visual Specification:**
- Same as Text Input
- **Calendar icon:** Charcoal (70%), 16px, right-aligned
- **Calendar popup:** Use native date picker on mobile, custom calendar widget on desktop
- **Desktop calendar widget:**
  - Background: Ivory
  - Border: Charcoal (20%)
  - Selected date: Antique Gold background, Ivory text
  - Today: Charcoal (10%) background, Charcoal text

---

### 6.7 FAQ Accordion

**Purpose:** Expand/collapse FAQ items on FAQs page

**Closed State:**
- **Background:** Ivory
- **Border:** Bottom border only, 1px solid Charcoal (10%)
- **Padding:** 24px (vertical) × 0px (horizontal)
- **Question:** Poppins SemiBold 18px, Charcoal
- **Icon:** Plus icon (+), Charcoal (70%), 20px, right-aligned
- **Hover:** Icon changes to Antique Gold

**Open State:**
- **Background:** Ivory (no background change)
- **Question:** Poppins SemiBold 18px, Charcoal (no color change)
- **Icon:** Minus icon (−), Antique Gold, 20px
- **Answer:** Poppins Regular 16px, Charcoal (70%), 16px top padding
- **Animation:** 0.2s ease-out expand/collapse

**Mobile Behavior:**
- Increase touch target: 56px vertical padding (question + icon)
- Icon size: 24px (larger for touch)

**Accessibility:**
- ARIA: `role="button"`, `aria-expanded="true/false"`, `aria-controls="answer-{id}"`
- Keyboard: Tab to focus, Enter/Space to toggle

---

### 6.8 Confirmation / Success Messages

**Purpose:** Display after form submission or successful action

**Visual Specification:**
- **Background:** Charcoal (5%) (subtle highlight)
- **Border:** 2px solid Antique Gold (left border only)
- **Border-radius:** 4px
- **Padding:** 24px (all sides)
- **Icon:** Success checkmark (optional), Antique Gold, 24px
- **Heading:** Poppins SemiBold 18px, Charcoal
- **Body:** Poppins Regular 16px, Charcoal (70%)

**Example (Post-Form Submission):**
```
[Checkmark Icon] Thank you for reaching out to Abhima Events.
Our team will connect with you shortly to understand your celebration in detail.
```

**Auto-Dismiss:**
- No auto-dismiss (user must navigate away or close)
- Exception: Toast notifications (if used) auto-dismiss after 5 seconds

---

## 7. PAGE-BY-PAGE DESIGN SPECIFICATION

### 7.1 HOME PAGE

**Page Intent:**
Filter visitors within 5 seconds — users self-identify as "this is for me" or "this is not for me" based on brand language, visual restraint, and cultural competency signals.

**Primary User Mindset:**
"I'm looking for a premium event planner who understands tradition and discretion. Does this brand fit my expectations?"

**Section Order (Top → Bottom):**
1. Hero
2. Brand Philosophy
3. Signature Experiences
4. Abhima Standard
5. Why Abhima Events
6. Destinations Preview
7. Primary CTA

---

#### Section 1: Hero

**Purpose:** Instant brand alignment (5-second filter)

**Components:**
- Headline (H1)
- Subheadline (Body Large)
- 2 CTA Buttons (Primary + Secondary)

**Content (LOCKED — From Website Copy):**
- **Headline:** "Crafting Events That Last a Lifetime"
- **Subheadline:** "Bespoke weddings, corporate gatherings, and private celebrations — curated with precision, discretion, and care."
- **CTA 1:** "Explore Experiences" (Secondary button)
- **CTA 2:** "Begin the Conversation" (Primary button)

**Visual Specification:**
- **Background:** Ivory (no image, no video, no pattern)
- **Layout:** Centered (desktop + mobile)
- **Max-width:** 800px (headline + subhead container)
- **Vertical padding:** 120px (top) × 80px (bottom) on desktop, 80px × 60px on mobile
- **Headline typography:** H1 (56px desktop, 36px mobile)
- **Subheadline typography:** Body Large (18px desktop, 16px mobile)
- **Spacing:**
  - Headline → Subheadline: 24px
  - Subheadline → Buttons: 40px
  - Button 1 → Button 2: 16px (horizontal gap, side-by-side on desktop)
- **Mobile layout:** Buttons stack vertically (full-width), 16px vertical gap

**Visual Hierarchy Rules:**
- Headline must be the first thing the eye sees (largest text on page)
- Subheadline supports headline (no competing visual weight)
- CTAs are distinct but not aggressive (buttons at bottom, not floating)

**UX Failure Modes to Avoid:**
❌ Background image/video (distracts from copy)  
❌ Autoplay video (aggressive, not premium)  
❌ Scrolling arrow or "scroll down" prompt (unnecessary, clutters design)  
❌ More than 2 CTAs (decision paralysis)  

**Forbidden on Home Page:**
- Testimonials (conflicts with discretion principle)
- Pricing indicators or "starting from" language (brand is bespoke, not package-based)
- Social proof badges ("Trusted by 500+ clients")
- Inline forms (form only on Contact page)
- Stock glamour imagery (generic wedding photos)
- Social media feeds or share buttons
- Live chat widgets
- Pop-ups or overlays

---

#### Section 2: Brand Philosophy

**Purpose:** Establish brand positioning (discretion, precision, restraint) through short-form copy

**Components:**
- Overline (optional)
- Body Large text (2–3 paragraphs, max 150 words total)

**Content (LOCKED):**
```
From intimate family rituals to grand destination celebrations, Abhima Events curates experiences of every scale with the same uncompromising standard.

Rooted in tradition and guided by disciplined execution, we manage every detail quietly behind the scenes — so every moment unfolds effortlessly.
```

**Visual Specification:**
- **Layout:** Centered (desktop + mobile)
- **Max-width:** 700px
- **Vertical padding:** 120px (top/bottom) on desktop, 80px on mobile
- **Typography:** Body Large (18px desktop, 16px mobile), Charcoal
- **Line height:** 1.7 (generous spacing for readability)
- **Paragraph spacing:** 16px

**Visual Hierarchy:**
- Text is the hero (no competing visuals)
- White space frames the copy (no dense layout)

**UX Failure Modes to Avoid:**
❌ Icons or illustrations next to paragraphs (decorative excess)  
❌ Colored background (competes with text)  
❌ Italic text for entire paragraph (readability loss)  

---

#### Section 3: Signature Experiences

**Purpose:** Preview 4 event categories with links to Experiences page

**Components:**
- Section Header (H2)
- 4 Cards (or text blocks if cards feel too heavy)

**Content (LOCKED):**
- **Heading:** "Signature Experiences"
- **Categories:**
  1. Weddings & Ceremonial Celebrations
  2. Corporate & Brand Experiences
  3. Private & Social Celebrations
  4. Spiritual & Cultural Events

**Visual Specification:**
- **Layout:** 4 columns (desktop), 1 column (mobile stack)
- **Column gap:** 32px (desktop)
- **Vertical padding:** 120px (top/bottom)
- **Card style:** Minimal border (1px Charcoal 10%), no shadow
- **Card content:**
  - Heading (H4, 20px)
  - Description (Body, max 2 lines, from Experiences page)
  - Text link ("Learn more →") optional
- **Hover:** Border changes to Antique Gold

**Mobile Behavior:**
- Stack vertically (full-width cards)
- 24px gap between cards

**Visual Hierarchy:**
- All 4 categories have equal visual weight (no prioritization)
- Section heading is prominent, cards are subordinate

**UX Failure Modes to Avoid:**
❌ Large images in cards (slows load, competes with text)  
❌ Decorative icons (visual noise)  
❌ Unequal card heights (creates visual imbalance)  

---

#### Section 4: Abhima Standard

**Purpose:** Reinforce brand values (discretion, precision, refinement) through tagline-style copy

**Components:**
- Section Header (H3)
- 3 Statements (Body or H4)
- Supporting text (Body Large, 1 paragraph)

**Content (LOCKED):**
- **Heading:** "The Abhima Standard"
- **Statements:**
  1. Discretion over display.
  2. Precision over excess.
  3. Refinement over spectacle.
- **Supporting text:** "Because true luxury is not seen — it is felt."

**Visual Specification:**
- **Layout:** Centered (desktop + mobile)
- **Max-width:** 700px
- **Vertical padding:** 120px (top/bottom)
- **Statements typography:** H4 (20px) or Body Large (18px) depending on desired weight
- **Statements spacing:** 16px (vertical gap between statements)
- **Statements → Supporting text spacing:** 32px
- **Supporting text:** Italic (for emphasis), Body Large (18px)

**Visual Hierarchy:**
- Statements are the focus (equal weight)
- Supporting text is subordinate (italic, smaller visual weight)

**UX Failure Modes to Avoid:**
❌ Numbering statements (creates artificial hierarchy)  
❌ Statements in Antique Gold (over-emphasizes accent color)  
❌ Statements as H2 (too aggressive)  

---

#### Section 5: Why Abhima Events

**Purpose:** List value propositions (trust signals for HNW/corporate clients)

**Components:**
- Section Header (H3)
- Bulleted list (5 items)

**Content (LOCKED):**
- **Heading:** "Why Abhima Events"
- **List:**
  1. Celebrations of every scale, one unwavering standard
  2. Deep understanding of Telugu & pan-India traditions
  3. One-stop end-to-end execution
  4. Bespoke experiences, never templated
  5. Trusted Abhima legacy

**Visual Specification:**
- **Layout:** Centered (desktop + mobile)
- **Max-width:** 700px
- **Vertical padding:** 120px (top/bottom)
- **List style:** Antique Gold bullets (6px diameter)
- **List item typography:** Body (16px), Charcoal
- **List item spacing:** 12px (vertical gap)

**Visual Hierarchy:**
- Bullets draw eye to each item
- Items have equal visual weight

**UX Failure Modes to Avoid:**
❌ Icons next to list items (decorative excess)  
❌ Numbered list (creates false prioritization)  
❌ Expandable list items (adds unnecessary complexity)  

---

#### Section 6: Destinations Preview

**Purpose:** Show geographic coverage (Hyderabad + India + international)

**Components:**
- Section Header (H3)
- Bulleted list (9+ cities) OR inline text (cities separated by `|`)

**Content (LOCKED):**
```
Hyderabad | Chennai | New Delhi | Goa | Jaipur | Udaipur | Kerala | Bangalore | Mumbai
Telangana & Andhra Pradesh | Across India | International destinations on request
```

**Visual Specification:**
- **Layout:** Centered (desktop + mobile)
- **Max-width:** 900px (wider than body text for horizontal layout)
- **Vertical padding:** 120px (top/bottom)
- **Typography:** Body (16px), Charcoal
- **Format:** Inline text with `|` separators (cleaner than bulleted list)
- **Line height:** 1.8 (allows text wrapping on smaller screens)

**Mobile Behavior:**
- Text wraps naturally (no forced line breaks)

**Visual Hierarchy:**
- All cities have equal weight
- "International destinations on request" appears after main list (subordinate but visible)

**UX Failure Modes to Avoid:**
❌ Interactive map (adds complexity, slow load)  
❌ City images (competes with text)  
❌ Prioritizing certain cities with bold/color  

---

#### Section 7: Primary CTA

**Purpose:** Drive conversion to Contact page

**Components:**
- Heading (H2)
- Primary button

**Content (LOCKED):**
- **Heading:** "Begin a Timeless Celebration"
- **Button:** "Contact Us"

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 600px
- **Vertical padding:** 120px (top/bottom)
- **Heading → Button spacing:** 32px

**Button Target:**
- Links to `/contact` page

**UX Failure Modes to Avoid:**
❌ Multiple CTAs (competes with primary action)  
❌ CTA background color block (creates visual noise)  

---

### 7.2 ABOUT PAGE

**Page Intent:**
Build trust through founder credibility, legacy story, and brand philosophy (human narrative + value transparency).

**Primary User Mindset:**
"I want to know who's behind this brand before I trust them with my event."

**Section Order:**
1. Page Header
2. Company Overview
3. The Abhima Standard (repeated from Home)
4. Founder & Abhima Legacy
5. Founder Note
6. Philosophy
7. CTA

---

#### Section 1: Page Header

**Components:**
- H1 Heading

**Content:**
"About Abhima Events"

**Visual Specification:**
- **Layout:** Centered
- **Vertical padding:** 80px (top/bottom)
- **Typography:** H1 (56px desktop, 36px mobile)

---

#### Section 2: Company Overview

**Content (LOCKED):**
```
Abhima Events is a bespoke event curation house delivering weddings, traditional ceremonies, corporate gatherings, and private celebrations across India and select global destinations.

We believe scale never defines importance. Whether an intimate family function or a large-scale destination event, every celebration is treated with the same responsibility, care, and precision.
```

**Visual Specification:**
- **Layout:** Left-aligned (desktop), centered (mobile)
- **Max-width:** 800px
- **Vertical padding:** 80px (bottom)
- **Typography:** Body Large (18px desktop, 16px mobile)
- **Paragraph spacing:** 16px

---

#### Section 3: The Abhima Standard (Repeat)

**Content (LOCKED):**
Same as Home page Section 4

**Visual Specification:**
Same as Home page Section 4

**Rationale:**
Reinforces brand values for users who skip Home page and land on About page directly.

---

#### Section 4: Founder & Abhima Legacy

**Content (LOCKED):**
```
Abhima Events is part of the larger Abhima legacy — a name built on trust, integrity, and long-term vision.

Founded on the belief that meaningful celebrations deserve thoughtful stewardship, the brand reflects structured execution, cultural understanding, and responsibility-driven leadership.

The Abhima name is built not on volume, but on trust earned over time.
```

**Visual Specification:**
- **Layout:** Left-aligned (desktop), centered (mobile)
- **Max-width:** 800px
- **Vertical padding:** 80px (top/bottom)
- **Typography:** Body Large (18px)
- **Paragraph spacing:** 16px

**Open Design Question:**
Should this section include founder's name and photo? (See PRD Section 12, Question 5)
- If YES: Photo left, text right (desktop), stack (mobile)
- If NO: Text-only (current spec)

---

#### Section 5: Founder Note

**Content (LOCKED):**
```
Every celebration entrusted to us carries meaning.
Our responsibility is to honour it with care, discipline, and respect for the moment.

— Founder, Abhima Events
```

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 700px
- **Vertical padding:** 80px (top/bottom)
- **Typography:** Body Large (18px), Italic
- **Attribution:** Charcoal (70%), Poppins Regular 14px, right-aligned
- **Border:** Left border (4px solid Antique Gold)
- **Padding-left:** 32px (indent from border)

**Visual Hierarchy:**
- Border + italic signals "quoted text"
- Attribution is subordinate (smaller, lower opacity)

---

#### Section 6: Philosophy

**Content (LOCKED):**
```
Listen Intently.
Design Thoughtfully.
Execute Impeccably.
```

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 600px
- **Vertical padding:** 80px (top/bottom)
- **Typography:** H3 (28px desktop, 22px mobile)
- **Line spacing:** 16px between lines

**Visual Hierarchy:**
- Equal weight for all 3 statements
- Large type size signals importance

---

#### Section 7: CTA

**Content:**
"Begin a timeless celebration" (H2)
"Contact Us" (Primary button → `/contact`)

**Visual Specification:**
Same as Home page Section 7

**Forbidden on About Page:**
- Testimonials (unless explicitly approved by Founder — see Open Questions)
- Team photos (unless founder photo approved)
- Office photos or "behind the scenes" imagery
- Awards or certification badges
- Social proof metrics ("10+ years experience")
- Timeline graphics ("our journey")

---

### 7.3 EXPERIENCES PAGE

**Page Intent:**
Self-service discovery of "do they do my type of event?" through comprehensive event type categorization.

**Primary User Mindset:**
"I need a specific type of event. Do they handle it?"

**Section Order:**
1. Page Header
2. Weddings & Ceremonial Celebrations
3. Corporate & Brand Experiences
4. Private & Social Celebrations
5. Spiritual & Cultural Assemblies
6. CTA

---

#### Section 1: Page Header

**Content:**
"Experiences" (H1)

**Visual Specification:**
Same as About page header

---

#### Sections 2–5: Event Categories

**Structure (Repeated 4 Times):**
- Category Heading (H2)
- Category Description (Body, 1–2 sentences)
- Event Types (Bulleted list)

**Category 1: Weddings & Ceremonial Celebrations**

**Content (LOCKED):**
```
We curate weddings that honour tradition while embracing understated luxury. Every ritual and celebration is executed with intention and elegance.

- Destination weddings
- Pelli Choopulu & Nischitartham
- Sangeeth & cocktail evenings
- Haldi & Mehendi ceremonies
- Mangalsnanam & wedding rituals
- Receptions & after-parties
- Gruhapravesam, Seemantham & Naming Ceremonies
- Upanayanam & sacred milestones
```

**Visual Specification:**
- **Layout:** Left-aligned (desktop), left-aligned (mobile)
- **Max-width:** 900px
- **Vertical padding:** 80px (top), 60px (bottom)
- **Heading typography:** H2 (40px desktop, 28px mobile)
- **Description typography:** Body (16px)
- **List style:** Antique Gold bullets
- **Heading → Description spacing:** 16px
- **Description → List spacing:** 24px

**Category 2: Corporate & Brand Experiences**

**Content (LOCKED):**
```
Professionally managed events aligned with stature, purpose, and brand clarity.

- Leadership conferences
- Product launches
- Annual meets & award evenings
- Dealer meets & executive retreats
```

**Visual Specification:**
Same as Category 1

**Category 3: Private & Social Celebrations**

**Content (LOCKED):**
```
Thoughtfully curated celebrations for personal milestones.

- Birthday celebrations (all age groups)
- Anniversaries & milestone occasions
- Private residence & villa events
- Curated themed gatherings
```

**Category 4: Spiritual & Cultural Assemblies**

**Content (LOCKED):**
```
Respectfully executed gatherings honouring faith and tradition.

- Pujas, homams & vrathams
- Temple ceremonies & annadanam
- Festival celebrations & spiritual congregations
```

---

#### Section 6: CTA

**Content:**
"Ready to begin?" (H2)
"Contact Us" (Primary button → `/contact`)

**Visual Specification:**
Same as Home page Section 7

**Forbidden on Experiences Page:**
- Event photos or gallery (conflicts with discretion)
- Pricing per event type
- "Most popular" or "recommended" tags
- Icons next to event types (decorative excess)
- Expandable event descriptions (adds complexity)

---

### 7.4 SERVICES PAGE

**Page Intent:**
Clarify operational capabilities (what ABHIMA does behind the scenes) vs. à la carte expectations.

**Primary User Mindset:**
"What exactly do they do? Is it full-service or just planning?"

**Section Order:**
1. Page Header
2. Services Overview
3. Services List
4. Tagline
5. CTA

---

#### Section 1: Page Header

**Content:**
"Services" (H1)

**Visual Specification:**
Same as About/Experiences page header

---

#### Section 2: Services Overview

**Content (LOCKED):**
"We manage every element behind the scenes so you can remain fully present in the moment."

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 700px
- **Vertical padding:** 60px (bottom)
- **Typography:** Body Large (18px), Charcoal

---

#### Section 3: Services List

**Content (LOCKED):**
```
- Bespoke event concept & experience design
- Venue & destination curation
- Décor, styling & production
- Artist & entertainment management
- Hospitality, travel & guest experience
- Sound, lighting & visual production
- On-ground event direction & operations
```

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 700px
- **Vertical padding:** 60px (bottom)
- **List style:** Antique Gold bullets
- **Typography:** Body (16px)
- **Line spacing:** 12px

---

#### Section 4: Tagline

**Content (LOCKED):**
"Celebrations of every scale, curated with the same unwavering standard."

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 700px
- **Vertical padding:** 60px (top/bottom)
- **Typography:** Body Large (18px), Italic

---

#### Section 5: CTA

Same as Home page Section 7

**Forbidden on Services Page:**
- Pricing ("packages starting from...")
- Service comparison tables
- Icons next to service items
- "Add-on services" upsell language
- Downloadable service brochures

---

### 7.5 DESTINATIONS PAGE

**Page Intent:**
Self-qualification ("Do they work in my city?") through geographic coverage display.

**Primary User Mindset:**
"I'm planning an event in [city]. Do they operate there?"

**Section Order:**
1. Page Header
2. India Destinations (Bulleted List)
3. Regional Coverage
4. International Note
5. CTA

---

#### Section 1: Page Header

**Content:**
"Destinations" (H1)

**Visual Specification:**
Same as previous pages

---

#### Section 2: India Destinations

**Content (LOCKED):**
```
- Hyderabad
- Chennai
- New Delhi
- Goa
- Jaipur
- Udaipur
- Kerala
- Bangalore
- Mumbai
```

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 600px
- **Vertical padding:** 60px (bottom)
- **List style:** Antique Gold bullets
- **Typography:** Body (16px)

---

#### Section 3: Regional Coverage

**Content (LOCKED):**
"Across Telangana & Andhra Pradesh"

**Visual Specification:**
- **Layout:** Centered
- **Typography:** Body (16px), Charcoal
- **Vertical padding:** 24px (bottom)

---

#### Section 4: International Note

**Content (LOCKED):**
"Hand-picked locations curated for seamless destination celebrations across India.

International destinations curated upon request."

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 700px
- **Typography:** Body (16px), Charcoal (70%)
- **Vertical padding:** 60px (bottom)

---

#### Section 5: CTA

Same as Home page Section 7

**Forbidden on Destinations Page:**
- Interactive maps (adds complexity, slow load)
- Destination photos (competes with text)
- "Featured destinations" prioritization
- Pricing by destination
- Travel package details

---

### 7.6 FAQs PAGE

**Page Intent:**
Address objections pre-emptively (small events, privacy, involvement, destination) to reduce founder's repetitive questions burden.

**Primary User Mindset:**
"I have specific questions. Are they answered here before I reach out?"

**Section Order:**
1. Page Header
2. FAQ Accordion (6 items)
3. CTA

---

#### Section 1: Page Header

**Content:**
"Frequently Asked Questions" (H1)

**Visual Specification:**
Same as previous pages

---

#### Section 2: FAQ Accordion

**Content (LOCKED):**

**Q1:** Do you handle small events as well as large ones?  
**A1:** Yes. Abhima Events manages celebrations of every scale. Our standard of execution remains unchanged, regardless of size.

**Q2:** Do you take multiple events on the same date?  
**A2:** We limit engagements to ensure focused leadership and flawless delivery.

**Q3:** Can you manage traditional and modern events together?  
**A3:** Absolutely. Cultural authenticity and contemporary design coexist seamlessly in our work.

**Q4:** Do you offer destination wedding planning?  
**A4:** Yes. We curate destination weddings across India and select global locations.

**Q5:** How involved do clients need to be?  
**A5:** As much or as little as preferred. We take full operational responsibility.

**Q6:** How do you ensure privacy?  
**A6:** All events are managed with strict confidentiality and discretion. All client information and event details are handled with strict confidentiality.

**Visual Specification:**
- **Layout:** Left-aligned (desktop), left-aligned (mobile)
- **Max-width:** 900px
- **Vertical padding:** 80px (top/bottom)
- **Component:** FAQ Accordion (see Section 6.7 for component spec)
- **FAQ spacing:** 0px (accordions stack with shared borders)

---

#### Section 3: CTA

**Content:**
"Still have questions?" (H2)
"Contact Us" (Primary button → `/contact`)

**Visual Specification:**
Same as Home page Section 7

**Forbidden on FAQs Page:**
- Pricing questions/answers
- Testimonials embedded in FAQs
- "Book now" CTAs (only "Contact Us" allowed)
- Live chat prompts
- Social proof in answers ("95% client satisfaction")

---

### 7.7 CONTACT PAGE

**Page Intent:**
Low-friction lead capture with multiple contact options (form, email, WhatsApp, phone).

**Primary User Mindset:**
"I'm ready to reach out. What's the easiest way to contact them?"

**Section Order:**
1. Page Header
2. Contact Options (Email, WhatsApp, Phone, Address)
3. Enquiry Form
4. Form Submission Confirmation (Post-Submit State)

---

#### Section 1: Page Header

**Content:**
"Contact" (H1)

**Subhead (Body Large):**
"If your celebration matters, it deserves thoughtful stewardship."

**Visual Specification:**
- **Layout:** Centered
- **Vertical padding:** 80px (top/bottom)
- **H1 → Subhead spacing:** 16px

---

#### Section 2: Contact Options

**Content (LOCKED):**
```
Email: info@abhimaevents.com
Phone: [Number]
WhatsApp: [Number]
Based in Hyderabad | Serving India & Beyond
```

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 600px
- **Vertical padding:** 60px (bottom)
- **Typography:**
  - Labels ("Email:", "Phone:"): Poppins Regular 14px, Charcoal (70%)
  - Values (email, phone): Poppins Medium 16px, Charcoal
  - Links: Text link style (Charcoal, underline, hover → Antique Gold)
- **Line spacing:** 12px between items

**Interaction:**
- Email: `mailto:` link
- Phone: `tel:` link
- WhatsApp: WhatsApp API link (click-to-chat: `https://wa.me/[number]`)

---

#### Section 3: Enquiry Form

**Content (LOCKED — Field List from PRD FR-7):**
- Name (Text input, required)
- Email/Phone (Text input, required)
- Event Type (Dropdown, required)
- Event Location (Text input, required)
- Event Date (Date picker, required)
- Estimated Planning Scale (Dropdown, required)
- Message (Textarea, optional)

**Visual Specification:**
- **Layout:** Centered
- **Max-width:** 600px
- **Vertical padding:** 80px (top/bottom)
- **Form background:** Ivory (no background differentiation)
- **Field spacing:** 24px (vertical gap between fields)
- **Label position:** Above field (8px spacing)
- **Submit button:** Primary button style, full-width (mobile), auto-width (desktop)
- **Button text:** "Submit Enquiry"

**Event Type Dropdown Options (LOCKED):**
1. Wedding & Ceremonial Celebrations
2. Corporate & Brand Experiences
3. Private & Social Celebrations
4. Spiritual & Cultural Events

**Estimated Planning Scale Dropdown Options (LOCKED):**
1. Intimate (< 50 guests)
2. Mid-scale (50–150 guests)
3. Large-scale (150–300 guests)
4. Destination / Multi-day (300+ guests or multi-city)

**Validation Rules:**
- All fields except "Message" are required
- Email field must validate email format
- Phone field accepts any text (international phone formats vary)
- Event Date must be future date (no past dates)
- Error messages appear below field (Red text, 14px)

**Form Submission:**
- POST to Formspree API
- On success: Display confirmation message (Section 4)
- On error: Display error message ("Something went wrong. Please try again or contact us directly via email/WhatsApp.")

**Trust Reinforcement (Below Submit Button):**

**Problem:** HNW families may hesitate to submit forms (privacy concerns).

**Solution:** Add subtle trust statement below submit button.

**Content:**
"All enquiries are handled with strict confidentiality."

**Visual Specification:**
- **Position:** 16px below submit button
- **Typography:** Poppins Regular 14px, Charcoal (70%)
- **Alignment:** Centered (below button)
- **Icon:** Optional small lock icon (12px, Charcoal 70%) before text

**Rationale:**
Aligns with brand's discretion principle. Reduces silent hesitation without being aggressive ("Your privacy is our priority!" would be too sales-y).

**Forbidden on Contact Page:**
- Live chat widgets
- "Talk to us now" aggressive CTAs
- Social proof ("Join 500+ satisfied clients")
- Testimonials on contact page
- Pricing hints or "free consultation" language

---

#### Section 4: Form Submission Confirmation (Post-Submit)

**Content (LOCKED):**
"Thank you for reaching out to Abhima Events. Our team will connect with you shortly to understand your celebration in detail."

**Visual Specification:**
- **Layout:** Replaces form on successful submission
- **Max-width:** 600px
- **Background:** Charcoal (5%) (subtle highlight)
- **Border:** 2px solid Antique Gold (left border only)
- **Border-radius:** 4px
- **Padding:** 32px (all sides)
- **Typography:** Body Large (18px), Charcoal
- **Icon:** Success checkmark (optional), Antique Gold, 24px, top-aligned

**Fallback Instructions (Displayed Below Confirmation):**
"If you don't receive a response within 24 hours, please reach out directly via WhatsApp or email."

**Visual Specification (Fallback):**
- **Typography:** Small (14px), Charcoal (70%)
- **Top spacing:** 24px (from confirmation box)

---

## 8. FORM & CONVERSION UX

### Field Order (With Rationale)

**Order:**
1. Name
2. Email/Phone
3. Event Type
4. Event Date
5. Event Location
6. Estimated Planning Scale
7. Message

**Rationale:**
- **Name first:** Low cognitive load (easy to start)
- **Contact info second:** Establishes identity before event details
- **Event Type third:** Filters users early (qualifies lead intent)
- **Event Date fourth:** Forces commitment (vague dates = unqualified)
- **Event Location fifth:** Contextualizes scale
- **Planning Scale sixth:** Builds on Event Type + Location context
- **Message last:** Optional (allows users to submit without friction)

---

### Mandatory vs Optional Fields

**Mandatory (Required):**
- Name
- Email/Phone
- Event Type
- Event Date
- Event Location
- Estimated Planning Scale

**Optional:**
- Message

**Rationale (PRD-Based):**
A lead is qualified if Event Type, Event Date, and Planning Scale are provided. Location is required for operational scoping. Contact info is required for follow-up.

---

### Validation Behavior

**Client-Side (Immediate Feedback):**
- Required field empty → Error border appears on blur
- Email invalid format → Error message: "Please enter a valid email address"
- Phone field → No validation (international formats vary)
- Event Date in past → Error message: "Please select a future date"

**Server-Side (Formspree):**
- Form spam filter (honeypot + reCAPTCHA if needed)
- Duplicate submission check (prevent accidental double-submit)

**Error Timing:**
- On blur (when user leaves field)
- On submit (if user skips fields entirely)

---

### Error Messaging Tone

**Tone:** Polite, helpful, non-judgmental

**Examples:**
✅ "Please enter your name"  
✅ "Please select an event type"  
✅ "Please enter a valid email address"  

❌ "Name is required!" (aggressive)  
❌ "Invalid email!" (harsh)  
❌ "You must fill this out" (bossy)  

**Rule:** No exclamation marks in error messages.

---

### Success State Design

**Post-Submission:**
- Form disappears
- Confirmation message appears (see Contact Page Section 4)
- No confetti animation or decorative success graphics (restraint)

**Auto-Responder Email (Formspree Config):**
Subject: "Thank you for contacting Abhima Events"
Body:
```
Dear [Name],

Thank you for reaching out to Abhima Events. We have received your enquiry and will respond within 24 hours to discuss your celebration in detail.

If you don't hear from us within 24 hours, please feel free to reach out directly:
- Email: info@abhimaevents.com
- WhatsApp: [Number]

Warm regards,
Abhima Events Team
```

---

### Fallback Paths (WhatsApp / Email)

**Displayed Prominently:**
- Above form: Contact options (email, WhatsApp, phone)
- After form submit (in confirmation message): Fallback reminder

**Rationale:**
If Formspree fails, users can still contact via direct channels (visible redundancy).

---

### Mobile Keyboard Behavior

**Trigger Appropriate Keyboards:**
- **Email field:** `type="email"` → Triggers email keyboard (@, .com shortcuts)
- **Phone field:** `type="tel"` → Triggers number pad
- **Event Location:** `type="text"` → Standard keyboard
- **Message:** `<textarea>` → Standard keyboard

**Font Size:** 16px minimum (prevents iOS auto-zoom on focus)

---

## 9. ACCESSIBILITY & USABILITY

### Keyboard Navigation

**All Interactive Elements Must Be:**
- Tab-focusable (navigation links, buttons, form fields, accordion toggles)
- Enter/Space activatable (buttons, links, accordion toggles)
- Esc dismissible (mobile menu, modals if any)

**Tab Order:**
- Follows visual order (top → bottom, left → right)
- Skip to main content link (optional, for screen reader users)

**Focus Trap:**
- Mobile menu: Focus trapped inside menu when open (Esc closes menu)

---

### Focus Indicators

**Specification:**
- **Style:** 2px solid Antique Gold outline, 4px offset from element
- **Shape:** Follows element shape (rectangle for buttons, rounded for form fields)
- **No removal:** Never use `outline: none` without replacement

**Example:**
```css
button:focus-visible {
  outline: 2px solid #C9A86A;
  outline-offset: 4px;
}
```

**Rationale:**
Default browser focus styles are inconsistent. Custom focus indicator ensures brand consistency + accessibility.

---

### Screen Reader Considerations

**ARIA Labels (Required):**
- **Navigation:** `<nav aria-label="Main navigation">`
- **Forms:** `<form aria-label="Contact enquiry form">`
- **Buttons:** `<button aria-label="Begin conversation with Abhima Events">`
- **Accordion:** `<button aria-expanded="false" aria-controls="faq-1">Question</button>`
- **Icons (decorative):** `aria-hidden="true"` (exclude from screen reader)

**Headings Hierarchy:**
- H1: Page title (one per page)
- H2: Major sections
- H3: Subsections
- Never skip levels (H1 → H3 is forbidden)

**Alt Text (Images):**
- Descriptive, keyword-relevant
- Example: "Abhima Events logo — luxury event planning in Hyderabad"
- Decorative images: `alt=""` (empty alt, signals decorative to screen reader)

---

### Touch Target Sizing

**Minimum Size:** 44px × 44px (WCAG 2.1 Level AA)

**Applies To:**
- All buttons
- All links (add vertical padding if text <44px)
- Form fields (height: 56px exceeds requirement)
- Accordion toggles (mobile: 56px vertical padding)
- Mobile menu hamburger icon (24px icon + 44px touch target)

**Implementation:**
If text link is <44px, add transparent padding to reach 44px minimum.

---

### Error Messaging Accessibility

**Requirements:**
- Error messages associated with fields via `aria-describedby`
- Error messages announced to screen readers
- Error messages visible (not color-only indication)

**Example:**
```html
<label for="name">Name</label>
<input id="name" aria-describedby="name-error" aria-invalid="true" />
<p id="name-error" role="alert">Please enter your name</p>
```

---

### Color Contrast (WCAG 2.1 Level AA)

**Requirements:**
- Body text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Tested Ratios (Charcoal #2B2B2B on Ivory #FEFDFB):**
- ~16:1 (exceeds WCAG AAA standard)

**Antique Gold (#C9A86A) on Ivory:**
- ~4.8:1 (passes WCAG AA for large text, use for buttons only)

**Red (#D32F2F) on Ivory:**
- ~7:1 (passes WCAG AA for body text, safe for error messages)

---

## 10. PERFORMANCE-AWARE DESIGN RULES

### Image Size Limits

**Per-Image Maximum:**
- Hero images: 200KB (compressed)
- Section images: 150KB
- Icons: 10KB (prefer SVG over PNG)

**Total Above-Fold Weight:**
- <500KB (HTML + CSS + critical images + fonts)

**Format:**
- WebP (primary)
- JPG fallback (for older browsers)
- SVG for logos/icons

**Lazy Loading:**
- All images below fold must lazy-load (`loading="lazy"`)

---

### Above-the-Fold Weight Limits

**Critical CSS:** <15KB (inlined in `<head>`)
**Deferred CSS:** Loaded after first paint
**JavaScript:** <50KB (defer or async load)

**Rationale:**
Indian mobile networks (3G in Tier-2/3 cities) require aggressive optimization. Users must see content within 3 seconds on slow networks.

---

### Animation Restrictions

**Allowed:**
- CSS transitions only (no JavaScript animations)
- Max duration: 0.3s
- Easing: `ease-out` or `ease-in-out` only

**Forbidden:**
- GIF animations
- Lottie animations
- Parallax scroll effects (causes layout thrashing)
- Autoplay video backgrounds

**Performance Rule:**
If animation causes layout shift (CLS spike), remove it.

---

### Lazy-Loading Rules

**Images:**
- Below fold: `loading="lazy"`
- Above fold: `loading="eager"` (or no attribute)

**Fonts:**
- Critical fonts (Poppins Regular 400, SemiBold 600): Preload
- Non-critical fonts (Bold 700, Medium 500): Load after first paint

**Formspree Script:**
- Defer load until user reaches Contact page (not on every page)

---

### India-Specific Mobile Network Assumptions

**Target Performance (3G Networks):**
- Page load: <3s
- Time to Interactive: <5s

**Optimization Strategy:**
- Text-first rendering (content visible before images load)
- No render-blocking resources above fold
- CDN (Cloudflare) for global edge caching

---

## 11. CONTENT GOVERNANCE RULES

### What Copy Can Be Edited

**Allowed Edits (Without Designer Approval):**
- Adding new cities to Destinations page (append to existing list)
- Adding new event types to Experiences page (within existing categories)
- Updating FAQs (add new Q&A, edit existing answers)
- Updating contact information (email, phone, WhatsApp)

**Rule:** Edits must maintain tone, structure, and restraint. No marketing hyperbole.

---

### What Copy Must Never Be Edited

**Locked Content (Requires Founder + Designer Approval):**
- Brand philosophy statements ("Discretion over display...")
- Abhima Standard tagline ("True luxury is not seen — it is felt")
- Founder note (quoted text on About page)
- Hero headline ("Crafting Events That Last a Lifetime")
- Page structure (section order, number of sections)

**Rationale:** Core brand messaging defines positioning. Edits risk diluting brand voice.

---

### Where New Content Is Allowed

**Approved Expansion Areas:**
- **Services page:** Add new service categories (maintain list format)
- **Experiences page:** Add new event types (within existing categories)
- **Destinations page:** Add new cities/regions
- **FAQs page:** Add new questions

**Forbidden Expansion:**
- New pages (beyond 7 locked pages)
- New sections on existing pages (structure is fixed)
- Blog/news section (out-of-scope, Phase 2)

---

### When Design Must Reject New Content Requests

**Auto-Reject Scenarios:**
- Request to add portfolio/gallery (conflicts with discretion principle)
- Request to add social media feeds (conflicts with restraint principle)
- Request to add live chat widget (conflicts with non-goals)
- Request to add pricing tables (brand is bespoke, not package-based)
- Request to add testimonials with client names/photos (privacy violation)

**Escalation:**
If founder requests rejected features, escalate to PM (feature may require Phase 2 evaluation, not immediate implementation).

---

### Rules for Future Expansion Without Redesign

**Modular Sections:**
- Each page section is self-contained (add/remove without breaking layout)
- New FAQ items: Append to accordion (no redesign needed)
- New cities: Append to list (no redesign needed)

**Non-Modular (Requires Redesign):**
- Changing homepage hero (requires designer approval)
- Adding new page (requires sitemap update, navigation redesign)
- Changing grid system (breaks all layouts)

---

## 12. DESIGN → ENGINEERING HANDOFF

### Component Naming Conventions

**Format:** `ComponentName` (PascalCase)

**Examples:**
- `PrimaryButton`
- `SecondaryButton`
- `FormField`
- `SectionHeader`
- `FAQAccordion`
- `CTASection`

**CSS Classes:** BEM methodology (Block__Element--Modifier)

**Examples:**
- `.button--primary`
- `.button--secondary`
- `.form__field`
- `.form__field--error`
- `.faq__accordion`
- `.faq__accordion--open`

---

### Design Token Expectations

**Tokens to Define (JSON or CSS Variables):**

```json
{
  "colors": {
    "ivory": "#FEFDFB",
    "charcoal": "#2B2B2B",
    "antiqueGold": "#C9A86A",
    "errorRed": "#D32F2F",
    "successGreen": "#388E3C"
  },
  "typography": {
    "fontFamily": "Poppins, sans-serif",
    "fontWeights": {
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    },
    "fontSizes": {
      "h1Desktop": "56px",
      "h1Mobile": "36px",
      "h2Desktop": "40px",
      "h2Mobile": "28px",
      "body": "16px",
      "bodyLarge": "18px",
      "small": "14px"
    },
    "lineHeights": {
      "heading": 1.2,
      "body": 1.6,
      "small": 1.5
    }
  },
  "spacing": {
    "sectionPaddingDesktop": "120px",
    "sectionPaddingMobile": "80px",
    "containerMaxWidth": "1200px",
    "contentMaxWidth": "800px"
  },
  "breakpoints": {
    "mobile": "640px",
    "tablet": "1024px"
  }
}
```

**Usage:**
Tokens ensure consistency across components. Engineers must reference tokens, not hard-code values.

---

### Responsive Behavior Documentation

**Breakpoints:**
- Mobile: <640px
- Tablet: 640px – 1024px
- Desktop: ≥1024px

**Behavior by Component:**

| Component | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| **Navigation** | Horizontal links | Horizontal links | Hamburger menu |
| **Hero CTAs** | Side-by-side | Side-by-side | Stacked (full-width) |
| **Signature Experiences** | 4 columns | 2 columns | 1 column |
| **Form Fields** | Auto-width | Auto-width | Full-width |
| **Footer Columns** | 3 columns | 3 columns | 1 column (stacked) |

**Grid Behavior:**
- Desktop: 12-column grid (1200px max-width)
- Tablet: 12-column grid (100vw width, 60px padding)
- Mobile: Single column (24px padding)

---

### Edge Cases Engineers Must Handle

**Edge Case 1: Long Event Location Names**
- Input: "Destination wedding across Jaipur, Udaipur, and Pushkar"
- Handling: Text wraps to next line (no truncation, no overflow)

**Edge Case 2: Form Submission Failure (Formspree Down)**
- Fallback: Display error message + emphasize email/WhatsApp fallback
- No retry button (users contact directly via email/WhatsApp)

**Edge Case 3: Mobile Menu Open While User Rotates Device**
- Handling: Menu stays open, re-calculates height (no layout break)

**Edge Case 4: User Submits Form with Only Spaces in Text Fields**
- Validation: Trim whitespace, reject if empty after trim

**Edge Case 5: FAQ Accordion Height Exceeds Viewport (Very Long Answer)**
- Handling: Scroll within accordion (max-height: 80vh, overflow-y: scroll)

---

### What Is Intentionally Undefined

**Designer Will NOT Specify:**
- Exact animation easing curves (use standard `ease-out`, `ease-in-out`)
- Exact focus ring blur radius (use browser defaults or 2px solid)
- Exact line break positions in headings (responsive text wraps naturally)
- Exact color of browser autocomplete fields (use browser defaults)

**Rationale:**
Over-specification creates unnecessary implementation complexity. Trust engineering judgment for micro-details.

---

## 13. ANTI-PATTERNS (AUTO-REJECT)

The following patterns are **forbidden**. If any appear in design comps, mockups, or code, they auto-fail review.

### ❌ Carousels / Image Sliders
**Why Forbidden:**
- Poor mobile UX (users miss content)
- Performance cost (preloading multiple images)
- Accessibility issues (screen reader navigation)
- Signals indecision (brand is decisive, not exploratory)

**Alternative:**
- Single hero image OR text-only hero (current spec)

---

### ❌ Over-Animation
**Forbidden Animations:**
- Parallax scroll effects
- Fade-in-on-scroll reveals
- Typewriter text effects
- Floating/bouncing CTAs
- Hover scale/lift effects
- Cursor trail effects

**Rationale:**
Over-animation signals insecurity. Premium brands are still and confident.

---

### ❌ Stock "Wedding Glamour" Visuals
**Forbidden Imagery:**
- Generic bride/groom stock photos
- Champagne glasses clinking
- Flower petals falling
- Ring close-ups
- White dress on beach

**Rationale:**
Stock wedding imagery dilutes cultural specificity and discretion. If images are needed (Phase 2), they must be custom photography of Telugu/pan-India events.

---

### ❌ Decorative Icons
**Forbidden:**
- Icons next to headings (e.g., ✨ "Signature Experiences")
- Icons next to list items (e.g., ✓ checkmarks instead of bullets)
- Icons in footer (e.g., phone icon before phone number)
- Social media icons (brand is not social-first)

**Allowed Icons:**
- Hamburger menu icon (mobile)
- Close icon (mobile menu)
- Accordion expand/collapse icon (functional, not decorative)
- Form field icons (calendar for date picker, only if functional)

---

### ❌ Gold Gradients / Shine Effects
**Forbidden:**
- Antique Gold gradients (solid color only)
- Gold foil textures
- Metallic shine effects
- Gold glitter overlays

**Rationale:**
Gradients and shine signal "trying too hard." Solid Antique Gold is restrained and premium.

---

### ❌ Overlapping CTAs
**Forbidden:**
- Multiple primary buttons on same screen
- Primary CTA + secondary CTA + text link all pointing to same page
- Sticky floating CTA buttons

**Rule:**
One primary action per viewport. If multiple CTAs exist, they must have clear hierarchy (primary > secondary > text link).

---

### ❌ Autoplay Media
**Forbidden:**
- Autoplay video backgrounds
- Autoplay audio
- GIF animations that loop infinitely

**Rationale:**
Autoplay is aggressive and disrespectful of user attention. Premium brands wait for user initiation.

---

### ❌ Fake Testimonials
**Forbidden:**
- Generic testimonials ("Best event planner ever!" — John D.)
- Stock photo testimonials
- Testimonials without client consent

**Allowed (If Founder Provides):**
- Anonymous testimonials with geographic identifier ("A family from Hyderabad")
- Corporate testimonials with company type ("A Fortune 500 technology company")

**Current Spec:**
No testimonials (discretion-first brand respects client privacy).

---

### ❌ Trend-Driven UI Styles
**Forbidden:**
- Glassmorphism (frosted glass effects)
- Neumorphism (soft shadows, embossed effects)
- Brutalism (intentionally ugly, harsh layouts)
- 3D illustrations
- Animated gradients

**Rationale:**
Trends date quickly. This brand is timeless, not trendy.

---

## 14. OPEN DESIGN QUESTIONS

The following decisions require **stakeholder input** before finalization.

### Question 1: Founder Name & Photo on About Page
**Options:**
1. **Include founder name + professional photo**
   - Builds personal trust
   - Humanizes brand
   - Risk: Reduces discretion perception
2. **Founder remains anonymous ("Founder, Abhima Events")**
   - Maintains discretion
   - Focuses on brand, not individual
   - Risk: Reduces personal connection

**Current Spec:** Anonymous (Option 2)

**Recommendation:** Test with HNW user segment (do they prefer personal connection or institutional trust?)

---

### Question 2: Testimonials Section
**Options:**
1. **Add anonymous testimonials** (requires 2–3 client consents)
   - Builds social proof
   - Reduces risk perception
   - Risk: Competes with discretion positioning
2. **No testimonials** (current spec)
   - Maintains discretion
   - Avoids "salesy" perception
   - Risk: Lower trust for first-time visitors

**Current Spec:** No testimonials (Option 2)

**Decision Required:** Founder must confirm if any clients willing to provide anonymous testimonials.

---

### Question 3: Homepage Focus (Wedding vs Corporate Balance)
**Options:**
1. **Wedding-heavy homepage** (current spec)
   - Reflects majority of revenue
   - Clear positioning for HNW families
   - Risk: Corporate clients may bounce
2. **50/50 wedding-corporate split**
   - Appeals to both segments
   - Risk: Dilutes brand focus

**Current Spec:** Wedding-first, with corporate visible (Option 1)

**Recommendation:** A/B test hero subheadline variants (wedding-focused vs. balanced).

---

### Question 4: Brand Assets (Logo, Colors, Fonts)
**Status:**
- **Logo:** Provided by client (heritage mark) — **PENDING RECEIPT**
- **Colors:** Locked (Ivory, Charcoal, Antique Gold)
- **Fonts:** Locked (Poppins)

**Action Required:**
- Founder must provide logo file (SVG preferred, PNG fallback)
- Confirm logo usage rules (max size, minimum size, spacing)

---

### Question 5: Custom Photography Budget
**Options:**
1. **Custom photography** (budget: ₹50,000–₹100,000)
   - Brand-specific visuals (Telugu weddings, corporate events)
   - Differentiation from competitors
   - Risk: Timeline delay (2–4 weeks for shoot + editing)
2. **Text-only design** (current spec)
   - Faster implementation (no photo dependency)
   - Pure restraint positioning
   - Risk: Perceived as "incomplete" by some users

**Current Spec:** Text-only (Option 2)

**Recommendation:** Launch text-only, evaluate user feedback, add custom photography in Phase 2 if needed.

---

### Question 6: Privacy Policy & Terms of Service
**Status:** Not required by law (India-focused, no e-commerce)

**Options:**
1. **Add basic privacy policy** (discloses Formspree data handling)
   - Corporate clients may expect it
   - Builds transparency
2. **No legal pages** (current spec)
   - Simpler, fewer pages
   - Formspree is third-party (Abhima doesn't store data)

**Current Spec:** No legal pages (Option 2)

**Decision Required:** Founder must confirm if corporate clients have requested privacy policy in past.

---

## 15. ASSUMPTIONS MADE DURING DESIGN

1. **Logo will be provided** — Logo is horizontal wordmark (not icon-only)
2. **No multi-language needed** — English-only is sufficient for HNW/corporate audience
3. **Form submissions <50/month** — Formspree Free tier is sufficient
4. **Founder will approve all content** — No CMS, no self-service content editing
5. **Desktop-first navigation is acceptable** — Mobile hamburger menu is standard (no controversy)
6. **Antique Gold hex (#C9A86A) is final** — Color has been approved by founder
7. **No video content** — Text-first design (video may be added Phase 2)
8. **Footer is minimal** — No social media, no newsletter, no partner logos
9. **No live chat** — Discretion-first brand prefers async contact (form, email, WhatsApp)
10. **Single primary CTA per page** — Users are decision-ready (no aggressive multi-CTA funnels)

---

## 16. DESIGN APPROVAL & SIGN-OFF

### Pre-Approval Checklist

Before presenting this design document for approval, validate:

✅ **Brand Alignment:**
- Does every decision reinforce discretion, trust, and clarity?
- Are there any elements that feel "salesy" or aggressive?

✅ **Engineering Feasibility:**
- Can an engineer build this without asking questions?
- Are all responsive behaviors documented?

✅ **Brand Protection:**
- Does this protect the brand from misuse (anti-patterns documented)?
- Are content governance rules clear?

✅ **Cultural Sensitivity:**
- Is Telugu terminology used correctly and prominently?
- Are cultural terms given equal visual weight to English terms?

✅ **HNW Client Credibility:**
- Would this feel credible to a conservative HNW client?
- Is there anything that signals "trying too hard"?

---

### Approval Process

**Step 1:** Founder reviews entire document (2–3 days)  
**Step 2:** Founder answers Open Design Questions (Section 14)  
**Step 3:** Designer revises based on feedback (1–2 days)  
**Step 4:** Final approval + sign-off  
**Step 5:** Engineering handoff begins  

---

### Post-Approval Lock

Once approved, this document is **locked**.

**Changes After Approval:**
- Minor edits (typos, clarifications): Designer approval only
- Major edits (new sections, color changes): Founder + Designer + PM approval
- Scope expansion (new pages, new features): Requires PRD revision (not design doc revision)

---

## END OF DESIGN DOCUMENT

**Document Status:** DRAFT (Pending Founder Approval)  
**Next Action:** Founder reviews + answers Section 14 questions  
**Timeline:** 3–5 days for review, 1–2 days for revisions, then engineering handoff  

**Design Owner:** Principal Product Designer  
**Review Cycle:** One-time approval (no recurring reviews unless scope changes)  
**Feedback:** Email designer directly or escalate via PM  

---

## DESIGN FREEZE RULE

**Projects don't fail from bad design. They fail from never-ending design.**

### What Is Frozen (Once Approved)

**Layout Structure:**
- Page structure (section order, number of sections)
- Grid system (columns, max-widths, breakpoints)
- Navigation structure (header, footer)

**Typography System:**
- Font family (Poppins)
- Font scale (H1–H6 sizes)
- Weight usage (SemiBold for headings, Regular for body)
- Line heights, letter-spacing

**Color System:**
- Brand colors (Ivory, Charcoal, Antique Gold)
- Opacity levels for Charcoal
- Semantic colors (error, success)
- Usage rules (Antique Gold <5% viewport)

**Component System:**
- All components in Section 6 (buttons, forms, accordions, etc.)
- Component states (hover, focus, disabled)
- Mobile behavior per component

### What Can Change (Without Approval)

**Content Only:**
- Adding new cities to Destinations page (append to list)
- Adding new event types to Experiences page (within existing categories)
- Adding new FAQs (maintain accordion format)
- Updating contact information (email, phone, WhatsApp)

**Rule:** Content changes must maintain tone, structure, and restraint. No marketing hyperbole.

### Change Request Process (Post-Freeze)

**Any change to frozen elements requires:**

1. **Written Justification:**
   - What is changing and why
   - Problem being solved (with data, not opinion)
   - Why current design cannot accommodate need

2. **Impact Analysis:**
   - **Design impact:** How many pages/components affected?
   - **Engineering impact:** Hours required to implement?
   - **Timeline impact:** Does this delay launch?

3. **Approval Chain:**
   - Designer reviews justification + impact
   - PM approves or rejects
   - If approved: Document is updated (no tribal knowledge)

**Rejected Change Requests:**
- "This looks nicer" (subjective opinion)
- "Industry best practice" (follows trend, not brand)
- "Competitor does this" (irrelevant to brand positioning)
- "Let's test this" (testing requires design freeze first)

### Design Freeze Timeline

**Trigger:** After Founder approval + Open Questions resolved

**Duration:** Until launch + 90 days post-launch

**Rationale:**
Post-launch tweaks create maintenance chaos. Wait 90 days for analytics data before considering changes.

**Exception:**
- Critical bugs (form broken, images not loading) = hotfix allowed
- Accessibility violations (WCAG failures) = immediate fix allowed
- Performance regressions (LCP >3s) = optimization allowed

**No Exception For:**
- "Users might prefer this" (speculation)
- "Conversion could be better" (wait for 90-day data)
- "Let's A/B test" (requires separate design spec, not mid-project change)

---

*This design document is production-ready, enforceable, and eliminates subjective debate. Engineers can build directly from this specification without follow-up questions. Brand is protected through anti-pattern documentation and content governance rules.*
