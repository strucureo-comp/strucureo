import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: {
        default: 'Strucureo | Custom Software & IT Services in UAE & India',
        template: '%s | Strucureo'
    },
    description: 'Strucureo builds custom software, AI chatbots, ERP systems, and startup MVPs for businesses in the UAE and India — delivered in days, not months. Also serving clients globally.',
    keywords: [
        'IT services company UAE',
        'custom software development India',
        'software agency Dubai',
        'startup MVP development Chennai',
        'AI chatbot development company UAE',
        'ERP systems India',
        'IT company Dubai',
        'software development company Bangalore'
    ],
    openGraph: {
        title: 'Strucureo | Fast IT Services & Custom Software',
        description: 'Strucureo helps startups and small businesses build websites, AI chatbots, ERP systems, and custom software delivered in days, not months.',
        url: 'https://www.strucureo.com',
        siteName: 'Strucureo',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://www.strucureo.com/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Strucureo IT Services'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Strucureo | Fast IT Services & Software Development',
        description: 'Websites, AI Chatbots, ERPs, and Custom Software delivered in days.',
        creator: '@strucureo',
        images: ['https://www.strucureo.com/opengraph-image.png']
    },
    alternates: {
        canonical: 'https://www.strucureo.com',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function Home() {
    return (
        <main className="bg-[#ffffff] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] overflow-x-hidden antialiased">
            <Hero />
            <Uniqueness />
            <RemoteOps />
            <VisualIntro />
            <Contact />
        </main>
    );
}
