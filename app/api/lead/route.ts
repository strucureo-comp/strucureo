import { NextResponse } from 'next/server';

/**
 * /api/lead — lead-event collector.
 *
 * Vercel's filesystem is read-only at runtime, so events cannot be appended to
 * a local file there. The route therefore validates the event and delivers it
 * to a durable sink when one is configured:
 *
 *  1. LEAD_WEBHOOK_URL — when set in the environment, receives the event as
 *     JSON. That is the production sink: the owner (or the agent's own
 *     collector) can point it anywhere durable.
 *  2. With no webhook, the event is logged to the function log (visible in
 *     Vercel's dashboard) and acknowledged. The form's own email
 *     (app/actions.ts) remains the lead of record either way.
 *
 * Only timestamp, source, page and referrer are recorded — never the visitor's
 * name, email or message, which stay in the mail the form sends.
 */

const VALID_SOURCES = new Set(['form', 'whatsapp', 'phone', 'email', 'chatbot']);

export async function POST(request: Request): Promise<NextResponse> {
    let source: unknown;
    let page: unknown;
    let referrer: unknown;
    try {
        const body = await request.json();
        source = body?.source;
        page = body?.page;
        referrer = body?.referrer;
    } catch {
        return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 });
    }

    if (typeof source !== 'string' || !VALID_SOURCES.has(source)) {
        return NextResponse.json({ ok: false, error: 'invalid source' }, { status: 400 });
    }

    const event = {
        ts: new Date().toISOString(),
        source,
        page: typeof page === 'string' ? page.slice(0, 200) : '',
        referrer: typeof referrer === 'string' ? referrer.slice(0, 500) : '',
    };

    // Optional durable sink. The URL is never logged — when it carries a token
    // it is a secret.
    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
        try {
            const res = await fetch(webhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event),
            });
            return NextResponse.json({ ok: true, delivered: res.ok });
        } catch (err) {
            console.error('lead webhook delivery failed:', err);
            // Still 200: a tracking failure must not break the visitor's action.
            return NextResponse.json({ ok: true, delivered: false });
        }
    }

    // No webhook configured: acknowledged and logged, not durably stored.
    console.log('lead event (no LEAD_WEBHOOK_URL configured):', JSON.stringify(event));
    return NextResponse.json({ ok: true, stored: false });
}
