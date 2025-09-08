import type { Metadata } from "next";
import "@styles/globals.scss";
import { SITE } from "@/config";
import { Header } from "@components/global/header";
import { Footer } from "@components/global/footer";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Merriweather, Inter } from "next/font/google";

// Load Google fonts via next/font to avoid hydration mismatches
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["300","400","700","900"], style: ["normal","italic"], variable: "--font-merriweather" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: SITE.title || "Your Title",
    description: SITE.desc || "Your company description.",
    keywords: SITE.keywords || "Your company keywords",
    metadataBase: new URL(SITE.siteUrl || "http://localhost:3000"),
    icons: {
        icon: [
            { url: "/logo-official-rez.png", sizes: "16x16", type: "image/png" },
            { url: "/logo-official-rez.png", sizes: "32x32", type: "image/png" }
        ],
        shortcut: "/logo-official-rez.png",
        apple: "//logo-official-rez.png",
        other: {
            rel: "apple-touch-icon",
            url: "/logo-official-rez.png"
        }
    },
    openGraph: {
        title: SITE.title || "Your Title",
        description: SITE.desc || "Your company description.",
        authors: SITE.author || "Your Author",
        images: [
            {
                url: SITE.ogImage || "https://nextjs.org/og.png", // Must be an absolute URL
                width: 1200,
                height: 630
            }
        ]
    },
    alternates: {
        canonical: SITE.siteUrl || "Canonical URL"
    },
    manifest: "site.webmanifest",
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable} ${inter.variable}`}>
            <body className="bg-black-500">
                <Header />
                <main className="main grid gap-8">{children}<Analytics /></main>
                <Footer />
            </body>
        </html>
    );
}
