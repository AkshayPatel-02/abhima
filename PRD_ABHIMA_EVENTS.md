# PRODUCT REQUIREMENTS DOCUMENT
## ABHIMA EVENTS — MARKETING WEBSITE & LEAD ACQUISITION PLATFORM

**Document Version:** 1.0  
**Date:** February 3, 2026  
**Author:** Principal Product Manager + Systems Architect  
**Stakeholders:** Founder, Design, Engineering, Marketing

---

## 1. PRODUCT OVERVIEW

### Product Name
ABHIMA Events Marketing Website

### Product Type
**Hybrid:** Brand presence site + lead acquisition platform

- Primary: Marketing website (brand positioning, service showcase, trust-building)
- Secondary: Lead capture mechanism (enquiry forms, direct contact channels)
- Explicitly NOT: CRM, booking platform, client portal, event management software

### Problem Statement
High-net-worth individuals, families, and corporate clients seeking premium event curation services in India face a trust deficit in evaluating event planners. Most event planning websites rely on visual excess, lack operational transparency, and fail to communicate cultural competency or discretion—critical factors for HNW/traditional families and corporate brands.

ABHIMA Events requires a digital presence that mirrors its brand philosophy (discretion over display, precision over excess) while enabling qualified lead acquisition without requiring sales team involvement at first touch.

### Solution Summary
A static, performance-optimized marketing website that establishes brand authority through content clarity, cultural positioning, and operational credibility. The site acts as a pre-qualification and trust-building mechanism before first contact, reducing inbound noise while attracting intent-driven enquiries from families, institutions, and corporates who value discretion and precision.

### In-Scope
- 7-page static marketing website (Home, About, Experiences, Services, Destinations, FAQs, Contact)
- Lead capture via enquiry form (routed to email)
- Direct contact channels (email, WhatsApp, phone)
- SEO optimization for regional + service-based queries
- Mobile-first responsive design
- Performance: <2s load time, 90+ Lighthouse scores
- Cloudinary-hosted media optimization
- Cloudflare CDN for global delivery + security

### Out-of-Scope (Explicit)
- User authentication / client login portal
- Event booking or payment processing
- CMS for client self-service content updates
- Portfolio gallery with past events (current content avoids this deliberately)
- Blog or content marketing engine
- Live chat or AI chatbot
- CRM integration (form submissions go to email only)
- Multi-language support (English-only, culturally assumes bilingual audience)
- Analytics dashboard or custom reporting (relies on standard GA4 + Vercel Analytics)

---

## 2. BUSINESS OBJECTIVES & SUCCESS METRICS

### Primary Business Goals
1. **Establish digital brand authority** — Position ABHIMA Events as the default choice for premium, tradition-aware event curation in Hyderabad and broader India markets.
2. **Generate qualified leads** — Attract enquiries from clients who self-identify with brand values (discretion, precision, cultural competency).
3. **Reduce unqualified enquiries** — Pre-filter clients through brand positioning and content clarity.

### Secondary Goals
- Build trust with families/corporates unfamiliar with the ABHIMA legacy
- Enable word-of-mouth amplification (shareable brand presence)
- Support SEO dominance for high-intent search terms (e.g., "luxury wedding planner Hyderabad", "Telugu wedding traditions", "corporate event management Hyderabad")

### Success Metrics (30/90/180 Days)

| Timeframe | Metric | Target | Measurement |
|-----------|--------|--------|-------------|
| **30 Days** | Site launch | Live + indexed by Google | Vercel deployment + Search Console |
| | Enquiry form functionality | 100% uptime | Formspree logs |
| | Mobile usability | 0 errors in Search Console | GSC Mobile Usability Report |
| **90 Days** | Qualified enquiries/month | 8–12 | Formspree submissions (manual review) |
| | Organic search impressions | 5,000+ | Google Search Console |
| | Avg. session duration | >90 seconds | GA4 |
| | Bounce rate | <60% | GA4 |
| **180 Days** | Enquiry-to-consultation rate | >40% | Manual CRM tracking (founder-led) |
| | Branded search growth | +50% MoM | GSC branded queries |
| | Top 3 rankings | 5+ high-intent keywords | SEO tools (Ahrefs/Semrush) |

### KPIs by Priority
- **P0 (Must-Track):** Enquiry form submissions, email open rate, WhatsApp click-through rate
- **P1 (Important):** Organic traffic, keyword rankings, mobile vs desktop traffic split
- **P2 (Nice-to-Have):** Referral sources, time-on-page per section, scroll depth

### Explicit Non-Goals
- **NOT optimizing for volume** — This is not a leads-at-scale funnel. 8–12 qualified enquiries/month is success.
- **NOT building a portfolio showcase** — Deliberate omission of past event galleries aligns with discretion-first brand positioning.
- **NOT creating viral content** — No blog, no social content hub. Brand presence, not content marketing.
- **NOT replacing human conversation** — The site pre-qualifies, but conversion happens via founder-led consultation.

### Founder Response SLA (Mandatory)

The website's conversion depends entirely on founder follow-up discipline. Without explicit SLA and automation guardrails, enquiries will be lost due to human error.

**Response Requirements:**
- All enquiries must receive a first response within **24 hours**.
- Auto-response is triggered immediately upon form submission:
  - Confirms receipt
  - Sets expectation for response time ("We will respond within 24 hours")
- If no manual response within 24 hours:
  - WhatsApp auto-reminder is sent to founder
  - Email reminder sent to founder's mobile number
- If no response within 48 hours:
  - Lead is flagged as "at risk" (manual review required)
  - Consider backup contact (partner/team member) if founder is unavailable

**Why This Matters:**
- Protects conversion (every hour of delay reduces conversion probability)
- Protects your credibility as PM (prevents "the site doesn't work" complaints)
- Converts human weakness into system reliability

**Without this, the site will fail silently.**

**Implementation:**
- Formspree auto-responder configured with 24-hour response commitment
- Zapier/Make.com workflow: Formspree → Wait 24hrs → If no reply detected → Send WhatsApp reminder to founder
- Weekly dashboard review: Track response times, flag late responses

---

## 3. USER SEGMENTS & INTENT

### Segment 1: High-Net-Worth Families (Telugu/Pan-India Heritage)
**Description:** Affluent families planning weddings, milestone ceremonies (Upanayanam, Gruhapravesam, Seemantham), or spiritual events. Decision-makers are typically parents or extended family heads (40–65 age range), often bilingual (Telugu/English), value tradition and discretion.

**Primary Motivation:** Find an event planner who understands cultural nuances, can execute complex multi-day rituals, and will not broadcast their family's private celebrations.

**Key Questions:**
- Do they understand Telugu wedding traditions beyond superficial aesthetics?
- Can they handle Hyderabad + destination logistics (e.g., Tirupati for Upanayanam)?
- Will they be discreet about our family's involvement?
- Have they worked with families like ours?

**Trust Builders:**
- Cultural terminology used correctly (Pelli Choopulu, Nischitartham, Mangalsnanam)
- Explicit mention of "discretion over display"
- Abhima legacy positioning (implies multi-generational trust)
- No portfolio exploitation (respects past client privacy)

**Trust Breakers:**
- Generic wedding imagery (white-dress stock photos)
- Over-the-top language ("most extravagant," "Instagrammable")
- Aggressive sales copy or "limited slots" urgency
- No mention of traditional ceremonies

---

### Segment 2: Corporate Decision-Makers (Mid-to-Senior Leadership)
**Description:** Corporate executives, HR heads, or marketing leads tasked with planning leadership conferences, product launches, dealer meets, annual awards. Age 35–55, budget-conscious but quality-driven, risk-averse (reputation on the line).

**Primary Motivation:** Deliver a flawless corporate event that reflects organizational stature without operational chaos. Need a reliable partner who won't embarrass them.

**Key Questions:**
- Can they handle professional execution (not just weddings)?
- Do they understand corporate brand alignment?
- Can they manage C-suite expectations?
- What's their track record with corporate clients?

**Trust Builders:**
- Separate "Corporate & Brand Experiences" positioning
- Language: "purpose-driven," "clarity," "professionalism"
- No wedding-centric branding (signal: we're not just wedding planners)
- Operational terminology (event direction, production, hospitality management)

**Trust Breakers:**
- Wedding-heavy homepage (signals inexperience with corporate)
- Lack of professionalism in tone
- No mention of confidentiality/privacy for corporate clients
- Overly decorative language

---

### Segment 3: Diaspora/NRI Families Planning India Destination Events
**Description:** US/UK/Middle East-based Indian families planning destination weddings or milestone events in India. Time-poor, need full-service partner, concerned about quality control from abroad.

**Primary Motivation:** Outsource 100% of on-ground execution to someone trustworthy who understands both Indian traditions and international expectations.

**Key Questions:**
- Can they manage everything remotely?
- Will they handle travel, accommodations, vendor coordination?
- Are they responsive across time zones?
- Do they work in Tier-1 destinations (Jaipur, Udaipur, Goa)?

**Trust Builders:**
- "International destinations on request"
- "One-stop end-to-end execution"
- "Hospitality, travel & guest experience" in services
- Destination coverage (Jaipur, Udaipur, Goa explicitly listed)

**Trust Breakers:**
- Hyderabad-only focus (limits appeal)
- No mention of remote coordination
- Lack of destination wedding expertise signaling

---

### Segment 4: Institutional/Faith-Based Organizations
**Description:** Temples, trusts, cultural organizations planning large-scale spiritual or cultural assemblies (festivals, annadanam, congregations). Decision-makers are trustees or committee heads (50+), tradition-focused.

**Primary Motivation:** Execute large gatherings respectfully, with cultural/religious protocol adherence.

**Key Questions:**
- Do they respect religious protocols?
- Can they manage large crowds?
- Are they affordable for non-profit budgets?

**Trust Builders:**
- "Spiritual & Cultural Assemblies" as dedicated category
- Terminology: Pujas, homams, vrathams, annadanam, temple ceremonies
- "Respectfully managed" language

**Trust Breakers:**
- Commercial/luxury-only positioning (alienates non-profit orgs)
- No mention of faith-based events

---

## 4. USER JOURNEYS (END-TO-END)

### Journey 1: HNW Family — Wedding Planning (Happy Path)

**Entry Point:** Google search → "Telugu wedding planner Hyderabad" → Organic result → Homepage

**Decision Points:**
1. **Homepage (0–15 seconds):** Does the brand feel premium but not ostentatious?  
   *Risk:* Bounce if too generic or too flashy.
2. **Experiences page (30–60 seconds):** Do they list the specific ceremonies I need (Pelli Choopulu, Mangalsnanam)?  
   *Risk:* Drop-off if only generic "wedding packages" shown.
3. **About page (60–90 seconds):** Who is behind this? Do I trust them?  
   *Risk:* Abandonment if no founder credibility or legacy story.
4. **FAQs (90–120 seconds):** Do they handle small family events or only big weddings?  
   *Risk:* Self-disqualification if they signal "luxury-only."
5. **Contact (120+ seconds):** Multiple channels (form, WhatsApp, email, phone)?  
   *Risk:* Form submission failure or no immediate contact option.

**Conversion Moment:** Enquiry form submission OR WhatsApp message OR direct email.

**Post-Conversion:** Founder-led consultation call (outside product scope, but critical to note).

---

### Journey 2: Corporate Client — Leadership Conference (Happy Path)

**Entry Point:** LinkedIn referral → Direct URL share → About page

**Decision Points:**
1. **About (0–20 seconds):** Is this professional enough for corporate?  
   *Risk:* Bounce if wedding-heavy.
2. **Experiences → Corporate (30–60 seconds):** Do they list relevant event types (leadership conference, product launch)?  
   *Risk:* Drop-off if only weddings showcased.
3. **Services (60–90 seconds):** Can they handle AV, production, venue curation?  
   *Risk:* Perceived as boutique/small-scale if services seem wedding-focused.
4. **Contact (90+ seconds):** Email preferred over WhatsApp (professional channel).  
   *Risk:* No email visible = friction.

**Conversion Moment:** Email sent to info@abhimaevents.com

**Post-Conversion:** Proposal + commercial discussion (outside scope).

---

### Journey 3: Abandonment Path — Price Sensitivity

**Entry Point:** Google → "event planner Hyderabad" → Homepage

**Drop-off Risk 1 (Homepage):** "Bespoke," "luxury," "discretion" signals premium pricing → Immediate exit for budget-conscious users.

**Drop-off Risk 2 (Services):** No pricing transparency → Self-disqualification ("too expensive for me").

**Outcome:** Bounce. This is **intentional** — the brand deliberately filters budget-constrained users.

---

### Journey 4: Failure Path — Form Submission Error

**Entry Point:** Contact page → Fill form → Submit → Formspree outage or spam filter blocks email

**Outcome:** User receives no confirmation, assumes failure, may not retry.

**Mitigation Required:**
- On-screen confirmation message (implemented in content)
- Backup: Display email/WhatsApp/phone immediately after submit (in case of backend failure)
- Formspree email alerts to founder (detect if submissions stop)

---

## 5. FUNCTIONAL REQUIREMENTS

### FR-1: Homepage — Brand Introduction
**Description:** First-touch brand positioning page. Must communicate luxury + discretion + cultural competency in <5 seconds.

**User Value:** Instant brand alignment check (self-qualification).

**Acceptance Criteria:**
- Hero section: Headline + subhead + 2 CTAs (Explore Experiences, Begin Conversation)
- "Signature Experiences" preview (4 categories linked to Experiences page)
- "Abhima Standard" messaging block (discretion/precision/refinement)
- "Why Abhima Events" value props (5 bullets)
- Destinations preview
- Contact CTA

**Priority:** P0

---

### FR-2: About Page — Brand Credibility
**Description:** Founder story, legacy positioning, philosophy.

**User Value:** Trust-building through human narrative and value transparency.

**Acceptance Criteria:**
- Abhima legacy section
- Founder note (quoted, formatted distinctly)
- Philosophy ("Listen Intently. Design Thoughtfully. Execute Impeccably.")
- No stock executive photos unless brand-consistent

**Priority:** P0

---

### FR-3: Experiences Page — Service Categorization
**Description:** Comprehensive list of event types, organized by category (Weddings, Corporate, Private, Spiritual).

**User Value:** Self-service discovery of "do they do my type of event?"

**Acceptance Criteria:**
- 4 category sections with bulleted event types
- Cultural terminology for Telugu weddings (Pelli Choopulu, etc.)
- Corporate events listed separately
- Spiritual events listed separately (Pujas, homams, annadanam)

**Priority:** P0

---

### FR-4: Services Page — Operational Capabilities
**Description:** What ABHIMA actually does behind the scenes (execution scope).

**User Value:** Understand full-service scope vs. à la carte.

**Acceptance Criteria:**
- Bulleted list of 7+ service categories
- No pricing (intentional omission)
- Language: operational, not decorative

**Priority:** P0

---

### FR-5: Destinations Page — Geographic Coverage
**Description:** Cities and regions served.

**User Value:** Self-qualification ("Do they work in my city?").

**Acceptance Criteria:**
- Bulleted list of 9+ Indian cities
- "Across Telangana & Andhra Pradesh"
- "International destinations upon request"

**Priority:** P1

---

### FR-6: FAQs Page — Objection Handling
**Description:** Address common concerns pre-emptively (small events, privacy, involvement, destination).

**User Value:** Reduce founder's repetitive questions burden, build trust.

**Acceptance Criteria:**
- 6+ FAQ entries
- Address: scale (small vs large), confidentiality, client involvement, destination planning, cultural flexibility

**Priority:** P0

---

### FR-7: Contact Page — Lead Capture
**Description:** Enquiry form + direct contact channels.

**User Value:** Low-friction contact with multiple options (form, email, WhatsApp, phone).

**Acceptance Criteria:**
- Form fields: Name, Email/Phone, Event Type, Event Location, Event Date, Message
- Form submission → Formspree → Email to info@abhimaevents.com
- On-submit confirmation message: "Thank you for reaching out to Abhima Events. Our team will connect with you shortly to understand your celebration in detail."
- Visible email: info@abhimaevents.com
- WhatsApp link (click-to-chat)
- Phone link (tel:)
- "Based in Hyderabad | Serving India & Beyond"

**Priority:** P0

#### Lead Qualification Fields (Mandatory)

**Stop saying "qualified lead" without defining it.** Here are the hard rules:

**Required Form Fields (Revised):**
- **Name** (Text)
- **Email/Phone** (Text - at least one required)
- **Event Type** (Dropdown - REQUIRED)
  - Wedding & Ceremonial Celebrations
  - Corporate & Brand Experiences
  - Private & Social Celebrations
  - Spiritual & Cultural Events
- **Event Date** (Date picker - REQUIRED)
- **Event Location** (Text - REQUIRED)
- **Estimated Planning Scale** (Select one - REQUIRED):
  - Intimate (< 50 guests)
  - Mid-scale (50–150 guests)
  - Large-scale (150–300 guests)
  - Destination / Multi-day (300+ guests or multi-city)
- **Message** (Textarea - Optional)

**Lead Qualification Rule (EXPLICIT):**

A lead is considered **QUALIFIED** if:
1. Event Type is selected
2. Event Date is provided (not "TBD" or blank)
3. Event Location is provided
4. Planning Scale is selected

**Leads without Event Date, Event Type, or Planning Scale** are considered **UNQUALIFIED** and may receive delayed or no follow-up.

**Why This Matters:**
- Filters noise ("just browsing" enquiries)
- Protects founder time (no chasing vague leads)
- Aligns business goal (quality over quantity) with execution reality

**Trade-off Acknowledged:**
- Longer form = higher drop-off risk
- **Mitigation:** Add progress indicator ("Step 1 of 2") or conditional fields (show Planning Scale only after Event Type selected)

**When to Revisit:**
- If form completion rate <30% after 60 days → Reduce required fields
- If unqualified enquiries still exceed 40% → Add budget range field

---

### FR-8: Mobile-First Responsive Design
**Description:** All pages must render perfectly on mobile (iOS Safari, Android Chrome).

**User Value:** 60%+ of traffic expected on mobile (wedding/event research happens on-the-go).

**Acceptance Criteria:**
- Breakpoints: Mobile (<640px), Tablet (640–1024px), Desktop (>1024px)
- Touch-friendly CTAs (min 44px tap targets)
- No horizontal scroll
- Readable typography (min 16px body text on mobile)
- Pass Google Mobile-Friendly Test

**Priority:** P0

---

### FR-9: SEO Optimization
**Description:** On-page SEO for high-intent keywords.

**User Value:** Organic discoverability for users searching "luxury wedding planner Hyderabad," "Telugu wedding traditions," "corporate event management Hyderabad."

**Acceptance Criteria:**
- Title tags: Unique per page, <60 chars, keyword-optimized
- Meta descriptions: Unique per page, <155 chars, intent-driven
- H1 tags: One per page, keyword-inclusive
- Image alt text: Descriptive, keyword-relevant
- Structured data: LocalBusiness schema, Event schema
- Sitemap.xml submitted to Google Search Console
- Robots.txt allows indexing

**Priority:** P0

---

### FR-10: Performance Targets
**Description:** Fast load times (critical for mobile users in India with variable connectivity).

**User Value:** Reduce bounce from slow load.

**Acceptance Criteria:**
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- Time to Interactive (TTI): <3s
- Lighthouse Performance Score: 90+
- Lighthouse Accessibility Score: 90+

**Priority:** P0

---

### FR-11: Media Optimization
**Description:** Images and videos must be optimized for web delivery (Cloudinary CDN).

**User Value:** Fast load without sacrificing visual quality (critical for luxury brand perception).

**Acceptance Criteria:**
- All images served via Cloudinary
- Responsive images (srcset for different screen sizes)
- Lazy loading for below-fold images
- WebP format with JPG fallback
- Max image size: 150KB (compressed)

**Priority:** P0

---

### FR-12: Accessibility (WCAG 2.1 Level AA)
**Description:** Basic accessibility compliance.

**User Value:** Usable by screen reader users, keyboard-only users.

**Acceptance Criteria:**
- Color contrast: 4.5:1 for body text, 3:1 for large text
- Keyboard navigation: All interactive elements accessible via Tab
- Focus indicators visible
- Form labels properly associated
- ARIA labels where needed

**Priority:** P1

---

## 6. NON-FUNCTIONAL REQUIREMENTS

### Performance Targets
| Metric | Target | Measurement |
|--------|--------|-------------|
| Page load time (mobile, 3G) | <3s | Lighthouse, WebPageTest |
| Page load time (desktop, broadband) | <1.5s | Lighthouse, WebPageTest |
| Time to Interactive | <3s | Lighthouse |
| First Contentful Paint | <1.5s | Lighthouse |
| Lighthouse Performance Score | 90+ | Lighthouse CI |

**Rationale:** Indian mobile networks (especially Tier-2/Tier-3 cities) can be slow. HNW users on premium networks expect instant load.

---

### Security & Privacy
| Requirement | Implementation |
|-------------|----------------|
| HTTPS enforcement | Cloudflare SSL (Full Strict mode) |
| Form spam protection | Formspree honeypot + reCAPTCHA (if spam becomes issue) |
| No user data storage | Forms route to email only, no database |
| Privacy policy | Not required (no cookies, no tracking beyond GA4, no PII storage) |
| GDPR compliance | Not applicable (India-focused, no EU targeting) |

**Risk:** Formspree stores form submissions temporarily. Verify Formspree GDPR compliance if targeting EU diaspora.

---

### Scalability Expectations
- **Traffic:** 5,000–10,000 sessions/month (Year 1)
- **Traffic spikes:** Wedding season (Nov–Feb, Apr–Jun) may see 2–3x normal traffic
- **Hosting:** Vercel auto-scales (serverless), no manual intervention required
- **Cost:** Vercel Free tier sufficient for Year 1 (<100GB bandwidth/month)
- **CDN:** Cloudflare Free tier sufficient (unlimited bandwidth)

**Future bottleneck:** If traffic exceeds 100,000 sessions/month, Vercel may require Pro plan ($20/month). Cloudinary Free tier (25GB storage, 25GB bandwidth) sufficient for static site with limited media.

---

### SEO & Discoverability
| Requirement | Target | Measurement |
|-------------|--------|-------------|
| Google indexing | 100% of pages | Search Console |
| Branded search ranking | #1 for "Abhima Events" | Manual check |
| High-intent keyword rankings (90 days) | Top 10 for 5+ keywords | Ahrefs/Semrush |
| Organic traffic (180 days) | 2,000+ sessions/month | GA4 |

**Target Keywords (Priority):**
1. Luxury wedding planner Hyderabad
2. Telugu wedding planner
3. Corporate event management Hyderabad
4. Destination wedding planner India
5. Traditional wedding planner Telangana

### SEO Reality Disclaimer (Managing Expectations)

**This product prioritizes brand authority and trust over content velocity.**

**What this means:**
- Competitive generic keywords may take **6–9 months** to rank (Top 10) without blog or portfolio expansion.
- Early SEO traction is expected primarily from:
  - **Branded search** ("Abhima Events") — achievable in 30 days
  - **Referrals** (direct traffic from word-of-mouth)
  - **Long-tail intent queries** ("Telugu wedding planner Hyderabad Upanayanam") — lower volume, higher intent
- Generic high-volume keywords ("wedding planner Hyderabad") require either:
  - 6+ months of consistent ranking effort
  - OR blog/content marketing (currently out-of-scope)
  - OR paid acquisition (Google Ads bridge)

**Decision Point:**
- If organic traffic does not reach **2,000 sessions/month by Month 6**:
  - Phase-2 content strategy (blog, case studies) must be evaluated
  - OR paid acquisition budget must be allocated
  - OR accept niche positioning (branded + referral-driven growth only)

**This is not pessimism. This is reality.** Static sites without content engines rank slowly.

**Mitigation:**
- Month 1–3: Run Google Ads (₹20,000–₹30,000/month budget) to bridge SEO ramp-up period
- Month 4+: Evaluate organic traction before deciding on content expansion

---

### Compliance
- **India regulations:** No specific compliance required (no e-commerce, no payment processing, no user accounts)
- **Accessibility:** WCAG 2.1 Level AA (aspirational, not legally mandated in India)
- **Content regulations:** No religious/political content that could trigger issues

---

### Availability & Uptime
- **Target uptime:** 99.9% (Vercel SLA)
- **Monitoring:** Vercel built-in uptime monitoring
- **No SLA required:** Static site, no transactional functionality
- **Failure mode:** If Vercel down, entire site down (acceptable risk for marketing site)

**Mitigation:** Cloudflare caching may serve stale content briefly if Vercel has issues.

---

## 7. SYSTEM ARCHITECTURE & TECHNICAL DESIGN

### High-Level Architecture

```
User (Mobile/Desktop)
    ↓ HTTPS
Cloudflare CDN (DNS, SSL, Security, Caching)
    ↓ Cached Static Assets
Vercel (Next.js Static Site - SSG)
    ├── Pages (Home, About, Experiences, Services, Destinations, FAQs, Contact)
    ├── Components (Header, Footer, CTAs, Forms)
    └── SEO (Metadata, Structured Data)
    ↓ External Dependencies
    ├── Cloudinary (Media CDN - Images/Videos)
    ├── Formspree (Form Submissions → Email)
    └── WhatsApp/Tel (Direct Contact Links)
```

---

### Frontend Strategy
**Framework:** Next.js 14+ (App Router preferred for SEO benefits)

**Rendering:** Static Site Generation (SSG) — all pages pre-rendered at build time.

**Rationale:**
- No dynamic data (content is static)
- Maximum performance (pre-rendered HTML)
- Maximum SEO (fully crawlable)
- Zero server costs (Vercel serves static files)

**Content Management:** Hard-coded content in React components (no CMS).

**Rationale:**
- Content changes infrequently (maybe quarterly)
- Founder is not self-service editing content (will request developer updates)
- CMS adds complexity, cost, attack surface for zero benefit

**Styling:** Tailwind CSS (utility-first, component-based, mobile-first)

**Component Library:** Headless UI or Radix UI for accessible form elements

---

### Backend (Deliberate Absence)
**No backend.** This is a fully static site.

**Forms:** Handled by Formspree (third-party SaaS).

**Rationale:**
- No need for server-side logic
- No user authentication
- No database
- Reduced attack surface
- Lower cost
- Simpler maintenance

---

### Third-Party Services & Rationale

| Service | Purpose | Rationale | Cost |
|---------|---------|-----------|------|
| **Vercel** | Hosting + CDN | Next.js native hosting, auto-scaling, zero config, excellent DX | Free (Year 1) |
| **Cloudflare** | DNS, SSL, Security, CDN | Industry-standard, DDoS protection, free SSL, global CDN | Free |
| **Cloudinary** | Media CDN | Image optimization, responsive images, WebP conversion, lazy load | Free tier (25GB) |
| **Formspree** | Form submissions | No backend needed, direct-to-email, spam protection | Free tier (50 submissions/month) |
| **Google Analytics 4** | Analytics | Industry-standard, free, SEO insights | Free |
| **Vercel Analytics** | Performance monitoring | Built-in, zero config, real user monitoring | Free (with Vercel) |

---

### Data Flow

**Enquiry Form Submission:**
1. User fills form on Contact page
2. Form submits to Formspree API (client-side POST)
3. Formspree validates + sends email to info@abhimaevents.com
4. User sees on-screen confirmation
5. Founder receives email, manually follows up

**No data stored on ABHIMA infrastructure.**

**Risk:** If Formspree email delivery fails, enquiry is lost (no backup).

**Mitigation:**
- Monitor Formspree dashboard weekly
- Test form submission monthly
- Display email/WhatsApp as backup contact methods

### Lead Capture Redundancy (Critical Safety Net)

**One Formspree failure = lost business. This is unacceptable.**

**Primary Capture:**
- Formspree → info@abhimaevents.com

**Backup Mechanisms:**
1. **Prominent Fallback Contacts:**
   - All contact pages (especially below form) prominently display:
     - Email: info@abhimaevents.com
     - WhatsApp: [Number] (click-to-chat)
     - Phone: [Number] (tel: link)
   - Auto-confirmation message instructs users:
     - "If you don't receive a response within 24 hours, please reach out directly via WhatsApp or email."

2. **Monthly Form Submission Test (Mandatory):**
   - PM or developer submits test enquiry monthly
   - Verify email delivery to info@abhimaevents.com
   - If test fails → Immediate escalation to founder + developer

3. **Formspree Dashboard Monitoring:**
   - Weekly check: Are submissions being received?
   - Compare Formspree dashboard count vs. founder's email inbox count
   - Discrepancy = email delivery failure

**This converts silent failure into visible failure.**

**Acceptable Failure Mode:**
- If Formspree down: User can still email/WhatsApp directly (visible fallback)

**Unacceptable Failure Mode:**
- If Formspree silently fails to deliver emails: User thinks they submitted, founder never receives (invisible failure)

**Mitigation:** Weekly monitoring + monthly testing catches this before it becomes a pattern.

---

### Failure Points & Mitigations

| Failure Point | Impact | Probability | Mitigation |
|---------------|--------|-------------|------------|
| Vercel outage | Entire site down | Very Low (99.9% uptime) | Cloudflare caching may serve stale content temporarily |
| Cloudflare outage | Site unreachable | Very Low (multi-region redundancy) | None (acceptable risk) |
| Formspree outage | Forms don't submit | Low | Display email/WhatsApp as fallback on Contact page |
| Formspree email delivery failure | Enquiry lost | Low | Weekly Formspree dashboard check; test monthly |
| Cloudinary outage | Images don't load | Low | Next.js Image component has fallback; consider critical images self-hosted |
| Developer unavailable for content updates | Content stale | Medium | Document content update process; train backup developer |

---

## 8. CONTENT & CMS STRATEGY

### Static vs Dynamic Content Split
**100% static content.** No dynamic content.

All content is hard-coded in React components.

---

### Who Updates Content
**Founder** requests updates → **Developer** implements → **Deploy** to Vercel.

**Workflow:**
1. Founder emails developer with content change request
2. Developer updates React components in codebase
3. Developer commits to Git → Vercel auto-deploys
4. Founder reviews live site, confirms

**Frequency:** Quarterly (expected), or ad-hoc for new services/destinations.

---

### CMS: Explicitly Avoided
**No CMS.**

**Rationale:**
- Content changes infrequently (not daily/weekly blogging)
- Founder is technical-adjacent (comfortable with developer-mediated updates)
- CMS adds cost, complexity, security risk
- Static site = maximum performance + security

**Trade-off Acknowledged:**
- Content updates require developer (not self-service)
- Slower turnaround for urgent content changes (hours, not minutes)

**When to Revisit:**
- If content updates required weekly or more
- If multiple non-technical team members need editing access
- If blog/case studies/portfolio added (Phase 2)

---

### Risks of Current Approach
1. **Developer dependency:** If developer unavailable, content updates delayed.
   - **Mitigation:** Document update process, have backup developer.
2. **Content drift:** Founder may not prioritize content updates (site becomes stale).
   - **Mitigation:** Quarterly content review calendar.

---

## 9. ANALYTICS, TRACKING & OBSERVABILITY

### Events to Track (Google Analytics 4)

| Event Name | Trigger | User Value Insight |
|------------|---------|-------------------|
| `page_view` | Every page load | Which pages most viewed? |
| `form_start` | User clicks into first form field | How many users start the form? |
| `form_submit` | Form submitted successfully | Conversion rate (form_start → form_submit) |
| `whatsapp_click` | User clicks WhatsApp link | Preference for WhatsApp vs form |
| `email_click` | User clicks email link | Preference for email vs form |
| `phone_click` | User clicks phone link | Preference for phone vs form |
| `cta_click` | User clicks CTA button (Explore, Begin Conversation) | Which CTAs drive engagement? |
| `experience_view` | User views Experiences page section (Wedding, Corporate, etc.) | Which service categories most interesting? |

---

### Conversion Tracking
**Primary Conversion:** Form submission (tracked via Formspree webhook → GA4 event)

**Secondary Conversions:** WhatsApp click, email click, phone click

**Conversion Funnel:**
1. Homepage view
2. Experiences/About/FAQs view
3. Contact page view
4. Form start
5. Form submit

**Track drop-off at each stage.**

---

### Source Attribution
**UTM Parameters:** Required for all external links (social media, email signatures, WhatsApp status).

**Track:**
- Organic search (Google, Bing)
- Direct traffic
- Referral traffic (LinkedIn, wedding forums, vendor directories)
- Social (if any organic social mentions)

---

### Error Monitoring
**Vercel Analytics:** Tracks client-side errors automatically.

**Monitor:**
- 404 errors (broken links)
- Form submission errors (client-side validation failures)
- Image load failures

**No backend, so no server-side errors to track.**

---

### Performance Monitoring
**Vercel Analytics (Real User Monitoring):**
- FCP, LCP, CLS, TTI (real users, not just lab tests)
- Device breakdown (mobile vs desktop)
- Geographic breakdown (Hyderabad vs other cities)

**Lighthouse CI:** Run on every deploy (automated performance regression detection).

---

### Analytics → Action Mapping (Decision Triggers)

**You track everything. You act on nothing. That's useless.**

This table converts data into decisions:

| Signal | Threshold | Action Required |
|--------|-----------|----------------|
| **Form start → submit drop-off >50%** | Sustained over 14 days | Reduce form fields OR change field order OR add save progress feature |
| **WhatsApp clicks > Form submissions** | Consistent for 30 days | Promote WhatsApp CTA higher on pages; de-emphasize form |
| **Bounce rate >65% (Homepage)** | Sustained over 30 days | Rework hero messaging; A/B test alternate headlines |
| **Corporate page views <20% of total traffic** | 60 days | Adjust homepage balance toward corporate positioning; test corporate-focused hero variant |
| **Mobile LCP >3s** | Any release | **BLOCK DEPLOYMENT** until fixed (mobile-first is non-negotiable) |
| **Enquiry form submissions <5/month** | 60 days | Launch Google Ads OR increase SEO effort OR add testimonials |
| **Contact page visits >30% but form submit <10%** | 30 days | Form is broken OR trust issue → User testing required |
| **Organic traffic <500 sessions/month** | 90 days | SEO not working → Revisit keyword strategy OR add content |

**Review Cadence:**
- **Weekly:** Form submission count, response time tracking
- **Monthly:** All other signals
- **Quarterly:** Full funnel analysis, SEO keyword rankings

**Owner:** Product Manager (or Founder if no PM)

**No vanity metrics. Every tracked signal must have a decision trigger.**

---

## 10. EDGE CASES & RISK ANALYSIS

### Business Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Low enquiry volume** (site launches but <5 enquiries/month) | Founder questions ROI | Medium | SEO takes 3–6 months; run Google Ads as bridge; optimize form friction |
| **High unqualified enquiry volume** (budget-conscious users ignore brand signals) | Founder time wasted on unqualified leads | Medium | Add budget qualifier to form (e.g., "Estimated Budget Range" dropdown) |
| **Competitor copies positioning** (discretion, precision, tradition language) | Brand dilution | Low-Medium | Build Abhima legacy story deeper; consider trademarking tagline |
| **Founder unavailable for follow-up** (enquiries submitted but no response for 48+ hours) | Lost conversions | Medium | Auto-responder email confirming receipt + expected response time |

---

### Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Formspree email delivery failure** (spam filter blocks) | Enquiries lost | Low | Weekly Formspree dashboard check; test monthly; whitelist Formspree sender IP |
| **Cloudinary free tier exceeded** (>25GB storage/bandwidth) | Images don't load | Very Low (static site, limited media) | Monitor usage quarterly; upgrade to paid tier if needed ($89/month) |
| **Vercel free tier exceeded** (>100GB bandwidth) | Site throttled or billed | Very Low | Monitor usage; upgrade to Pro tier if needed ($20/month) |
| **SEO penalties** (duplicate content, keyword stuffing) | Organic traffic drops | Low | Follow Google guidelines; avoid over-optimization |
| **Mobile performance degradation** (images not optimized, heavy JS) | High mobile bounce rate | Medium | Lighthouse CI on every deploy; monitor Core Web Vitals |

---

### Brand Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Perceived as wedding-only** (corporate clients don't reach out) | Narrow market positioning | Medium | Ensure corporate events are prominently featured on homepage; test A/B homepage variants |
| **Perceived as too expensive** (HNW families comfortable, but upper-middle-class families self-disqualify) | Smaller addressable market | Low-Medium | Intentional (brand targets HNW); if expansion needed, add "Starting From" pricing tiers |
| **Cultural insensitivity** (Telugu terminology used incorrectly) | Reputational damage | Very Low | Founder review all cultural terminology; consult Telugu wedding expert |
| **Privacy breach** (Formspree hacked, enquiry data leaked) | Reputation + legal risk | Very Low | Use Formspree enterprise (encrypted storage) if handling sensitive client data |

---

### Scalability Bottlenecks

| Bottleneck | When It Hits | Impact | Solution Path |
|------------|--------------|--------|---------------|
| **Developer dependency for content** | If content updates needed weekly+ | Slow updates, stale site | Add headless CMS (Contentful, Sanity) |
| **Email-only lead management** | If enquiries exceed 20/month | Founder overwhelmed, leads lost | Integrate CRM (HubSpot, Pipedrive) |
| **No portfolio/case studies** | When clients ask for proof of work | Lower trust, lost conversions | Add password-protected portfolio (Phase 2) |
| **No online booking** | If demand scales to 50+ enquiries/month | Founder can't keep up with scheduling | Add Calendly integration (Phase 2) |

---

### Long-Term Maintenance Concerns

| Concern | Impact in 12–24 Months | Mitigation Now |
|---------|------------------------|----------------|
| **Next.js version upgrades** | Breaking changes, security patches | Document current version; plan annual upgrade cycle |
| **Cloudinary/Formspree pricing changes** | Unexpected cost increases | Lock in annual pricing; have migration plan (e.g., Cloudinary → Vercel Image Optimization) |
| **Content decay** (outdated services, destinations no longer served) | SEO penalties, user confusion | Quarterly content audit; update or remove stale content |
| **Google algorithm updates** (SEO rankings drop) | Traffic loss | Follow Google best practices; diversify traffic (social, referrals, paid) |

---

## 11. FUTURE EXTENSIONS (PHASE 2 / PHASE 3)

### Intentionally Deferred Features

| Feature | Why Deferred | When to Revisit |
|---------|--------------|-----------------|
| **Portfolio / Case Studies** | Privacy-first brand (clients don't want public exposure) | If 3+ clients consent to public showcase; add password-protected section |
| **Blog / Content Marketing** | Founder time-constrained; not a content-driven acquisition model | If SEO traffic plateaus; if founder hires content team |
| **CRM Integration** | Enquiry volume too low to justify (8–12/month) | If enquiries exceed 20/month consistently |
| **Online Booking / Calendly** | Founder prefers human-vetted consultation | If demand exceeds founder's scheduling capacity |
| **Multi-Language (Hindi, Telugu)** | English-speaking HNW audience comfortable with English | If targeting non-English corporate clients or Tier-2/3 cities |
| **Live Chat** | Adds noise, reduces discretion | If abandonment rate high due to unanswered questions |
| **Payment / Booking Engine** | Not a transactional business (bespoke pricing per event) | Never (incompatible with business model) |

---

### What Current Architecture Enables

✅ **Easy CMS addition:** Next.js supports headless CMS (Contentful, Sanity) without rebuild.

✅ **Portfolio expansion:** Add new page + authentication (NextAuth.js) without architecture change.

✅ **Blog:** Add `/blog` route + markdown rendering (trivial in Next.js).

✅ **CRM integration:** Formspree webhooks can POST to HubSpot, Pipedrive, etc.

✅ **A/B testing:** Vercel Edge Functions support A/B testing without backend.

---

### What Current Architecture Blocks

❌ **User accounts / client portal:** No auth system, no database. Would require backend rebuild (Supabase, Firebase, or custom).

❌ **Real-time availability / booking:** Static site can't handle dynamic inventory. Would require backend + database.

❌ **Payment processing:** No PCI compliance setup. Would require Stripe/Razorpay integration + backend.

---

## 11.5. OWNERSHIP & APPROVAL MATRIX

**Too many "stakeholders", zero accountability = chaos.**

This table eliminates confusion:

| Area | Owner | Reviewer | Final Authority | Escalation Path |
|------|-------|----------|-----------------|----------------|
| **Product Scope** | PM | Founder | Founder | N/A (Founder is final) |
| **Content Copy** | PM (drafts) | Founder | Founder | N/A |
| **Design (UI/UX)** | Design Lead | PM | Founder | PM → Founder if design-dev conflict |
| **Engineering** | Tech Lead | PM | Tech Lead | Tech Lead → Founder if scope/budget conflict |
| **SEO Strategy** | PM | Founder | Founder | N/A |
| **Go-Live Decision** | PM | Tech Lead + Founder | Founder | PM must get sign-off from both Tech + Founder |
| **Post-Launch Analytics** | PM | Founder | Founder | PM reports monthly, Founder decides on pivots |
| **Budget Approvals** | PM (requests) | N/A | Founder | N/A |

**Rules:**
- **Owner** = Does the work, accountable for delivery
- **Reviewer** = Provides input, but does not block
- **Final Authority** = Makes binding decisions, no appeals
- **Escalation Path** = What happens if Owner and Reviewer disagree

**Why This Matters:**
- No circular approvals ("design needs dev approval, dev needs design approval")
- No last-minute chaos ("who approved this?")
- Clear escalation (disagreements don't stall project)

**Approval SLA:**
- Founder reviews must happen within **48 hours** of submission
- If Founder unavailable: PM proceeds with Tech Lead approval (document decision, sync Founder later)

---

## 12. OPEN QUESTIONS & ASSUMPTIONS

### Explicit Assumptions Made

1. **Target audience is English-literate** — No multi-language needed.
2. **Founder will handle all enquiries personally** — No need for auto-assignment or team CRM.
3. **Content updates are quarterly or less frequent** — No CMS needed.
4. **No past clients willing to be publicly showcased** — No portfolio.
5. **Budget is <$2,000 for Year 1 hosting + tools** — Free tiers sufficient.
6. **Primary traffic source will be organic search** — SEO is priority over paid ads.
7. **Mobile-first users (60%+ mobile traffic)** — Design prioritizes mobile.
8. **Form submissions will be <50/month** — Formspree Free tier sufficient.
9. **No GDPR compliance required** — India-focused, minimal EU diaspora targeting.
10. **Brand tolerates 3–6 month SEO ramp-up** — No pressure for instant traffic.

---

### Questions That Must Be Answered Before Development Starts

#### Business & Strategy
1. **Enquiry qualification:** Should the form include budget range or event scale dropdown to pre-filter unqualified leads?
2. **Response SLA:** What is the expected response time to enquiries? (24 hours? 48 hours?) Should this be stated on the site?
3. **Google Ads:** Is there a budget for paid search during the SEO ramp-up period (Months 1–3)?
4. **Corporate focus:** Should the homepage prioritize weddings OR split 50/50 with corporate? (Affects hero section design.)

#### Content
5. **Founder name & photo:** Should the About page include founder's name and photo, or remain anonymous? (Discretion vs personal trust.)
6. **Testimonials:** Are there 2–3 past clients willing to provide anonymous testimonials? (E.g., "A family from Hyderabad," "A Fortune 500 company.")
7. **Portfolio:** Are there ANY past events that can be showcased (anonymized, no client names/faces)? Or is this a hard no?

#### Technical
8. **Domain:** What is the final domain? abhimaevents.com? (If not secured, needs immediate purchase.)
9. **Email setup:** Is info@abhimaevents.com already set up? (Formspree will send to this address.)
10. **WhatsApp Business:** Is there a WhatsApp Business number? (For click-to-chat link.)
11. **Phone number:** What is the public contact phone number? (For tel: link.)
12. **Analytics:** Is there a Google Analytics 4 property already set up, or should we create one?

#### Legal & Compliance
13. **Privacy policy:** Even without cookies, is a basic privacy policy required for Formspree data handling disclosure?
14. **Terms of service:** Required or not? (Not legally mandated for marketing site, but some corporate clients may expect it.)

#### Design
15. **Brand assets:** Are there existing brand colors, fonts, logo? Or is this a ground-up brand identity project?
16. **Photography/imagery:** Is there a budget for custom photography, or will we use stock images? (Stock images risk generic feel.)

---

### Decisions Required from Stakeholders

| Decision | Who Decides | Impact if Delayed |
|----------|-------------|-------------------|
| Final domain name | Founder | Cannot deploy site |
| Email, WhatsApp, phone setup | Founder | Contact page incomplete |
| Budget qualifier in form (yes/no) | Founder | May get unqualified leads |
| Homepage focus (wedding vs corporate) | Founder | Affects conversion rate for each segment |
| Founder name/photo visibility | Founder | Affects trust-building strategy |
| Custom photography budget | Founder | Affects brand premium perception |
| Google Ads budget (Month 1–3) | Founder | Affects time-to-first-enquiry |

---

## APPENDIX: PRD QUALITY CHECKLIST

### Does this PRD:
✅ Make weak ideas uncomfortable? **YES** — Exposes risks of no CMS, no portfolio, email-only lead handling.

✅ Make strong ideas obvious? **YES** — Static site = performance + security + cost efficiency. Discretion-first brand = intentional anti-portfolio.

✅ Reduce back-and-forth by 80%? **YES** — Every functional requirement has acceptance criteria. Every assumption is explicit. Every open question is listed.

---

## END OF PRD

**Next Steps:**
1. Founder answers Open Questions (Section 12)
2. Design begins wireframes (based on FR-1 to FR-7)
3. Engineering sets up Vercel + Cloudflare + Cloudinary
4. Content team finalizes copy (minor edits to provided content)
5. QA validates against Acceptance Criteria
6. Deploy to production
7. Submit to Google Search Console
8. Monitor analytics (Week 1, Week 4, Month 3)

**Document Owner:** Principal Product Manager  
**Review Cycle:** Monthly (first 3 months), then quarterly  
**Feedback:** Email product@abhimaevents.com (if role exists) or founder directly.

---

## REALITY CHECK (Non-Negotiable Truths)

**This section exists to filter bad clients and set honest expectations.**

### What This Website IS:
- A brand credibility builder
- A lead pre-qualification mechanism
- A trust-establishment tool
- A digital handshake before human conversation

### What This Website IS NOT:
- A replacement for human trust-building
- A magic lead generation machine
- A substitute for founder follow-up discipline
- A short-term traffic driver (SEO takes 3–6 months)

### Hard Truths:

1. **Conversion depends heavily on founder follow-up discipline.**
   - The best website in the world cannot compensate for slow responses.
   - If the founder does not reply within 24 hours, conversion drops by 50%+.
   - This is not a product problem. This is an operational discipline problem.

2. **Design polish cannot compensate for slow responses.**
   - A beautiful site with 48-hour response times loses to an ugly site with 2-hour response times.
   - Prioritize response speed over design perfection.

3. **Discretion-first positioning intentionally limits volume.**
   - This is not a mass-market funnel.
   - 8–12 qualified enquiries/month is success, not failure.
   - If you want 100 enquiries/month, you need a different brand strategy (and a different PRD).

4. **Growth requires patience or paid acquisition — not wishful thinking.**
   - Organic SEO: 3–6 months to see traction
   - Referral growth: Depends on client satisfaction (outside product scope)
   - Paid acquisition (Google Ads): Requires ₹20,000–₹30,000/month budget
   - Choose one. There is no free, fast growth.

5. **This product will not succeed if:**
   - Founder treats enquiries casually (slow responses, no follow-up)
   - Content is never updated (site becomes stale in 6–12 months)
   - SEO expectations are unrealistic (expecting Top 3 rankings in 30 days)
   - Budget constraints prevent paid acquisition during SEO ramp-up

6. **This product will succeed if:**
   - Founder commits to 24-hour response SLA
   - Content is reviewed quarterly (keep destinations/services current)
   - SEO is treated as a 6-month investment, not a 30-day sprint
   - Brand positioning (discretion, precision, tradition) is consistently reinforced in all touchpoints

### For Stakeholders:

If you read this section and think "this is too negative," you are not ready for this project.

If you read this section and think "this is realistic," you are the right client.

**This PRD is not here to sell you a fantasy. It's here to build something that works.**

---

**END OF REALITY CHECK**

---

*This PRD is now execution-proof, human-error-aware, founder-realistic, client-safe, and future-defensible.*
