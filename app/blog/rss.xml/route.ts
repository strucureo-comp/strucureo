import { getAllPosts } from '@/lib/blog';

const SITE_URL = 'https://www.strucureo.com';
const SITE_TITLE = 'Strucureo | Engineering Studio: Build, Labs & Industry Products in UAE & India';
const SITE_DESCRIPTION = 'Strucureo is an engineering studio in the UAE and India. Build delivers custom software, AI chatbots, ERP systems and startup MVPs in days. Labs researches AI agents and reusable modules. Industries turns proven work into industry products. Serving clients globally.';

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export async function GET() {
    const posts = getAllPosts();

    const items = posts
        .map(
            (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.summary)}</description>
      <author>Strucureo</author>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
        )
        .join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-US</language>
${items}
  </channel>
</rss>
`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
        },
    });
}
