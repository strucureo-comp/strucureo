import type { Metadata } from 'next';
import { Building2, Globe, CreditCard } from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

const indiaSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Strucureo",
  "alternateName": "Strucureo Software",
  "description": "Custom software development, AI chatbot development, and startup MVP builds for businesses in India — delivered in days, not months.",
  "url": "https://www.strucureo.com/india",
  "image": "https://www.strucureo.com/logo.png",
  "telephone": "<<FILL IN: India contact number>>",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "<<FILL IN: e.g. Chennai office/coworking address>>",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "<<FILL IN>>",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "<<FILL IN: e.g. 13.0827>>",
    "longitude": "<<FILL IN: e.g. 80.2707>>"
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Mumbai" }
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
    "name": "Strucureo India",
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
        question: 'Does Strucureo work with startups based in India?',
        answer: 'Yes. With core leadership located in Chennai, we understand the local business environment intimately. We partner with Indian startups, SMEs, and enterprises to build highly scalable software and operational systems.'
    },
    {
        question: 'What is the typical cost of custom software development in India?',
        answer: 'We provide focused, highly cost-effective builds tailored for the Indian market. Typical MVP builds start from $X (approx. INR X). You get a transparent roadmap and fixed pricing, eliminating cost overruns.'
    },
    {
        question: 'Can you integrate local payment gateways like Razorpay or UPI?',
        answer: 'Yes. We frequently integrate domestic payment gateways like Razorpay, Cashfree, and PayU, alongside direct UPI integrations and standard gateways like Stripe to ensure your platform meets local consumer expectations.'
    },
    {
        question: 'How fast can you build and launch a product?',
        answer: 'We prioritize speed without sacrificing quality. Most websites and operational MVPs are delivered in days to a few weeks, allowing Indian founders to go to market and test hypotheses rapidly.'
    }
];

export const metadata: Metadata = {
        title: 'Strucureo Build in India: Custom Software & AI',
    description: 'Strucureo, an engineering studio, builds custom software, AI chatbots, ERP systems and MVPs for Chennai, Bangalore, Mumbai and India — in days.',
    keywords: [
        'engineering studio India',
        'software studio Chennai',
        'custom software development India',
        'startup MVP development Chennai',
        'software development company Bangalore',
        'ERP systems India'
    ],
    alternates: {
        canonical: `${SITE_URL}/india`,
    },
    openGraph: {
    title: 'Strucureo Build in India: Custom Software & AI | Strucureo',
        description: 'Elite software engineering for businesses across India.',
        url: `${SITE_URL}/india`,
        siteName: 'Strucureo',
        type: 'website',
        images: [
            {
                url: 'https://www.strucureo.com/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Strucureo Engineering Studio'
            }
        ]
    },
};

export default function IndiaPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(indiaSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="India"
                title="Elite software engineering for India."
                intro="We build custom software, AI chatbots, and startup MVPs for forward-thinking businesses in Chennai, Bangalore, and across India — delivered in days, not months."
            />

            <Section>
                {[
                    {
                        icon: Building2,
                        title: 'Local Expertise',
                        desc: 'With leadership based in Chennai, we understand the local business environment and engineering standards.',
                    },
                    {
                        icon: Globe,
                        title: 'INR Pricing',
                        desc: 'Transparent, fixed-price contracts in Indian Rupees. No hidden fees or unexpected costs.',
                    },
                    {
                        icon: CreditCard,
                        title: 'Local Integrations',
                        desc: 'Deep experience connecting platforms to local payment gateways like Razorpay, Cashfree, and UPI.',
                    },
                ].map((feature, index) => (
                    <NumberedRow
                        key={feature.title}
                        index={index}
                        icon={<feature.icon className="w-12 h-12 text-[#111111]" />}
                        title={feature.title}
                        desc={feature.desc}
                    />
                ))}
            </Section>

            <section className="px-6 py-20 md:px-12 lg:px-24 bg-[#f9f9f9]">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        India FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our Indian clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
