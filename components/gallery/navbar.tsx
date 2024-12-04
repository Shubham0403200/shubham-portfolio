import React from 'react'
import Image from 'next/image'
import NavItems from './nav-items'
import MobileNav from './mobile-nav'
import { Transition } from '@/lib/transition'

const Navbar = () => {

  return (
    <div className='w-screen flex justify-between items-center p-4 md:px-10 md:py-5 ' >
      <Transition href='/' className='flex items-center gap-2 ' >
        <Image src='https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8fDB8fHww' alt='ielts-logo' width={48} height={48} className='rounded-full aspect-square ' />
        <div className='hidden lg:flex flex-col mb-1' >
          <h1 className=' font-bold text-2xl' >ST</h1>
          <h4 className=' font-semibold text-[0.65rem]' >Solutions</h4>
        </div>
      </Transition>
      <div className='flex items-center gap-3' >
        <div className='hidden md:flex max-w-xl w-full mr-4 ' >
          <NavItems />
        </div>
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar