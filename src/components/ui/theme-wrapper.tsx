// components/ui/theme-wrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null or a placeholder while the component is mounting
  if (!mounted) {
    return null; // Or you can return a loading state here if needed
  }

  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider>;
};

export default ThemeWrapper;
