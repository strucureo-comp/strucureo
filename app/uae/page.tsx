import type { Metadata } from 'next';
import { ArrowRight, Building2, MapPin, Globe, CreditCard } from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';

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

            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a href="/" className="flex flex-col transition-opacity hover:opacity-50">
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">UAE</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href="/" className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a href="/services" className="transition-opacity hover:opacity-100">
                        Build
                    </a>
                </div>
            </nav>

            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24 border-b border-[#111111]/10">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#111111]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                            <MapPin className="h-3 w-3" />
                            <span>United Arab Emirates</span>
                        </div>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Elite software engineering for the UAE.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            We build custom software, AI chatbots, and startup MVPs for forward-thinking businesses in Dubai, Abu Dhabi, and across the Emirates — delivered in days, not months.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-[#111111]/10 p-8">
                        <Building2 className="mb-6 h-8 w-8 opacity-40" />
                        <h3 className="mb-2 text-xl font-bold">Local Expertise</h3>
                        <p className="text-sm text-[#6E6E6E]">Understanding the unique business landscape and compliance requirements of the UAE market.</p>
                    </div>
                    <div className="rounded-3xl border border-[#111111]/10 p-8">
                        <Globe className="mb-6 h-8 w-8 opacity-40" />
                        <h3 className="mb-2 text-xl font-bold">AED Pricing</h3>
                        <p className="text-sm text-[#6E6E6E]">Transparent, fixed-price contracts in your preferred currency with no hidden fees.</p>
                    </div>
                    <div className="rounded-3xl border border-[#111111]/10 p-8">
                        <CreditCard className="mb-6 h-8 w-8 opacity-40" />
                        <h3 className="mb-2 text-xl font-bold">MENA Integrations</h3>
                        <p className="text-sm text-[#6E6E6E]">Deep experience connecting platforms to local payment gateways and corporate systems.</p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 md:px-12 lg:px-24 bg-[#f9f9f9]">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                        UAE FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our UAE clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <section className="px-6 py-20 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white md:p-12 lg:p-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
                                Ready to build something great in the UAE?
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="mb-8 leading-relaxed text-white/60">
                                Contact us directly to discuss your project requirements and get a technical roadmap.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                            >
                                Start your project
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
