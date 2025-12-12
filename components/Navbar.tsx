import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
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
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <motion.nav
      className="fixed top-0 w-full bg-teal-50 shadow-lg z-50"
      aria-label="Main navigation"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:underline hover:text-orange-500" aria-label="Nimbus Heat Pumps home">
            Nimbus Heat Pumps
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full hover:underline hover:text-orange-500`} aria-label="Home">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/services" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full hover:underline hover:text-orange-500`} aria-label="Services">
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => router.push('/locations/scunthorpe')} className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-focus:after:w-full" aria-label="Locations menu">Locations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/lincoln" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Lincoln">
                          Lincoln
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/scunthorpe" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Scunthorpe">
                          Scunthorpe
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/hull" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Hull">
                          Hull
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/grimsby" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Grimsby">
                          Grimsby
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/doncaster" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Doncaster">
                          Doncaster
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/cleethorpes" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Cleethorpes">
                          Cleethorpes
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/gainsborough" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Gainsborough">
                          Gainsborough
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/brigg" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Brigg">
                          Brigg
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/barton-upon-humber" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Barton-upon-Humber">
                          Barton-upon-Humber
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/locations/goole" className="block select-none rounded-md p-3 hover:bg-accent focus:bg-accent transition-colors hover:underline hover:text-orange-500" aria-label="Goole">
                          Goole
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/reviews" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full hover:underline hover:text-orange-500`} aria-label="Reviews">
                    Reviews
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full hover:underline hover:text-orange-500`} aria-label="About">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full focus:after:w-full hover:underline hover:text-orange-500`} aria-label="Contact">
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
                <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium hover:underline hover:text-orange-500" aria-label="Home">
                  Home
                </Link>
                <Link href="/services" onClick={() => setOpen(false)} className="text-lg font-medium hover:underline hover:text-orange-500" aria-label="Services">
                  Services
                </Link>
                <div>
                  <div className="text-lg font-medium">Locations</div>
                  <Link href="/locations/lincoln" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Lincoln">
                    Lincoln
                  </Link>
                  <Link href="/locations/scunthorpe" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Scunthorpe">
                    Scunthorpe
                  </Link>
                  <Link href="/locations/hull" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Hull">
                    Hull
                  </Link>
                  <Link href="/locations/grimsby" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Grimsby">
                    Grimsby
                  </Link>
                  <Link href="/locations/doncaster" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Doncaster">
                    Doncaster
                  </Link>
                  <Link href="/locations/cleethorpes" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Cleethorpes">
                    Cleethorpes
                  </Link>
                  <Link href="/locations/gainsborough" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Gainsborough">
                    Gainsborough
                  </Link>
                  <Link href="/locations/brigg" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Brigg">
                    Brigg
                  </Link>
                  <Link href="/locations/barton-upon-humber" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Barton-upon-Humber">
                    Barton-upon-Humber
                  </Link>
                  <Link href="/locations/goole" onClick={() => setOpen(false)} className="block pl-4 text-sm hover:underline hover:text-orange-500" aria-label="Goole">
                    Goole
                  </Link>
                </div>
                <Link href="/reviews" onClick={() => setOpen(false)} className="text-lg font-medium hover:underline hover:text-orange-500" aria-label="Reviews">
                  Reviews
                </Link>
                <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-medium hover:underline hover:text-orange-500" aria-label="About">
                  About
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-medium hover:underline hover:text-orange-500" aria-label="Contact">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;