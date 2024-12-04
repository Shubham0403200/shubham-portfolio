'use client'
import { motion } from "framer-motion";
import { AuroraBackgroundFunction } from "@/components/acternity/aurora-background";
import { DesignParallax } from "@/components/acternity/design-parallax";
import { Services } from "@/components/acternity/services";
import { Testimonials } from "@/components/acternity/testimonials";
import Contact from "@/components/gallery/contact";
import { products } from "@/data";
import React from "react";

const HomePage = () => {
  return (
    <motion.div
      className="no-scrollbar overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }} 
    >
      <AuroraBackgroundFunction />
      <Services />
      <DesignParallax products={products} />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
