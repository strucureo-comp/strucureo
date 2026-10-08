import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Sectors } from '@/components/sections/Sectors';
import { SectorFlow } from '@/components/sections/SectorFlow';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: {
        default: 'Strucureo: Custom Software & MVPs in Days | UAE & India',
        template: '%s | Strucureo'
    },
    description: 'Strucureo builds websites, AI chatbots, ERP systems & MVPs in days for UAE & India startups. Fixed scope, one contact, support after launch.',
    keywords: [
        'engineering studio UAE',
        'custom software development India',
        'software studio Dubai',
        'startup MVP development Chennai',
        'AI chatbot development UAE',
        'ERP development India',
        'engineering studio Dubai',
        'software development Bangalore'
    ],
    openGraph: {
        title: 'Strucureo: Custom Software & MVPs in Days | UAE & India',
        description: 'Websites, AI chatbots, ERP systems & startup MVPs delivered in days for UAE & India startups. Fixed scope, one contact, support after launch.',
        url: 'https://www.strucureo.com',
        siteName: 'Strucureo',
        locale: 'en_US',
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
    twitter: {
        card: 'summary_large_image',
        title: 'Strucureo: Custom Software & MVPs in Days | UAE & India',
        description: 'Websites, AI chatbots, ERP & MVPs delivered in days for UAE & India. Fixed scope, one contact, support after launch.',
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
            <Sectors />
            <SectorFlow />
            <Uniqueness />
            <RemoteOps />
            <VisualIntro />
            <Contact />
        </main>
    );
}
