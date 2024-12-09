"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";

const ThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  }
);
export default function ClientLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Navbar />
        {children}
      </TooltipProvider>
      <TailwindIndicator />
    </ThemeProvider>
  );
}
