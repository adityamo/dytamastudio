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
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        disableTransitionOnChange
      >
        <main className="flex-1 content" id="app-container">
          <NavbarLanding />
          {children}
        </main>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
