import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AvatarMenu from "./AvatarMenu";
import { ModeToggle } from "../ui/ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import Link from "next/link";

export default function CustomSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-4xl text-primary" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col items-center gap-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* <Link
          href="/login"
          className="p-2 hover:bg-secondary dark:hover:bg-white/5 w-full rounded-lg text-sm text-center"
        >
          Login
        </Link> */}
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="p-2 hover:bg-secondary dark:hover:bg-white/5 w-full rounded-lg text-sm flex justify-center">
          <AvatarMenu />
        </div>
        <div className="p-2 hover:bg-secondary dark:hover:bg-white/5 w-full rounded-lg flex justify-center">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
