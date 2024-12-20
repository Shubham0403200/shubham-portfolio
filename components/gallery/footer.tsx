import Image from 'next/image';
import React from 'react';
import Logo from "@/app/assets/logo1.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={Logo} alt="Agency Logo"          
              width={300} 
              height={80}
              priority 
              placeholder='blur' 
              objectFit='contain' 
            />
            <p className="text-sm mt-2 md:text-lg text-gray-400">Transforming Visions into Seamless Experiences</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-200">Quick Links</h3>
              <ul className="mt-4 space-y-2 md:space-y-2">
                <li><a href="/" className="text-sm md:text-base hover:text-gray-400">Home</a></li>
                <li><a href="/about" className="text-sm md:text-base hover:text-gray-400">About Us</a></li>
                <li><a href="/services" className="text-sm md:text-base hover:text-gray-400">Services</a></li>
                <li><a href="/contact" className="text-sm md:text-base hover:text-gray-400">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-200">Follow Us</h3>
              <ul className="mt-4  space-y-2 md:space-y-2">
                <li><a href="https://facebook.com" className="text-sm md:text-base hover:text-gray-400">Facebook</a></li>
                <li><a href="https://twitter.com" className="text-sm md:text-base hover:text-gray-400">Twitter</a></li>
                <li><a href="https://linkedin.com" className="text-sm md:text-base hover:text-gray-400">LinkedIn</a></li>
                <li><a href="https://instagram.com" className="text-sm md:text-base hover:text-gray-400">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} CodeCrafters Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
