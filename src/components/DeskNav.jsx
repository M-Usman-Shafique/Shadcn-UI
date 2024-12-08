// import { useState } from "react";
import AvatarMenu from "./customUI/AvatarMenu";
import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function DeskNav() {
  // const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center justify-center gap-2">
        {/* {!isLogin ? ( */}
        <Button
          variant="default"
          size="sm"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
        {/* ) : ( */}
        <AvatarMenu />
        {/* )} */}
        <ModeToggle />
      </nav>
    </div>
  );
}
