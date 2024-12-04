import { usePathname } from "next/navigation";
import React from "react";
import { navItems } from "@/data";
import { Transition } from "@/lib/transition";

interface NavItemsProps {
  closeSheet?: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({ closeSheet }) => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-4 md:gap-2 md:flex-row">
      {navItems.map((link) => {
        const isActive = pathname === link.link;

        return (
          <li
            key={link.link}
            onClick={closeSheet}
            className={`${
              isActive && "text-slate-50"
            }  font-medium whitespace-nowrap text-sm ml-3 md:text-h5-clamp capitalize text-slate-200 `}
          >
            <Transition href={link.link}>{link.name}</Transition>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
