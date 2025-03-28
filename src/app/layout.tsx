import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

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
    </html>
  );
} 