import React from 'react';
import Image from 'next/image';
import NavItems from './nav-items';
import MobileNav from './mobile-nav';
import { Transition } from '@/lib/transition';
import Logo from '@/app/assets/logo1.png';
import Logo1 from '@/app/assets/mobile1.png';

const Navbar = () => {
  return (
    <div className='w-screen flex justify-between items-center p-4 md:px-10 md:py-5 shadow-lg'>
      <Transition href='/' className='flex items-center gap-2'>
        <Image
            src={Logo1}
            alt='IELTS Logo'
            width={28} 
            height={28}
            className='flex md:hidden aspect-square'
            priority 
            placeholder='blur' 
            objectFit='contain' 
          />
        <Image
          src={Logo}
          alt='IELTS Logo'
          width={250} 
          height={80}
          priority 
          className='hidden md:flex'
          placeholder='blur' 
          objectFit='contain' 
        />
      </Transition>
      <div className='flex items-center gap-3'>
        <div className='hidden md:flex max-w-xl w-full mr-4'>
          <NavItems />
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
