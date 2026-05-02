import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en-US', 'en-AE', 'de-DE', 'ru-RU'];

    return locales.flatMap((locale) => [
        {
            url: `https://strucureo.com/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `https://strucureo.com/${locale}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }
    ]);
}
