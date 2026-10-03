import type { Metadata } from 'next';
import { Building2, Globe, CreditCard } from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

const uaeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Strucureo",
  "alternateName": "Strucureo Software",
  "description": "Custom software development, AI chatbot development, and startup MVP builds for businesses in the UAE — delivered in days, not months.",
  "url": "https://www.strucureo.com/uae",
  "image": "https://www.strucureo.com/logo.png",
  "telephone": "<<FILL IN: UAE contact number, e.g. +971-XX-XXX-XXXX>>",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "<<FILL IN: e.g. Business Bay / DIFC / coworking address>>",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "<<FILL IN if applicable>>",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "<<FILL IN: e.g. 25.2048>>",
    "longitude": "<<FILL IN: e.g. 55.2708>>"
  },
  "areaServed": [
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "City", "name": "Dubai" },
    { "@type": "City", "name": "Abu Dhabi" },
    { "@type": "City", "name": "Sharjah" }
  ],
  "founder": [
    { "@type": "Person", "name": "Nagaratinam S" }
  ],
  "foundingDate": "2026-02-26",
  "sameAs": [
    "https://www.linkedin.com/company/strucureo",
    "https://twitter.com/strucureo",
    "https://github.com/strucureo"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Strucureo UAE",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup MVP Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP & Operations Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } }
    ]
  }
};

const faqItems = [
    {
        question: 'Does Strucureo work with startups based in Dubai / UAE?',
        answer: 'Yes. We are specifically structured to support businesses across Dubai, Abu Dhabi, and the wider UAE. Whether you need a local corporate website, an MVP for a DIFC-based startup, or custom operations software, our team is equipped to deliver rapidly while accommodating your timezone.'
    },
    {
        question: 'What is the typical cost of custom software development in the UAE?',
        answer: 'We provide highly competitive pricing for the UAE market. While costs depend heavily on the project scope, typical MVP builds start from $X (approx. AED X). We operate transparently and provide a fixed-price roadmap before writing any code.'
    },
    {
        question: 'Can you integrate local payment gateways like PayTabs or Telr?',
        answer: 'Absolutely. We specialize in robust API integrations and have deep experience connecting platforms to MENA-specific payment processors like PayTabs, Telr, Checkout.com, and Stripe.'
    },
    {
        question: 'How fast can you build and launch a product?',
        answer: 'We prioritize speed without sacrificing quality. Most websites and operational MVPs are delivered in days to a few weeks, making us the ideal technical partner for fast-moving businesses in the UAE.'
    }
];

export const metadata: Metadata = {
        title: 'Custom Software, AI Chatbots & ERP in UAE | Strucureo',
    description: 'Strucureo builds custom software, AI chatbots, ERP systems, and startup MVPs for businesses in Dubai, Abu Dhabi, and across the UAE — delivered in days, not months.',
    keywords: [
        'engineering studio UAE',
        'software studio Dubai',
        'AI chatbot development company UAE',
        'engineering studio Dubai',
        'custom software development UAE',
        'startup MVP development Dubai'
    ],
    alternates: {
        canonical: `${SITE_URL}/uae`,
    },
    openGraph: {
    title: 'Custom Software, AI Chatbots & ERP in UAE | Strucureo',
        description: 'Elite software engineering for businesses across the UAE.',
        url: `${SITE_URL}/uae`,
        siteName: 'Strucureo',
        type: 'website',
    },
};

export default function UAEPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(uaeSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="United Arab Emirates"
                title="Elite software engineering for the UAE."
                intro="We build custom software, AI chatbots, and startup MVPs for forward-thinking businesses in Dubai, Abu Dhabi, and across the Emirates — delivered in days, not months."
            />

            <Section>
                {[
                    {
                        icon: Building2,
                        title: 'Local Expertise',
                        desc: 'Understanding the unique business landscape and compliance requirements of the UAE market.',
                    },
                    {
                        icon: Globe,
                        title: 'AED Pricing',
                        desc: 'Transparent, fixed-price contracts in your preferred currency with no hidden fees.',
                    },
                    {
                        icon: CreditCard,
                        title: 'MENA Integrations',
                        desc: 'Deep experience connecting platforms to local payment gateways and corporate systems.',
                    },
                ].map((feature, index) => (
                    <NumberedRow
                        key={feature.title}
                        index={index}
                        icon={feature.icon}
                        title={feature.title}
                        desc={feature.desc}
                    />
                ))}
            </Section>

            <section className="px-6 py-20 md:px-12 lg:px-24 bg-[#f9f9f9]">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        UAE FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our UAE clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
