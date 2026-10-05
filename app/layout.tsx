import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import OrganizationSchema from '@/components/OrganizationSchema';
import SmoothScroll from '@/components/shared/SmoothScroll';
import { MobileOptimizer } from '@/components/shared/MobileOptimizer';
import { ScrollHaptic } from '@/components/shared/ScrollHaptic';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    metadataBase: new URL('https://www.strucureo.com'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <noscript>
                    <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important;filter:none!important;}.opacity-20{opacity:1!important;}.blur-sm{filter:none!important;}`}</style>
                </noscript>
            </head>
            <body className={`${inter.className} bg-white text-black font-sans antialiased`}>
                <OrganizationSchema />
                <Analytics />
                <SpeedInsights />
                <SmoothScroll>
                    <MobileOptimizer />
                    <ScrollHaptic />
                    {children}
                    <Toaster />
                </SmoothScroll>
            </body>
        </html>
    );
}