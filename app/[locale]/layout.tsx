import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import OrganizationSchema from '@/components/OrganizationSchema';
import SmoothScroll from '@/components/shared/SmoothScroll';
import { MobileOptimizer } from '@/components/shared/MobileOptimizer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    let messages;
    try {
        messages = (await import(`@/i18n/messages/${locale}.json`)).default;
    } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
        notFound();
    }

    return (
        <html lang={locale} className="scroll-smooth">
            <head>
                <link rel="canonical" href={`https://strucureo.com/${locale}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="alternate" hrefLang="en-US" href="https://strucureo.com/en-US" />
                <link rel="alternate" hrefLang="en-AE" href="https://strucureo.com/en-AE" />
                <link rel="alternate" hrefLang="de-DE" href="https://strucureo.com/de-DE" />
                <link rel="alternate" hrefLang="ru-RU" href="https://strucureo.com/ru-RU" />
                <link rel="alternate" hrefLang="x-default" href="https://strucureo.com/en-US" />
            </head>
            <body className={`${inter.className} bg-white text-black font-sans antialiased`}>
                <OrganizationSchema locale={locale} />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <SmoothScroll>
                        <MobileOptimizer />
                        {children}
                    </SmoothScroll>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
