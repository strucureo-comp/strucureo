import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

export default function ServicesPage() {
    return (
        <Section>
            <AnimatedText
                text="Services"
                className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            />
            <div className="grid gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Full-Stack Engineering</h3>
                    <p className="text-lg text-gray-600">Comprehensive web application development.</p>
                </div>
            </div>
        </Section>
    );
}
