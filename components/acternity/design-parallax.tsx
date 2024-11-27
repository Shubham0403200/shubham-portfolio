"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

export const DesignParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30 };

  // Animations for left-to-right and right-to-left
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="py-12 overflow-hidden gap-y-10 flex flex-col justify-center items-center"
    >
      <motion.div className="flex space-x-6">
        {products.slice(0, 5).map((product) => (
          <ProductCard product={product} translate={translateX} key={product.title} />
        ))}
      </motion.div>
      <motion.div className="flex space-x-6">
        {products.slice(5, 10).map((product) => (
          <ProductCard product={product} translate={translateXReverse} key={product.title} />
        ))}
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-64 w-[30rem] rounded-md relative flex-shrink-0"
    >
      <LinkPreview url={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover rounded-md object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </LinkPreview>
      {/* <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover rounded-md object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link> */}
      <div className="absolute inset-0 h-full z-1 w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
