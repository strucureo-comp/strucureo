import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Strucureo',
    description: 'Terms of Service and Legal Agreement for Strucureo.',
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
        </main>
    );
}
