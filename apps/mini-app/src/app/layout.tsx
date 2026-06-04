import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'المحفظة العربية',
  description: 'محفظة عملات مشفرة عربية داخل Telegram Mini App.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
