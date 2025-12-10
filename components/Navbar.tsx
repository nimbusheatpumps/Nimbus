import React, { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold" aria-label="Nimbus Heat Pumps home">
            Nimbus Heat Pumps
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full`} aria-label="Home">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-focus:after:w-full" aria-label="Boilers menu">Boilers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/boilers/install" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors" aria-label="Boiler Install">
                          Install
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/boilers/repair" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors" aria-label="Boiler Repair">
                          Repair
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/locations" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full`} aria-label="Locations">
                    Locations
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/heat-pumps" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full`} aria-label="Heat Pumps">
                    Heat Pumps
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full`} aria-label="Contact">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium" aria-label="Home">
                  Home
                </Link>
                <div>
                  <div className="text-lg font-medium">Boilers</div>
                  <Link href="/boilers/install" onClick={() => setOpen(false)} className="block pl-4 text-sm" aria-label="Boiler Install">
                    Install
                  </Link>
                  <Link href="/boilers/repair" onClick={() => setOpen(false)} className="block pl-4 text-sm" aria-label="Boiler Repair">
                    Repair
                  </Link>
                </div>
                <Link href="/locations" onClick={() => setOpen(false)} className="text-lg font-medium" aria-label="Locations">
                  Locations
                </Link>
                <Link href="/heat-pumps" onClick={() => setOpen(false)} className="text-lg font-medium" aria-label="Heat Pumps">
                  Heat Pumps
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-medium" aria-label="Contact">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;