/**
 * Cloudflare Pages Function — password gate for the internal staff area.
 *
 * Protects the Staff Resources page AND the staff PDF downloads server-side,
 * so the files cannot be reached directly without the password. Uses HTTP
 * Basic Auth: the browser shows a login dialog. The username can be anything;
 * only the password is checked.
 *
 * This runs only on Cloudflare Pages (ignored by `astro dev` / `astro build`).
 * It is picked up automatically from the project-root `functions/` directory.
 */

const STAFF_PASSWORD = 'ocean2520';
const REALM = 'Ocean Endodontics — Staff';

function isProtected(pathname) {
  return (
    pathname === '/staff-resources' ||
    pathname.startsWith('/staff-resources/') ||
    pathname.startsWith('/files/staff/')
  );
}

export const onRequest = async (context) => {
  const { request, next } = context;
  const { pathname } = new URL(request.url);

  if (!isProtected(pathname)) return next();

  const header = request.headers.get('Authorization') || '';
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6)); // "username:password"
      const password = decoded.slice(decoded.indexOf(':') + 1);
      if (password === STAFF_PASSWORD) {
        const res = await next();
        // Don't let gated content sit in shared caches.
        const out = new Response(res.body, res);
        out.headers.set('Cache-Control', 'no-store');
        return out;
      }
    } catch (_e) {
      // fall through to 401
    }
  }

  return new Response('Authentication required to view staff resources.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};
