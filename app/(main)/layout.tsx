"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/gallery/footer";
import { motion } from "framer-motion";

export default function MainLayout({children}: {children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingNav />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
