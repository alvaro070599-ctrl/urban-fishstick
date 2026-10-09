import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual Bíblico | Estude a Bíblia com profundidade",
  description:
    "Aprofunde seus estudos bíblicos com conteúdos de contexto histórico, apologética e teologia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
