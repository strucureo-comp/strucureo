/**
 * lib/leads.ts — client-side lead-event tracking.
 *
 * Records every conversion action (form submit, WhatsApp, phone, email click)
 * with page and referrer, so the north-star metric — qualified inbound leads —
 * is measurable. No names, no message bodies, no email addresses are recorded:
 * only what is needed to count and attribute a lead. The visitor's own contact
 * details stay in the mail the form already sends.
 *
 * Events go to /api/lead, which appends to logs/leads.ndjson on the server.
 * Tracking is additive: if the POST fails, the action the visitor intended
 * still happens (the helpers never block or throw into the click handler).
 */

export type LeadSource = 'form' | 'whatsapp' | 'phone' | 'email' | 'chatbot';

export interface LeadEvent {
    ts: string;
    source: LeadSource;
    page: string;
    referrer: string;
}

export function trackLead(source: LeadSource): void {
    if (typeof window === 'undefined') return;
    const event: LeadEvent = {
        ts: new Date().toISOString(),
        source,
        page: window.location.pathname,
        referrer: document.referrer || '',
    };
    const body = JSON.stringify(event);
    // navigator.sendBeacon survives page unload, so a click that navigates
    // (tel:, mailto:, wa.me) still records before the browser leaves.
    if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/lead', new Blob([body], { type: 'application/json' }));
        return;
    }
    void fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
    }).catch(() => {
        // A failed tracking POST must never surface to the visitor or block
        // the contact action. Silently drop.
    });
}
