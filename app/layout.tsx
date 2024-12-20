import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "CodeCrafters Studio",
  description: "Your Vision - Our Mission. Freelancing Agency, SEO, Full Stack Developers, Saas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className && 'no-scrollbar'}>
      <body className='w-screen h-screen overflow-x-hidden bg-black no-scrollbar text-white'>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
