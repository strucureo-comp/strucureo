import { getAllPosts } from '@/lib/blog';
import { faqs } from '@/app/faq/page';

const SITE_URL = 'https://www.strucureo.com';

export async function GET() {
    const posts = getAllPosts();

    const faqSection = faqs
        .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
        .join('\n\n');

    const blogSection =
        posts.length === 0
            ? 'No published posts yet.'
            : posts
                .map(
                    (post) =>
                        `### ${post.title}\n\n${post.summary}\n\nRead more: ${SITE_URL}/blog/${post.slug}`
                )
                .join('\n\n');

    const body = `# Strucureo — Full Content

> Strucureo is an engineering studio in the UAE and India. Build delivers custom software in days, Labs researches AI agents and reusable modules, Industries turns proven work into industry products. Serving clients globally.

## Arms

- Strucureo Build (${SITE_URL}/services): custom software for clients — websites, AI chatbots, ERP systems and startup MVPs — delivered in days.
- Strucureo Labs (${SITE_URL}/labs): research and prototypes that turn repeated client problems into tested, reusable solutions.
- Strucureo Industries (${SITE_URL}/industries): ready-made products for specific industries, built from proven Labs work.

## Key pages

- Home: ${SITE_URL}/
- Blog: ${SITE_URL}/blog
- About: ${SITE_URL}/about
- FAQ: ${SITE_URL}/faq
- UAE: ${SITE_URL}/uae
- India: ${SITE_URL}/india
- RSS feed: ${SITE_URL}/blog/rss.xml

## Contact

- Website: ${SITE_URL}
- Email: support@strucureo.com
- Phone: +919344275731
- Portfolio: https://portfolio.strucureo.com
- LinkedIn: https://www.linkedin.com/company/strucureo/
- GitHub: https://github.com/strucureo-comp

## FAQ

${faqSection}

## Blog

${blogSection}
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
