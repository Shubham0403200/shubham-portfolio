import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./../globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, MessageCircle, User, Workflow } from "lucide-react";
import Footer from "@/components/gallery/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Work",
    link: "/work",
    icon: <Workflow className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export const metadata: Metadata = {
  title: "Portfolio Shubham",
  description: "A portfolio website for Shubham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className && 'no-scrollbar'}>
      <body className='w-screen h-screen overflow-x-hidden bg-black no-scrollbar text-white'>
          <FloatingNav navItems={navItems} />
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
