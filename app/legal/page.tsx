import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Terms of Service | Strucureo',
    description: 'Strucureo terms of service: legal agreement for custom software, AI chatbots, ERP systems and industry products built by the UAE and India engineering studio.',
    alternates: {
        canonical: 'https://www.strucureo.com/legal',
    },
};

export default function LegalPage() {
    return (
        <main className="bg-[#ffffff] text-[#111111] min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#111111] selection:text-[#ffffff]">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Terms of Service</h1>
                    <p className="text-xl md:text-2xl font-light opacity-60">
                        Defining the standards of our engagement.
                    </p>
                </header>

                <div className="space-y-12 text-lg leading-relaxed opacity-80">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">1. Services</h2>
                        <p>
                            Strucureo provides elite remote engineering, software development, and technical consultation services. All services are governed by the specific Master Services Agreement (MSA) or Statement of Work (SOW) signed by both parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">2. Intellectual Property</h2>
                        <p>
                            Upon full payment, all custom code, designs, and intellectual property created specifically for the client shall become the sole property of the client, unless otherwise specified in the SOW. Strucureo retains rights to its pre-existing background technology and frameworks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">3. Confidentiality</h2>
                        <p>
                            We maintain strict confidentiality regarding all client projects, data, and trade secrets. We execute comprehensive Non-Disclosure Agreements (NDAs) prior to commencing any sensitive work.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">4. Limitation of Liability</h2>
                        <p>
                            Strucureo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">5. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of the jurisdiction specified in your contract with Strucureo, without regard to its conflict of law provisions.
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
