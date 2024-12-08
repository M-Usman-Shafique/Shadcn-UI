// src/app/page.js
import MyAlertDialog from "@/components/myUi/MyAlertDialog";
import PostCard from "@/components/PostCard";
import { ModeToggle } from "@/components/ui/ModeToggle";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ModeToggle />
      <MyAlertDialog triggerText="Browse">
        <UserCard />
        <PostCard />
      </MyAlertDialog>
    </div>
  );
}
