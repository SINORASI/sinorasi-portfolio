 import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tim SINORASI | Portofolio Inovasi Digital",
  description: "Kenali tim SINORASI dari SMKN2SGS - inovator berbakat yang membangun masa depan website sekolah dengan keahlian di DevOps, desain, analisis bisnis, dan pembuatan konten.",
  keywords: ["SINORASI", "SMKN2SGS", "portofolio tim", "inovasi digital", "pengembangan web", "desain UI/UX", "DevOps"],
  authors: [{ name: "Tim SINORASI" }],
  icons: {
    icon: "/sinorasi-logo-v2.webp",
  },
  openGraph: {
    title: "Tim SINORASI | Portofolio Inovasi Digital",
    description: "Kenali tim berbakat di balik SINORASI, menggabungkan kreativitas, teknologi, dan inovasi untuk membangun pengalaman digital yang luar biasa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
