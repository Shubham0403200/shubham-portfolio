'use client'
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { Button } from '../ui/button';
import Image from 'next/image';

export default function GetInTouch() {
  return (
    <section className="bg-gray-900 w-[90vw] md:max-w-7xl rounded-xl my-5 mx-auto text-white py-8 md:py-12">
      <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="max-w-screen-xl mx-auto px-6 flex flex-col items-center gap-y-1"
        >
          <h2 className="text-3xl font-semibold text-center md:text-left text-gradient bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg text-center md:text-left text-gray-400">
            We specialize in turning ideas into real, scalable digital solutions. Get in touch today and let&apos;s discuss your project!
          </p>
          <Link href="/contact">
            <Button 
              className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 mt-4 focus:ring-indigo-500"
            >
              Get In Touch
            </Button>
          </Link>
      </motion.div>
      <div className="mt-12 text-center text-gray-400">
        <p className="italic">Trusted by leading businesses worldwide</p>
        <div className="flex justify-center gap-8 mt-4">
          <Image src="https://aceternity.com/images/products/thumbnails/new/moonbeam.png" alt="Clients" width={22} height={22} className="h-12 w-12 aspect-square rounded-full" />
          <Image src="https://aceternity.com/images/products/thumbnails/new/moonbeam.png" alt="Clients" width={22} height={22} className="h-12 w-12 aspect-square rounded-full" />
          <Image src="https://aceternity.com/images/products/thumbnails/new/moonbeam.png" alt="Clients" width={22} height={22} className="h-12 w-12 aspect-square rounded-full" />
        </div>
      </div>
    </section>
  );
}
