import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import Image from "next/image"
import { useState } from "react"
import NavItems from "./nav-items";
import Logo from "@/app/assets/logo1.png"
import { Transition } from "@/lib/transition";
import { Button } from "../ui/button";
  
const MobileNav = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const handleCloseSheet = () => {
    setIsOpen(false);
  };

    return (
      <nav className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="align-middle">
            <MenuIcon className=" h-5 w-5 text-muted-foreground " />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 z-[100] bg-gray-800 md:hidden">
            <div className=" flex items-center gap-x-2 ">
                <Image src={Logo} alt="Agency Logo"          
                    width={240} 
                    height={80}
                    priority 
                    placeholder='blur' 
                    objectFit='contain' 
                  />
              </div>
            <NavItems closeSheet={handleCloseSheet}/>
            <Transition href='/contact'>
                <Button size='sm' className="bg-teal-600 hover:bg-teal-900 px-5 py-3 rounded-full" >
                  Book Now!
                </Button>
            </Transition>
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav