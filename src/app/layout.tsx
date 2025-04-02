import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'RaiseMyTicket.com | Unified Enterprise Ticket Management',
  description: 'Simplify your enterprise ticket management with a unified, omnichannel, high-quality ticketing system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-VH4MT1CFCE" />
    </html>
  );
} 