"use client";

import { ThemeProvider } from "next-themes";
import { AntdProvider } from "./AntdProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AntdProvider>{children}</AntdProvider>
    </ThemeProvider>
  );
}
