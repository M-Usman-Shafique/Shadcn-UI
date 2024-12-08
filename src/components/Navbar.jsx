import Link from "next/link";
import DeskNav from "./DeskNav";
import MobNav from "./MobNav";
import { Layers } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="container h-14 flex items-center px-4">
        <h1 className="flex items-center flex-1">
          <Link href="/" className="text-primary font-semibold flex items-center gap-2">
            <Layers />
            <span>shadcn/ui</span>
          </Link>
        </h1>
        {/*Desktop*/}
        <DeskNav />
        {/*Mobile*/}
        <MobNav />
      </div>
    </header>
  );
}
