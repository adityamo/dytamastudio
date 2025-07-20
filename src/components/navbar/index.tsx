"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import ThemeSwitcher from "../themeswitcher";

const NavbarLanding = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 inset-x-0 z-50 flex justify-center transition-all duration-300">
      <Navbar
        maxWidth="lg"
        position="static"
        isBlurred={true}
        className={`relative w-full max-w-5xl rounded-[26px] shadow-md backdrop-blur-md backdrop-saturate-150 transition-all duration-300
          ${scrolled ? "bg-white dark:bg-neutral-900" : "bg-white dark:bg-neutral-900/60"}`}
      >
        {/* Mobile Toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Logo */}
        <NavbarContent className="basis-full sm:basis-auto" justify="start">
          <NavbarBrand>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/img/brand/dytama-black.svg"
                width={116}
                height={32}
                alt="Dytama Logo"
                className="block dark:hidden"
              />
              <Image
                src="/assets/img/brand/dytama-white.svg"
                width={116}
                height={32}
                alt="Dytama Logo"
                className="hidden dark:block"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu */}
        <NavbarContent className="hidden md:flex gap-x-6" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-slate-700 dark:text-white hover:text-neutral-400 transition-colors"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Theme Switcher */}
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-neutral-900 px-4 py-4">
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                href={item.href}
                className="block py-2 text-sm text-white hover:text-neutral-300"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default NavbarLanding;
