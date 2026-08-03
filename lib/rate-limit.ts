/** Simple in-memory IP-based rate limiter for /api/enquiry. */

const ipMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000; // 1-minute window
const MAX_REQUESTS = 5; // max 5 enquiries per IP per minute

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}
