// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence, useScroll, useMotionValueEvent,} from "framer-motion";
// import { cn } from "@/lib/utils";
// import { Transition } from "@/lib/transition";
// import { Button } from "./button";
// import { navItems } from "@/data";
// import Link from "next/link";

// export const FloatingNav = ({className}: {
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(false);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       const direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(false);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
//           className
//         )}
//       >
        // {navItems.map((navItem, idx: number) => (
        //   <Transition
        //     key={`link=${idx}`}
        //     href={navItem.link}
        //     className={cn(
        //       "relative items-center flex space-x-1 text-neutral-800 hover:text-neutral-600 group"
        //     )}
        //   >
        //     <span className="block sm:hidden">{navItem.icon}</span>
        //     <span
        //       className={cn(
        //         "hidden sm:block text-sm relative overflow-hidden",
        //         "before:absolute before:bottom-[1px] before:left-0 before:w-full before:h-[2px] before:bg-neutral-600",
        //         "before:scale-x-0 before:origin-right group-hover:before:origin-left group-hover:before:scale-x-100",
        //         "before:transition-transform before:duration-300"
        //       )}
        //     >
        //       {navItem.name}
        //     </span>
        //   </Transition>
        // ))}
//         <Link href='/contact' >
          // <Button variant='outline' size='sm' className='text-xs text-slate-900 relative rounded-full'>
          //   <span >Book Now!</span>
          //   <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          // </Button>
//         </Link>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Transition } from "@/lib/transition";
import { Button } from "./button";
import { navItems } from "@/data";
import Link from "next/link";

export const FloatingNav = ({ className }: { className?: string }) => {
  const navbarRef = useRef<HTMLDivElement | null>(null); // Reference for Navbar
  const [navbarOutOfView, setNavbarOutOfView] = useState(false); // Track if Navbar is out of view
  const [visible, setVisible] = useState(false); // Track if FloatingNav is visible

  // IntersectionObserver to check if Navbar is out of view
  useEffect(() => {
    const navbarElement = navbarRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether Navbar is in the viewport
        setNavbarOutOfView(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (navbarElement) {
      observer.observe(navbarElement);
    }

    return () => {
      if (navbarElement) {
        observer.unobserve(navbarElement);
      }
    };
  }, []);

  // Scroll Handling
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      setVisible(navbarOutOfView);
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY, navbarOutOfView]);

  return (
    <>
      {/* Navbar */}
      <div ref={navbarRef} className="h-[4rem] w-full bg-gray-800">
        <div className="text-white text-center py-3">Navbar</div>
      </div>

      {/* Floating Navigation */}
      <AnimatePresence>
        {navbarOutOfView && visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-4 inset-x-0 mx-auto max-w-fit z-[999] px-4 py-2 rounded-full bg-white shadow-lg dark:bg-black",
              "flex items-center space-x-4 border border-gray-200 dark:border-gray-700",
              className
            )}
          >
          {navItems.map((navItem, idx: number) => (
            <Transition
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-neutral-800 hover:text-neutral-600 group"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span
                className={cn(
                  "hidden sm:block text-sm relative overflow-hidden",
                  "before:absolute before:bottom-[1px] before:left-0 before:w-full before:h-[2px] before:bg-neutral-600",
                  "before:scale-x-0 before:origin-right group-hover:before:origin-left group-hover:before:scale-x-100",
                  "before:transition-transform before:duration-300"
                )}
              >
                {navItem.name}
              </span>
            </Transition>
          ))}

            <Link href="/contact">
              <Button variant='outline' size='sm' className='text-xs text-slate-900 relative rounded-full'>
                <span >Book Now!</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
