import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ['', 'services', 'labs', 'industries', 'about', 'faq', 'legal', 'privacy', 'uae', 'india', 'blog'];

    const routes: MetadataRoute.Sitemap = pages.map((page) => ({
        url: `https://www.strucureo.com${page ? `/${page}` : ''}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
        priority: page === '' ? 1 : 0.8,
    }));

    for (const post of getAllPosts()) {
        routes.push({
            url: `https://www.strucureo.com/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        });
    }

    return routes;
}