import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Radar — Opportunity Intelligence',
  description: 'Detect where developer opportunity is moving before the crowd arrives.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
