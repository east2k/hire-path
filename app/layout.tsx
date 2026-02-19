import type { Metadata } from "next";
import { Special_Gothic } from "next/font/google";
import "./globals.css";

const specialGothic = Special_Gothic({
    variable: "--font-special-gothic",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HirePath - Job Application Tracker",
    description: "Track your job applications, interviews, and follow-ups",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${specialGothic.variable}  antialiased  bg-ink-50`}>{children}</body>
        </html>
    );
}
