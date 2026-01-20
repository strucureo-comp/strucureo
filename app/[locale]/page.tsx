import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';

import { VisualManifesto } from '@/components/sections/VisualManifesto';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { Capabilities } from '@/components/sections/Capabilities';
import { Method } from '@/components/sections/Method';
import { PromiseSection } from '@/components/sections/PromiseSection';
import { Team } from '@/components/sections/Team';
import { Culture } from '@/components/sections/Culture';
import { Contact } from '@/components/sections/Contact';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: {
            default: 'Strucureo | Elite Software Development & IT Services Company',
            template: '%s | Strucureo'
        },
        description: 'Premium IT services and custom software development company. We are a remote engineering studio providing full-stack, cloud, and AI solutions for startups and scale-ups globally.',
        keywords: [
            'elite software development company',
            'premium IT services company',
            'remote engineering studio India',
            'full-stack development for startups',
            'custom web application development',
            'cloud platform development services',
            'AI solutions for startups',
            'IT services for scale-ups',
            'remote full-stack engineers',
            'software product development studio',
            'SaaS product development services',
            'enterprise software development India',
            'startup software development partner',
            'high-growth startup engineering team',
            'offshore development team for US companies',
            'top IT company',
            'best software agency'
        ],
        openGraph: {
            title: 'Strucureo | Elite Software Development & IT Services',
            description: 'Strucureo is a premium software product development studio. We build high-performance web apps, cloud platforms, and AI solutions for high-growth startups and enterprises.',
            url: `https://strucureo.com/${locale}`,
            siteName: 'Strucureo',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: 'https://strucureo.com/opengraph-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Strucureo Engineering Studio'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Strucureo | Premium IT Services & Software Development',
            description: 'Elite remote engineering studio for startups and scale-ups. Full-stack, Cloud, AI.',
            creator: '@strucureo',
            images: ['https://strucureo.com/opengraph-image.png']
        },
        alternates: {
            canonical: `https://strucureo.com/${locale}`,
            languages: {
                'en-US': 'https://strucureo.com/en-US',
                'en-AE': 'https://strucureo.com/en-AE',
                'de-DE': 'https://strucureo.com/de-DE',
                'ru-RU': 'https://strucureo.com/ru-RU'
            }
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
}

export default function Home() {
    return (
        <main className="bg-[#ffffff] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] overflow-x-hidden antialiased">

            <Hero />
            <VisualManifesto />
            <Uniqueness />
            <Capabilities />
            <Method />
            <PromiseSection />
            <Team />
            <Culture />
            <Contact />
        </main>
    );
}
