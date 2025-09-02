import type { RequestHandler } from '@sveltejs/kit';

const allowedHosts = new Set([
    'assets.faceit-cdn.net',
    'distribution.faceit-cdn.net',
    'faceit-cdn.net'
]);

const isAllowedUrl = (urlStr: string) => {
    try {
        const u = new URL(urlStr);
        return u.protocol === 'https:' && Array.from(allowedHosts).some((host) => u.hostname === host || u.hostname.endsWith('.' + host));
    } catch {
        return false;
    }
};

const svgPlaceholder = (text: string) => {
    const initials = (() => {
        const trimmed = text.trim();
        if (!trimmed) return '?';
        const words = trimmed.split(/\s+/);
        if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
        return (words[0][0] + words[1][0]).toUpperCase();
    })();
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#000000ff"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" fill="url(#g)"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="96" fill="#e5e7eb" font-weight="700">${initials}</text>
</svg>`;
    return new Response(svg, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=86400'
        }
    });
};

export const GET: RequestHandler = async ({ url, fetch }) => {
    const remote = url.searchParams.get('url');
    const text = url.searchParams.get('text') ?? '';

    if (!remote || !isAllowedUrl(remote)) {
        return svgPlaceholder(text);
    }

    try {
        const res = await fetch(remote, { method: 'GET' });
        const ct = res.headers.get('content-type') ?? '';
        if (res.ok && ct.startsWith('image/')) {
            // Stream through the valid image
            return new Response(res.body, {
                status: 200,
                headers: {
                    'Content-Type': ct,
                    'Cache-Control': 'public, max-age=300'
                }
            });
        }
        // Not ok or not an image -> placeholder
        return svgPlaceholder(text);
    } catch {
        // Network error -> placeholder
        return svgPlaceholder(text);
    }
};
