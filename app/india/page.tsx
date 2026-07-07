import type { Metadata } from 'next';
import { ArrowRight, Building2, MapPin, Globe, CreditCard } from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';

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
    "name": "Strucureo India Services",
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
    title: 'Custom Software & IT Services in India | Strucureo',
    description: 'Strucureo builds custom software, AI chatbots, ERP systems, and startup MVPs for businesses in Chennai, Bangalore, Mumbai and across India — delivered in days, not months.',
    keywords: [
        'IT services company India',
        'software agency Chennai',
        'custom software development India',
        'startup MVP development Chennai',
        'software development company Bangalore',
        'ERP systems India'
    ],
    alternates: {
        canonical: `${SITE_URL}/india`,
    },
    openGraph: {
        title: 'Custom Software & IT Services in India | Strucureo',
        description: 'Elite software engineering for businesses across India.',
        url: `${SITE_URL}/india`,
        siteName: 'Strucureo',
        type: 'website',
    },
};

export default function IndiaPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(indiaSchema) }}
            />

            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a href="/" className="flex flex-col transition-opacity hover:opacity-50">
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">India</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href="/" className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a href="/services" className="transition-opacity hover:opacity-100">
                        Services
                    </a>
                </div>
            </nav>

            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24 border-b border-[#111111]/10">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#111111]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                            <MapPin className="h-3 w-3" />
                            <span>India</span>
                        </div>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Elite software engineering for India.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            We build custom software, AI chatbots, and startup MVPs for forward-thinking businesses in Chennai, Bangalore, and across India — delivered in days, not months.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-[#111111]/10 p-8">
                        <Building2 className="mb-6 h-8 w-8 opacity-40" />
                        <h3 className="mb-2 text-xl font-bold">Local Expertise</h3>
                        <p className="text-sm text-[#6E6E6E]">With leadership based in Chennai, we understand the local business environment and engineering standards.</p>
                    </div>
                    <div className="rounded-3xl border border-[#111111]/10 p-8">
                        <Globe className="mb-6 h-8 w-8 opacity-40" />
                        <h3 className="mb-2 text-xl font-bold">INR Pricing</h3>
                        <p className="text-sm text-[#6E6E6E]">Transparent, fixed-price contracts in Indian Rupees. No hidden fees or unexpected costs.</p>
                    </div>
                    <div className="rounded-3xl border border-[#111111]/10 p-8">
                        <CreditCard className="mb-6 h-8 w-8 opacity-40" />
                        <h3 className="mb-2 text-xl font-bold">Local Integrations</h3>
                        <p className="text-sm text-[#6E6E6E]">Deep experience connecting platforms to local payment gateways like Razorpay, Cashfree, and UPI.</p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 md:px-12 lg:px-24 bg-[#f9f9f9]">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                        India FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our Indian clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <section className="px-6 py-20 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white md:p-12 lg:p-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
                                Ready to build something great in India?
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
