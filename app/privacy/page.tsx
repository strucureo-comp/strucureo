import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Privacy Policy | Strucureo',
    description: 'Strucureo privacy policy: data protection, transparency, user rights, and how we handle your information when you use our engineering services in the UAE and India.',
    alternates: {
        canonical: 'https://www.strucureo.com/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <main className="bg-[#ffffff] text-[#111111] min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#111111] selection:text-[#ffffff]">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
                    <p className="text-xl md:text-2xl font-light opacity-60">
                        Transparency is core to our engineering philosophy. Here is how we handle your data.
                    </p>
                </header>

                <div className="space-y-12 text-lg leading-relaxed opacity-80">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">1. Information Collection</h2>
                        <p className="mb-4">
                            We collect information necessary to provide our elite engineering services. This includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#111111]/40">
                            <li>Business contact details (Name, Email, Phone) provided during inquiries.</li>
                            <li>Project specifications and technical documentation shared during consultations.</li>
                            <li>Usage data to optimize our digital platform performance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">2. Use of Information</h2>
                        <p>
                            We use your data strictly for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#111111]/40">
                            <li>Delivering and managing engineering projects.</li>
                            <li>Communicating project updates and technical milestones.</li>
                            <li>Internal analytics to improve our service delivery standards.</li>
                        </ul>
                        <p className="mt-4">
                            We do <strong>not</strong> sell or rent your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">3. Data Security</h2>
                        <p>
                            We implement industry-standard security measures, including encryption and strict access controls, to protect your proprietary information and personal data from unauthorized access or disclosure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">4. Your Rights</h2>
                        <p>
                            You have the right to request access, correction, or deletion of your personal data at any time. To exercise these rights, please contact us at <a href="mailto:support@strucureo.com" className="border-b border-black/20 hover:border-black transition-colors">support@strucureo.com</a>.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-[#111111]/10">
                        <p className="text-sm opacity-60">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </section>
                </div>
            </div>
        <section className="pt-8 border-t border-[#111111]/10 mt-8">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">FAQ</h2>
            <FAQAccordion items={[
                {{ question: "What does Strucureo Build offer?", answer: "Custom software, AI chatbots, ERP systems, and industry products built in days — not months." }},
                {{ question: "How fast can Strucureo build a website or software product?", answer: "Most projects ship in days: Discovery, Build, Launch. Complex products take weeks; simple MVPs ship in under a week." }},
                {{ question: "Who is Strucureo's founder?", answer: "Aathish, a full-stack engineer who started Strucureo to ship real products fast, with an engineering studio in the UAE and India." }},
                {{ question: "Does Strucureo work with international clients?", answer: "Yes — remote-first, timezone-flexible, English-speaking team across UAE and India, serving startups and small businesses worldwide." }},
                {{ question: "What technologies does Strucureo use?", answer: "Next.js, React, Node, PostgreSQL, AWS, Vercel, and AI/ML stacks tailored to each project." }},
                {{ question: "How much does custom software development cost with Strucureo?", answer: "Fixed-price scoping on Discovery; transparent pricing before Build starts. Startups and small businesses get predictable costs, no surprise invoices." }},
                {{ question: "What is the Strucureo development process?", answer: "Discovery, Build, Launch, then 48-hour monitoring. Each phase has a clear gate and a PR review before deploy." }},
                {{ question: "Can Strucureo help with an existing project that has problems?", answer: "Yes — we audit, fix, and modernize legacy codebases, from migrations to performance and SEO hardening." }},
                {{ question: "Does Strucureo work with startups based in Dubai / UAE?", answer: "Yes — local team in Dubai, remote-first, timezone-aligned, UAE-incorporated engagements supported." }},
                {{ question: "Can Strucureo build software for businesses in India with local payment gateway integration?", answer: "Yes — UPI, Razorpay, and Indian payment rails are first-class, with compliance and local testing." }},
                {{ question: "What is the typical cost of custom software development in UAE / India?", answer: "Fixed-price Discovery, then Build. Transparent quotes before work starts; no hourly surprises." }},
                {{ question: "What makes Strucureo different from other engineering studios?", answer: "We ship in days, not months. Labs researches AI agents, Build delivers custom software, Industries ships ready-made products — all under one roof." }},
            ]} />
        </section>
        </main>
    );
}
