// src/components/customUI/BurgerMenu.jsx
import CustomDropdown from "./CustomDropdown";
import { Menu, LogIn } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import AvatarMenu from "./AvatarMenu";

export default function BurgerMenu() {
  return (
    <CustomDropdown
      trigger={
        <button className="outline-none">
          <Menu className="text-4xl text-primary" />
        </button>
      }
      items={[
        {
          content: (
            <Link href="/login" className="flex items-center gap-2">
              <LogIn size={18} />
              Login
            </Link>
          ),
        },
        { content: <ModeToggle /> },
        { content: <AvatarMenu /> },
      ]}
    />
  );
}
