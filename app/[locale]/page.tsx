import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { VisualIntro } from '@/components/sections/VisualIntro';
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
            default: 'Strucureo | Elite Remote Full-Stack Engineering',
            template: '%s | Strucureo'
        },
        description: 'Remote full-stack, cloud, AI engineering for US, UAE, EU enterprises. Speed. Quality. Performance. Security.',
        openGraph: {
            title: 'Strucureo | Elite Remote Engineering',
            description: 'Global remote engineering team serving US enterprises, UAE startups, EU scale-ups.',
            locale: locale,
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@strucureo'
        }
    };
}

export default function Home() {
    return (
        <main className="bg-[#ffffff] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] overflow-x-hidden antialiased">

            <Hero />
            <VisualIntro />
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
