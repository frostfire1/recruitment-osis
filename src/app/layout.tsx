import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "@/app/_components/utils/SessionProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], style: ["italic", "normal"] });

export const metadata: Metadata = {
  title: "Recruitment OSIS Moklet 2024",
  description: "Web Pendaftaran OSIS SMK Telkom Malang Periode 2024/2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthSessionProvider>
        <body className={roboto.className}>{children}</body>
      </AuthSessionProvider>
    </html>
  );
}
