import type { Metadata } from "next";
import "./globals.css";
import { MainContent } from "../components/MainContent";

export const metadata: Metadata = {
  title: "Study Together",
  description: "Приложение для совместного обучения",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <MainContent>
          {children}
        </MainContent>
      </body>
    </html>
  );
}