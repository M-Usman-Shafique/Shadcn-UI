"use client";
import Navbar from "@/components/Navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import dynamic from "next/dynamic";
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
      <Navbar />
      {children}
      <TailwindIndicator />
    </ThemeProvider>
  );
}
