import createNextIntlMiddleware from 'next-intl/middleware';

export default createNextIntlMiddleware({
    locales: ['en-US', 'en-AE', 'de-DE', 'ru-RU'],
    defaultLocale: 'en-US',
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
