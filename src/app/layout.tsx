import type { Metadata } from "next";
import "./globals.css";
import Menu from "./components/menu";

export const metadata: Metadata = {
  title: "Origamid",
  description: "Criado por Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
