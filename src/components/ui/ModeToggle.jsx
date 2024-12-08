// src/components/ui/ModeToggle.jsx
"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import CustomDropdown from "../customUI/CustomDropdown";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <CustomDropdown
      trigger={
        <Button variant="wrapper" size="wrapper">
          <Sun className="dark:hidden" />
          <Moon className="hidden dark:block" />
          <span className="md:sr-only">Change Theme</span>
        </Button>
      }
      items={[
        { content: "Light", onClick: () => setTheme("light") },
        { content: "Dark", onClick: () => setTheme("dark") },
        { content: "System", onClick: () => setTheme("system") },
      ]}
    />
  );
}
