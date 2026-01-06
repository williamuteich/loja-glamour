import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Glamour Admin | Sistema de Gestão",
  description: "Sistema de gestão administrativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <main className="flex-1 overflow-y-auto md:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}