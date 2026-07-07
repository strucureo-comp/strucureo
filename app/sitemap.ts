import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ['', 'services', 'about', 'faq', 'legal', 'privacy', 'uae', 'india'];

    return pages.map((page) => ({
        url: `https://www.strucureo.com${page ? `/${page}` : ''}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
        priority: page === '' ? 1 : 0.8,
    }));
}