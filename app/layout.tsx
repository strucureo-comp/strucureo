import { Inter } from 'next/font/google';
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
            </head>
            <body className={`${inter.className} bg-white text-black font-sans antialiased`}>
                <OrganizationSchema />
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