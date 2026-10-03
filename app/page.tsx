import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: {
        default: 'Strucureo | Engineering Studio: Build, Labs & Industry Products in UAE & India',
        template: '%s | Strucureo'
    },
    description: 'Strucureo is an engineering studio in the UAE and India with three arms: Build for client software delivered in days, Labs for research into AI agents and reusable modules, and Industries for ready-made industry products. Also serving clients globally.',
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
        title: 'Strucureo | Engineering Studio: Build, Labs & Industries',
        description: 'Strucureo helps startups and small businesses build websites, AI chatbots, ERP systems, and custom software delivered in days — plus Labs research and ready-made industry products.',
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
        title: 'Strucureo | Engineering Studio: Build, Labs & Industries',
        description: 'Websites, AI Chatbots, ERPs, and custom software delivered in days — plus Labs research and industry products.',
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
