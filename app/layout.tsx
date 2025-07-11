import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIGA Wichita',
  description: 'Wichita AIGA Chapter for designers and creatives.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
