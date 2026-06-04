export function getTelegramWebApp() {
  if (typeof window === 'undefined') {
    return null;
  }

  return (window as Window & { Telegram?: { WebApp?: unknown } }).Telegram?.WebApp ?? null;
}
