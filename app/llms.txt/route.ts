const SITE_URL = 'https://www.strucureo.com';

const BODY = `# Strucureo

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
`;

export async function GET() {
    return new Response(BODY, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
