"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Transition } from "@/lib/transition";

export function AuroraBackgroundFunction() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-6xl font-bold text-white text-center">
          Building Websites that Build Businesses
        </div>
        <div className="font-extralight text-center md:text-3xl text-neutral-200 py-4">
          Full-stack and Android solutions to help your ideas thrive online.
        </div>
        <Transition href='/contact' >
          <button className="bg-black dark:bg-white rounded-full w-fit text-sm md:text-base text-white px-5 py-3">
            Plan Your Website with Us
          </button>
        </Transition>
      </motion.div>
    </AuroraBackground>
  );
}
