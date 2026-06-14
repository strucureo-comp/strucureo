import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en-US', 'en-AE', 'de-DE', 'ru-RU'];
    const pages = ['', 'services', 'about', 'faq', 'blog'];

    return locales.flatMap((locale) =>
        pages.map((page) => ({
            url: `https://strucureo.com/${locale}${page ? `/${page}` : ''}`,
            lastModified: new Date('2026-02-26'),
            changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
            priority: page === '' ? 1 : 0.8,
        }))
    );
}