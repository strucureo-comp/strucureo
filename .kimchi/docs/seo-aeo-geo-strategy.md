# Strucureo — Complete SEO, AEO & GEO Strategy Document

**Document Version:** 1.0  
**Date:** June 14, 2026  
**Prepared for:** Strucureo (strucureo.com)  
**Company Founded:** February 26, 2026

---

## Table of Contents

1. [Company Profile](#1-company-profile)
2. [Current Website Audit](#2-current-website-audit)
3. [SEO — Search Engine Optimization](#3-seo--search-engine-optimization)
4. [AEO — Answer Engine Optimization](#4-aeo--answer-engine-optimization)
5. [GEO — Generative Engine Optimization](#5-geo--generative-engine-optimization)
6. [Unified Implementation Roadmap](#6-unified-implementation-roadmap)
7. [Content Strategy for AI Engines](#7-content-strategy-for-ai-engines)
8. [llms.txt & AI Crawler Strategy](#8-llmstxt--ai-crawler-strategy)
9. [Schema Markup Reference](#9-schema-markup-reference)
10. [Measurement & KPIs](#10-measurement--kpis)
11. [Quick Reference Checklist](#11-quick-reference-checklist)

---

## 1. Company Profile

| Field | Details |
|-------|---------|
| **Company Name** | Strucureo |
| **Founded** | February 26, 2026 |
| **Website** | https://strucureo.com |
| **Team Size** | 3 core members |
| **Managing Director (MD)** | Nagaratinam S |
| **Chief Executive Officer (CEO)** | Balaviyas Viyas — [LinkedIn](https://www.linkedin.com/in/viyas56/) |
| **Chief Operating Officer (COO)** | Dharini Karthik — [LinkedIn](https://www.linkedin.com/in/dharini-karthik) |
| **Services** | Custom Software Development, AI Automation, Web Development, ERP Systems, Startup MVP Development, Cloud Support, Research |
| **Target Markets** | Global (USA, UAE, Germany, Russia, India) |
| **Tech Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS, Three.js, Supabase, Netlify |

### Brand Positioning for Search

**Primary Keywords:**
- Custom software development company
- AI automation services
- Web development agency
- Startup MVP development
- ERP system development
- Fast IT services
- Software agency for small business

**Secondary Keywords:**
- AI chatbot development
- Next.js development services
- Remote engineering team
- Product development studio
- Cloud deployment services
- CI/CD automation

---

## 2. Current Website Audit

### What's Already Implemented ✅

| Element | Status | Notes |
|---------|--------|-------|
| `robots.ts` | ✅ Configured | Allows all crawlers, links to sitemap |
| `sitemap.ts` | ✅ Dynamic | Generates for 4 locales (en-US, en-AE, de-DE, ru-RU) |
| Meta titles & descriptions | ✅ Implemented | Per-page metadata via `generateMetadata()` |
| OpenGraph tags | ✅ Implemented | Title, description, image, URL, locale |
| Twitter cards | ✅ Implemented | Summary large image with creator handle |
| Canonical URLs | ✅ Implemented | Per-locale canonical + hreflang alternates |
| hreflang tags | ✅ Implemented | 4 locales + x-default in `<head>` |
| Organization schema | ✅ JSON-LD | Static schema in `OrganizationSchema.tsx` |
| Keywords meta tag | ✅ Present | 10 targeted keywords on homepage |
| robots meta (index/follow) | ✅ Configured | `max-image-preview: large`, `max-snippet: -1` |
| GoogleBot directives | ✅ Configured | Full indexing allowed |

### What's Missing or Needs Improvement ⚠️

| Element | Priority | Impact |
|---------|----------|--------|
| FAQ schema markup | High | Critical for AEO; enables Featured Snippets |
| Service schema (Service type) | High | Required for service-related AI citations |
| Person schema for founders | High | E-E-A-T signal; builds team authority |
| HowTo schema for process | Medium | Enables step-by-step rich results |
| Article/BlogPost schema | Medium | For any blog content published |
| BreadcrumbList schema | Medium | Improves SERP appearance |
| FAQ page with structured data | High | Directly targets AEO answer boxes |
| `llms.txt` file | High | Core GEO signal for AI engines |
| `llms-full.txt` file | Medium | Corpus ingestion for AI engines |
| Data tables on service pages | Medium | 4.1x more AI citations (GEO research) |
| Author bylines on content | High | E-E-A-T signal for GEO |
| Review/rating schema | Low | Social proof signal |
| LocalBusiness schema | Low | If targeting local markets |

### Technical SEO Health

| Factor | Status | Recommendation |
|--------|--------|----------------|
| Core Web Vitals | Unknown | Run Lighthouse; target LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| Mobile friendliness | Likely good | Next.js + Tailwind; verify with Search Console |
| HTTPS | ✅ | Already on HTTPS |
| Structured data validity | Partial | Organization schema present; needs expansion |
| Internal linking | Weak | Add breadcrumb navigation and contextual links |
| Image optimization | Review | Ensure all images have `alt` text; use WebP |
| robots.txt accessibility | ✅ | Clean, allows all agents |

---

## 3. SEO — Search Engine Optimization

### 3.1 Foundation SEO (Already Partially Done)

**On-Page SEO Checklist:**

- [ ] **Title Tags:** Keep under 60 characters, front-load primary keyword
  - Current: `"Strucureo | Fast IT Services & Custom Software Development"` ✅
  - Services: `"Services | Strucureo"` → Improve to `"Custom Software & AI Services | Strucureo"`

- [ ] **Meta Descriptions:** 150-160 characters, include CTA
  - Current descriptions are good but could include more specific service terms and location signals

- [ ] **Header Structure (H1-H6):** Ensure each page has exactly one H1
  - Homepage H1: "Fast IT Services & Custom Software Development" ✅
  - Services H1: "Focused software builds for teams that need results fast." ✅

- [ ] **Keyword Placement:**
  - Primary keyword in H1, first paragraph, at least one H2, and image alt text
  - Related keywords naturally woven throughout content

### 3.2 Content Expansion for SEO

**Recommended New Pages:**

| Page | Target Keywords | Purpose |
|------|-----------------|---------|
| `/about` | "Strucureo team", "software company founded 2026" | Team intro, founding story, trust building |
| `/blog` | "custom software tips", "AI automation guide" | Content marketing, topical authority |
| `/case-studies` or `/portfolio` | "software project examples", "MVP case study" | Social proof, conversion optimization |
| `/pricing` | "software development pricing", "cost of custom software" | Commercial intent capture |
| `/contact` | "hire software developers", "IT services contact" | Lead generation |

**Blog Post Ideas (SEO-focused):**
1. "How to Build an MVP in 30 Days: A Startup Founder's Guide"
2. "Custom Software vs Off-the-Shelf: When to Choose What"
3. "AI Chatbots for Customer Support: Implementation Guide 2026"
4. "ERP System Development: Complete Guide for Small Businesses"
5. "Next.js vs React: Which to Choose for Your Web Project"
6. "Cloud Deployment Checklist for Startups"

### 3.3 Technical SEO Enhancements

```typescript
// Enhanced robots.ts — Allow AI crawlers explicitly
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
        ],
        sitemap: 'https://strucureo.com/sitemap.xml',
    };
}
```

### 3.4 Enhanced Sitemap

Expand the sitemap to include all pages as they are created:

```typescript
// sitemap.ts — Enhanced version
export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en-US', 'en-AE', 'de-DE', 'ru-RU'];
    const pages = ['', 'services', 'about', 'blog', 'contact', 'pricing'];
    
    return locales.flatMap((locale) =>
        pages.map((page) => ({
            url: `https://strucureo.com/${locale}${page ? `/${page}` : ''}`,
            lastModified: new Date('2026-02-26'), // Founding date or last update
            changeFrequency: page === '' ? 'weekly' : 'monthly',
            priority: page === '' ? 1 : 0.8,
        }))
    );
}
```

---

## 4. AEO — Answer Engine Optimization

### 4.1 What AEO Targets

AEO optimizes for:
- Google Featured Snippets (Position Zero)
- AI Overviews (formerly SGE)
- People Also Ask (PAA) boxes
- Voice assistant responses (Siri, Alexa, Google Assistant)

**Key Stat:** Google AI Overviews now appear in 35%+ of search queries; 80% of problem-solving queries trigger them.

### 4.2 AEO Content Structure Rules

**The "Direct Answer" Pattern:**

```
H2: What is [target question]?
→ First 40-60 words directly answer the question
→ Bold the key term in the first sentence
→ Follow with 2-3 sentences of elaboration
→ Then deeper context, examples, or data
```

**Content Formatting for AEO:**

| Content Type | Format | Example |
|-------------|--------|---------|
| Definitions | Term + 1-sentence definition | **Custom Software:** Purpose-built applications designed for specific business needs... |
| Lists | Numbered or bulleted under H2 | "Our services include: 1. Web Development 2. AI Chatbots..." |
| Comparisons | Table format | Custom vs Off-the-Shelf software comparison table |
| Steps | Numbered steps with H3 headings | "Step 1: Diagnose... Step 2: Design..." |
| FAQs | Question H2 + concise paragraph | See FAQ section below |

### 4.3 FAQ Schema Implementation

Create a dedicated FAQ page with structured data:

```typescript
// components/FAQSchema.tsx
const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What services does Strucureo offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Strucureo offers custom software development, AI chatbot development, web development, ERP system development, startup MVP builds, and cloud automation services. We deliver focused software solutions for startups and small businesses in days, not months."
            }
        },
        {
            "@type": "Question",
            "name": "How fast can Strucureo build a website or software product?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Strucureo specializes in rapid development. Most websites and MVPs are delivered in days to a few weeks, depending on scope. We follow a structured 4-step process: Diagnose, Design Options, Build Fast, and Launch & Support."
            }
        },
        {
            "@type": "Question",
            "name": "Who are the founders of Strucureo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Strucureo was founded on February 26, 2026, by a team of three: Nagaratinam S (Managing Director), Balaviyas Viyas (CEO), and Dharini Karthik (COO). The leadership team brings expertise in software engineering, business strategy, and operations."
            }
        },
        {
            "@type": "Question",
            "name": "Does Strucureo work with international clients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Strucureo serves clients globally, with a focus on the United States, United Arab Emirates, Germany, Russia, and India. We operate as a remote engineering studio and can work across time zones."
            }
        },
        {
            "@type": "Question",
            "name": "What technologies does Strucureo use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Strucureo builds with modern technologies including Next.js, React, TypeScript, Tailwind CSS, Three.js for 3D experiences, Supabase for backend services, and various AI/ML tools for automation and chatbot development."
            }
        },
        {
            "@type": "Question",
            "name": "How much does custom software development cost with Strucureo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pricing depends on project scope and complexity. Strucureo offers focused, cost-effective builds for startups and small businesses. Contact us with your requirements for a tailored quote and timeline."
            }
        }
    ]
};
```

### 4.4 Service Schema for AEO

```typescript
// Add to each service page or as a collection
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Software Development",
    "provider": {
        "@type": "Organization",
        "name": "Strucureo",
        "url": "https://strucureo.com"
    },
    "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development",
                    "description": "Conversion-focused marketing sites built with Next.js"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AI Chatbot Development",
                    "description": "Customer support bots and AI workflow automation"
                }
            }
        ]
    }
};
```

---

## 5. GEO — Generative Engine Optimization

### 5.1 What GEO Targets

GEO optimizes for AI-powered search engines:
- **ChatGPT** (200M+ weekly active users)
- **Perplexity AI** (780M+ queries/month)
- **Google Gemini**
- **Claude (Anthropic)**
- **Grok (X)**

**Key Insight:** Only 11% of domains are cited by both ChatGPT and Perplexity. Early movers have massive advantage.

### 5.2 GEO Ranking Factors (Research-Backed)

| Factor | Impact | Implementation |
|--------|--------|----------------|
| **Topical authority** | Critical | Cover your niche comprehensively across multiple pages |
| **E-E-A-T signals** | Critical | Author credentials, expert quotes, first-hand experience |
| **Structured data** | +28% citation rate | JSON-LD schema on every page |
| **Content freshness** | +3.2x citations | Update content within 30 days |
| **Data density** | +4.1x citations | Include data tables, statistics, metrics |
| **Entity clarity** | High | Name specific brands, tools, concepts — avoid vague pronouns |
| **llms.txt** | Emerging standard | Core signal for AI engine discovery |

### 5.3 E-E-A-T for Strucureo

**Experience:**
- Document real projects with specific outcomes
- Include "We built X for Y, resulting in Z" statements
- Show before/after metrics

**Expertise:**
- Founder LinkedIn profiles linked
- Team technical credentials displayed
- Technology stack expertise demonstrated through blog content

**Authoritativeness:**
- Active LinkedIn company page
- GitHub organization presence
- Guest posts on industry blogs
- Speaking engagements or webinars

**Trustworthiness:**
- Clear contact information
- Privacy policy and terms of service
- Client testimonials with real names (when permitted)
- Secure website (HTTPS)

### 5.4 Entity Building Strategy

Strucureo needs to become a recognized entity in AI training data:

1. **Wiki/Listings:** Get listed on software company directories (Clutch, GoodFirms, G2)
2. **Press Mentions:** Seek mentions in tech blogs and startup publications
3. **LinkedIn Activity:** Regular posts from founders about software topics
4. **GitHub Presence:** Open-source contributions, public repositories
5. **Consistent NAP:** Name, Address, Phone consistent across all platforms (even if remote)

### 5.5 Content Freshness Protocol

**To maximize GEO citations, implement:**

- Monthly blog post (minimum)
- Quarterly service page updates
- Weekly LinkedIn posts from founders
- Update "lastModified" in sitemap on changes

---

## 6. Unified Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

**Goal:** Fix technical base and add core schemas

| Task | File | Complexity |
|------|------|------------|
| Update Organization schema with founders | `components/OrganizationSchema.tsx` | Simple |
| Add Person schema for 3 founders | `components/PersonSchema.tsx` | Simple |
| Update robots.ts with AI crawler rules | `app/robots.ts` | Simple |
| Expand sitemap.ts with all pages | `app/sitemap.ts` | Simple |
| Create FAQ page with FAQPage schema | `app/[locale]/faq/page.tsx` | Medium |
| Add Service schema to services page | `app/[locale]/services/page.tsx` | Medium |
| Add breadcrumb navigation + BreadcrumbList schema | New component | Medium |

### Phase 2: AEO Layer (Week 3-4)

**Goal:** Capture answer boxes and AI Overviews

| Task | File | Complexity |
|------|------|------------|
| Restructure content with Q&A format | Multiple pages | Medium |
| Add HowTo schema to process section | `app/[locale]/services/page.tsx` | Medium |
| Create comparison tables for services vs competitors | Services page | Medium |
| Add speakable schema for voice assistants | Layout | Simple |
| Optimize H2s as questions across all pages | Multiple | Medium |

### Phase 3: GEO Layer (Week 5-6)

**Goal:** Get cited by ChatGPT, Perplexity, Gemini, Claude

| Task | File | Complexity |
|------|------|------------|
| Create `/llms.txt` | `public/llms.txt` | Simple |
| Create `/llms-full.txt` | `public/llms-full.txt` | Medium |
| Add data tables to service descriptions | Services page | Medium |
| Create `/about` page with team details | `app/[locale]/about/page.tsx` | Simple |
| Create first 3 blog posts | `app/[locale]/blog/` | Medium |
| Add author bylines to all content | Components | Simple |

### Phase 4: Content & Authority (Ongoing)

**Goal:** Build topical authority and maintain freshness

| Task | Frequency | Complexity |
|------|-----------|------------|
| Publish blog posts | 2-4x/month | Medium |
| Update service pages | Quarterly | Simple |
| Post on LinkedIn (founders) | Weekly | Simple |
| Seek directory listings | Monthly | Medium |
| Monitor AI citations | Monthly | Simple |
| Update llms.txt as pages change | On each update | Simple |

---

## 7. Content Strategy for AI Engines

### 7.1 Blog Content Pitch for GEO

AI engines cite content that is:
1. **Comprehensive** — covers a topic thoroughly
2. **Unique** — offers original insights or data
3. **Structured** — uses headers, lists, tables
4. **Recent** — published or updated within months
5. **Authoritative** — written by credentialed experts

**Recommended Blog Post Topics (GEO-optimized):**

1. **"The Complete Guide to Building an MVP in 2026: Timeline, Cost, and Technology Stack"**
   - Target: ChatGPT/Perplexity queries about MVP development
   - Structure: H2 for each phase, comparison tables, pricing ranges
   - Data: Industry benchmarks, typical timelines, cost ranges

2. **"AI Chatbot Development in 2026: Platforms, Costs, and Implementation Guide"**
   - Target: "how to build an AI chatbot" queries
   - Structure: Platform comparison table, step-by-step guide
   - Data: Cost per platform, accuracy metrics, setup time

3. **"Custom ERP vs Off-the-Shelf: A Data-Driven Comparison for Small Businesses"**
   - Target: "should I build or buy ERP" queries
   - Structure: Pros/cons table, cost comparison, use case matrix
   - Data: ROI statistics, implementation timelines

4. **"Next.js 16 vs Other Frameworks: Performance Benchmarks for SaaS Startups"**
   - Target: Developer audience, framework selection queries
   - Structure: Benchmark tables, use case recommendations
   - Data: Performance metrics, build times, bundle sizes

### 7.2 Content Template for AEO/GEO Combo

```markdown
# [Primary Keyword Question]

## Quick Answer (40-60 words)
[Direct, concise answer. Bold key terms.]

## What Is [Topic]?
[Definition + context. 2-3 paragraphs.]

## Why [Topic] Matters for [Audience]
[Relevance + benefits. Include data/statistics.]

## [Topic] vs [Alternative]: Key Differences
| Factor | [Your Service] | [Alternative] |
|--------|----------------|---------------|
| Cost | $X-$Y | $A-$B |
| Timeline | X weeks | Y weeks |
| Customization | Full | Limited |

## How [Topic] Works (Step-by-Step)
### Step 1: [Phase Name]
[Description...]

### Step 2: [Phase Name]
[Description...]

## FAQ
### [Question 1]?
[Concise answer...]

### [Question 2]?
[Concise answer...]

## Conclusion
[Summary + CTA]
```

---

## 8. llms.txt & AI Crawler Strategy

### 8.1 llms.txt Specification

**File location:** `https://strucureo.com/llms.txt`
**Format:** Markdown
**Encoding:** UTF-8
**MIME type:** `text/plain` or `text/markdown`

**Minimum required structure:**
1. One H1 with site name
2. Blockquote summary
3. Optional free prose paragraphs
4. H2 sections grouping links
5. Links in format: `- Title: Description`

### 8.2 llms.txt Content for Strucureo

```markdown
# Strucureo

> Strucureo is an IT services and software development company founded in February 2026. We help startups and small businesses worldwide build custom websites, AI chatbots, ERP systems, and software products — delivered in days, not months. Led by Nagaratinam S (MD), Balaviyas Viyas (CEO), and Dharini Karthik (COO), Strucureo operates as a remote engineering studio serving clients across the US, UAE, Germany, Russia, and India.

Strucureo specializes in rapid, focused software builds using modern technologies including Next.js, React, TypeScript, AI/ML tools, and cloud platforms. Our structured 4-step process — Diagnose, Design Options, Build Fast, Launch & Support — ensures practical solutions that reduce ambiguity and ship quickly.

## Services
- Website Development: Conversion-focused marketing sites, landing pages, and product pages built with Next.js for speed, SEO, and trust.
- AI Chatbot Development: Customer support bots, internal assistants, and AI workflows connected to your documents and escalation paths.
- ERP & Operations Systems: Custom dashboards and business systems for inventory, orders, roles, and reporting.
- Custom Software: Purpose-built tools for unique business problems, from internal portals to customer-facing platforms.
- Startup MVP Development: Lean product builds that help founders validate ideas quickly without overbuilding.
- Automation & Cloud Support: Cloud deployment, CI/CD setup, performance fixes, and monitoring for existing products.

## About
- Company: Strucureo was founded on February 26, 2026, by Nagaratinam S (Managing Director), Balaviyas Viyas (CEO, https://www.linkedin.com/in/viyas56/), and Dharini Karthik (COO, https://www.linkedin.com/in/dharini-karthik).
- Team: A remote engineering studio of 3 core members focused on full-stack development, AI solutions, and cloud platforms.
- Markets: United States, United Arab Emirates, Germany, Russia, India, and global.
- Process: 4-step structured approach — Diagnose, Design Options, Build Fast, Launch & Support.

## Blog & Resources
- Coming soon: Technical guides on software development, AI automation, and startup engineering.

## Contact
- Website: https://strucureo.com
- Portfolio: https://portfolio.strucureo.com
- LinkedIn: https://www.linkedin.com/company/strucureo/
- GitHub: https://github.com/strucureo-comp

## Optional
- Privacy Policy and Terms of Service available on request.
```

### 8.3 llms-full.txt

**File location:** `https://strucureo.com/llms-full.txt`
**Purpose:** Full content corpus for AI engines that prefer single-request ingestion

Include:
- Full markdown of all priority pages (home, services, about, key blog posts)
- URL headers marking each section
- Last updated timestamps

**Note:** For a small site like Strucureo currently is, `llms.txt` is priority #1. `llms-full.txt` becomes valuable as content grows beyond ~10 pages.

### 8.4 AI Crawler Allow List

Update `robots.ts` to explicitly allow major AI crawlers:

```
User-agent: GPTBot          → Allow: /
User-agent: ClaudeBot       → Allow: /
User-agent: PerplexityBot   → Allow: /
User-agent: OAI-SearchBot   → Allow: /
User-agent: Google-Extended → Allow: /
User-agent: BingBot         → Allow: /
User-agent: Googlebot       → Allow: /
```

---

## 9. Schema Markup Reference

### 9.1 Complete Organization Schema (Updated)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://strucureo.com/#organization",
      "name": "Strucureo",
      "alternateName": "Strucureo Software",
      "url": "https://strucureo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://strucureo.com/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "IT services and software development company helping startups and small businesses build custom websites, AI chatbots, ERP systems, and software products — delivered in days, not months.",
      "foundingDate": "2026-02-26",
      "sameAs": [
        "https://www.linkedin.com/company/strucureo/",
        "https://twitter.com/strucureo",
        "https://github.com/strucureo-comp"
      ],
      "founder": [
        { "@id": "https://strucureo.com/#nagaratinam" },
        { "@id": "https://strucureo.com/#balaviyas" },
        { "@id": "https://strucureo.com/#dharini" }
      ],
      "knowsAbout": [
        "Custom Software Development",
        "AI Chatbot Development",
        "Web Development",
        "ERP Systems",
        "Startup MVP Development",
        "Cloud Automation",
        "Next.js Development",
        "Full-Stack Engineering"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Global"
      }
    },
    {
      "@type": "Person",
      "@id": "https://strucureo.com/#nagaratinam",
      "name": "Nagaratinam S",
      "jobTitle": "Managing Director",
      "worksFor": { "@id": "https://strucureo.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://strucureo.com/#balaviyas",
      "name": "Balaviyas Viyas",
      "jobTitle": "Chief Executive Officer",
      "url": "https://www.linkedin.com/in/viyas56/",
      "worksFor": { "@id": "https://strucureo.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://strucureo.com/#dharini",
      "name": "Dharini Karthik",
      "jobTitle": "Chief Operating Officer",
      "url": "https://www.linkedin.com/in/dharini-karthik",
      "worksFor": { "@id": "https://strucureo.com/#organization" }
    }
  ]
}
```

### 9.2 WebSite Schema (for Search Box)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://strucureo.com",
  "name": "Strucureo",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://strucureo.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 9.3 HowTo Schema (for Process Section)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Strucureo Software Development Process",
  "description": "Our 4-step structured approach to building software products quickly and effectively.",
  "totalTime": "P2W",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Diagnose",
      "text": "We clarify the business problem, current bottlenecks, users, constraints, and success metrics.",
      "url": "https://strucureo.com/services#diagnose"
    },
    {
      "@type": "HowToStep",
      "name": "Design Options",
      "text": "You receive practical solution paths with tradeoffs around speed, cost, complexity, and long-term scale.",
      "url": "https://strucureo.com/services#design"
    },
    {
      "@type": "HowToStep",
      "name": "Build Fast",
      "text": "We ship in focused milestones, keep scope visible, and avoid unnecessary engineering ceremony.",
      "url": "https://strucureo.com/services#build"
    },
    {
      "@type": "HowToStep",
      "name": "Launch & Support",
      "text": "We help deploy, monitor, document, and improve the system after real users start using it.",
      "url": "https://strucureo.com/services#launch"
    }
  ]
}
```

---

## 10. Measurement & KPIs

### 10.1 SEO KPIs

| Metric | Tool | Target | Timeline |
|--------|------|--------|----------|
| Organic traffic | Google Analytics / Search Console | +50% in 6 months | 6 months |
| Keyword rankings (top 10) | Semrush/Ahrefs | 20+ keywords | 3 months |
| Core Web Vitals (all green) | PageSpeed Insights | LCP < 2.5s, CLS < 0.1 | 2 months |
| Indexed pages | Search Console | All pages indexed | 1 month |
| Click-through rate (CTR) | Search Console | >3% average | 3 months |

### 10.2 AEO KPIs

| Metric | Tool | Target | Timeline |
|--------|------|--------|----------|
| Featured Snippet captures | Manual/semrush | 5+ snippets | 3 months |
| People Also Ask appearances | Manual tracking | 10+ PAA boxes | 3 months |
| AI Overview citations | Manual search | Appear in 20% of relevant queries | 4 months |
| Rich result impressions | Search Console | 1000+/month | 3 months |

### 10.3 GEO KPIs

| Metric | Method | Target | Timeline |
|--------|--------|--------|----------|
| ChatGPT citations | Manual query testing | Cited in 5+ industry queries | 4 months |
| Perplexity citations | Manual query testing | Cited in 5+ industry queries | 4 months |
| Brand mention count | Brand monitoring tool | Track growth | Ongoing |
| Referral traffic from AI | Analytics UTM tracking | Measurable AI referral sessions | 6 months |

### 10.4 Audit Prompts for Self-Testing

**Test SEO:**
- "site:strucureo.com" — How many pages are indexed?
- Search "Strucureo custom software development" — What position?
- Run PageSpeed Insights on homepage — What's the score?

**Test AEO:**
- Search "What services does Strucureo offer?" — Is there a Featured Snippet?
- Search "fast IT services company" — Does Strucureo appear?
- Check Rich Results Test — Is Organization schema valid?

**Test GEO:**
- Ask ChatGPT: "What company offers fast custom software development for startups?"
- Ask Perplexity: "Who are the founders of Strucureo?"
- Ask Gemini: "What IT services does Strucureo provide?"
- Check if Strucureo is cited in any of the above

---

## 11. Quick Reference Checklist

### Immediate Actions (Do This Week)

- [ ] Update `OrganizationSchema.tsx` with founders, founding date, expanded `knowsAbout`
- [ ] Create `PersonSchema.tsx` for Nagaratinam, Balaviyas, Dharini with LinkedIn URLs
- [ ] Update `robots.ts` to explicitly allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- [ ] Create `/public/llms.txt` with company overview and service links
- [ ] Ensure all images have descriptive `alt` text
- [ ] Verify sitemap includes all current pages
- [ ] Run Google Rich Results Test on homepage

### Short-Term (Next 2-4 Weeks)

- [ ] Create `/[locale]/faq` page with FAQPage schema
- [ ] Add Service schema to services page
- [ ] Create `/[locale]/about` page with team bios and founder LinkedIn links
- [ ] Add BreadcrumbList schema and visual breadcrumbs
- [ ] Restructure content with question-based H2s
- [ ] Add direct answer paragraphs (40-60 words) under each question H2
- [ ] Create first 3 blog posts with Article schema
- [ ] Add data tables to service comparisons

### Medium-Term (Next 2-3 Months)

- [ ] Publish 6-8 blog posts covering core topics
- [ ] Get listed on 5+ software company directories (Clutch, GoodFirms, etc.)
- [ ] Implement HowTo schema for development process
- [ ] Create `llms-full.txt` as content grows
- [ ] Build backlink profile through guest posts and partnerships
- [ ] Set up Google Search Console and submit sitemap
- [ ] Set up Bing Webmaster Tools

### Ongoing (Monthly)

- [ ] Publish 2-4 blog posts
- [ ] Update existing content for freshness
- [ ] Post on LinkedIn from founder accounts
- [ ] Check AI engine citations manually
- [ ] Monitor Search Console for errors
- [ ] Update `llms.txt` when pages change
- [ ] Review and improve keyword rankings

---

## Appendix: Key Statistics & Sources

| Statistic | Source | Year |
|-----------|--------|------|
| 80% of Google searches end without a click | Bain & Company | 2026 |
| 30-40% decline in organic traffic from AI Overviews | WebProNews | 2025-2026 |
| AI-referred sessions surged 527% YoY | Industry analysis | 2025 |
| AI citation traffic converts at 4.4x traditional search | Industry analysis | 2025 |
| Only 11% of domains cited by both ChatGPT and Perplexity | Search Engine Land | 2026 |
| JSON-LD increases AI citations by 28% | Research analysis | 2026 |
| Content updated within 30 days gets 3.2x more citations | Research analysis | 2026 |
| Pages with data tables get 4.1x more AI citations | Research analysis | 2026 |
| ChatGPT has 200M+ weekly active users | OpenAI | 2025 |
| Perplexity processes 780M+ queries/month | Perplexity | 2026 |
| Google AI Overviews in 35%+ of search queries | Google | 2025 |

---

*End of Document — Strucureo SEO/AEO/GEO Strategy v1.0*
