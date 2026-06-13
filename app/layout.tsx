import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DayPlate | Plan your food around your real day",
  description: "AI micro-app that helps a user generate a personal cooking to-do list based on their day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-[#111111] bg-[#fff9db] selection:bg-[#ff7a00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
