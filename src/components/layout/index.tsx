"use client";

import React, { ReactNode, useEffect, useState } from "react";
import NavbarLanding from "@/components/navbar";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" disableTransitionOnChange>
        <div className="relative flex flex-col" id="app-container">
          <NavbarLanding />
          <div>{children}</div>
        </div>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
