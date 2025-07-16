"use client";

import React from "react";
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
  return (
    <header
      className="sticky top-4 inset-x-0 z-50 w-full
    before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto
    before:rounded-[26px]
    before:bg-indigo-100/80 dark:before:bg-neutral-800/30
    before:backdrop-blur-md before:backdrop-saturate-150
    before:shadow-sm before:content-['']"
    >
      <Navbar
        maxWidth="lg"
        position="static"
        className="relative mx-2 lg:mx-auto rounded-[26px] bg-transparent"
        isBlurred={false}
      >
        {/* Mobile toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Brand */}
        <NavbarContent className="basis-full sm:basis-auto" justify="start">
          <NavbarBrand>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/img/brand/dytama-color.svg"
                width={116}
                height={32}
                alt="Dytama Logo"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Center menu */}
        <NavbarContent className="hidden md:flex gap-x-6" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-slate-700 dark:text-white hover:text-neutral-300"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}

          {/* Dropdown example */}
          {/* <div className="relative group"> */}
          {/* <button className="flex items-center text-sm text-white hover:text-[#ff0]">
              Product
              <svg
                className="ms-1 size-3.5 transition-transform group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button> */}
          {/* Dropdown mega menu */}
          {/* <div className="absolute hidden group-hover:block z-10 top-full mt-4 w-[600px] bg-neutral-800 rounded-2xl p-4">
              <div className="grid grid-cols-2 gap-4 text-sm text-neutral-200">
                <div>
                  <h4 className="font-semibold text-white mb-2">Build</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-[#ff0]">
                        Websites
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#ff0]">
                        Mobile apps
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#ff0]">
                        Pages
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:text-[#ff0]">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#ff0]">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </NavbarContent>

        {/* Right: Theme switcher + CTA */}
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
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
