import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { Method } from '@/components/sections/Method';
import { Capabilities } from '@/components/sections/Capabilities';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: {
            default: 'Strucureo | Fast IT Services & Custom Software Development',
            template: '%s | Strucureo'
        },
        description: 'Strucureo is an IT services and product company helping startups and small businesses worldwide build websites, AI chatbots, ERP systems, and custom software — delivered in days, not months.',
        keywords: [
            'IT services company',
            'custom software development',
            'startup MVP development',
            'AI chatbot development',
            'ERP systems development',
            'website development services',
            'fast IT services',
            'software agency for small business',
            'remote engineering team',
            'product development studio'
        ],
        openGraph: {
            title: 'Strucureo | Fast IT Services & Custom Software',
            description: 'Strucureo helps startups and small businesses build websites, AI chatbots, ERP systems, and custom software delivered in days, not months.',
            url: `https://strucureo.com/${locale}`,
            siteName: 'Strucureo',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: 'https://strucureo.com/opengraph-image.png',
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
            <Uniqueness />
            <Method />
            <Capabilities />
            <RemoteOps />
            <VisualIntro />
            <Contact />
        </main>
    );
}
