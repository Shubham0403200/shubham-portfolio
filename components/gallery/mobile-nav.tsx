import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import Image from "next/image"
import { useState } from "react"
import NavItems from "./nav-items";
  
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
          <SheetContent className="flex flex-col gap-6 bg-black/40 md:hidden">
          <div className=" flex items-center gap-x-2 ">
              <Image src='https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8fDB8fHww' alt="Ielts-logo" width={30} height={30} />
              <div className="flex flex-col items-start " >
                <h5 className="font-semibold text-h4-clamp"> IELTS</h5>
                <h5 className="font-medium text-h6-clamp ">Strategies 101</h5>
              </div>
            </div>
            <NavItems closeSheet={handleCloseSheet}/>
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav