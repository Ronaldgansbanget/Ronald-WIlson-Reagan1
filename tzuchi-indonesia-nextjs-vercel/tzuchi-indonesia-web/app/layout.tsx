import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yayasan Buddha Tzu Chi Indonesia | Cinta Kasih dalam Tindakan",
  description:
    "Mengenal misi kemanusiaan Yayasan Buddha Tzu Chi Indonesia: amal, kesehatan, pendidikan, budaya humanis, dan pelestarian lingkungan. Mari menjadi bagian dari gerakan cinta kasih.",
  metadataBase: new URL("https://www.tzuchi.or.id"),
  openGraph: {
    title: "Yayasan Buddha Tzu Chi Indonesia",
    description: "Setiap kebaikan punya tempat untuk tumbuh.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://www.tzuchi.or.id" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="icon" href="https://www.tzuchi.or.id/uploads/images/logo-1.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
