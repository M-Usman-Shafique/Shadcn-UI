// src/app/page.js
import MyAlertDialog from "@/components/myUi/MyAlertDialog";
import PostCard from "@/components/PostCard";
import { ModeToggle } from "@/components/ui/ModeToggle";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen gap-3 py-20">
      <ModeToggle />
      <MyAlertDialog triggerText="Browse">
        <UserCard />
        <PostCard />
      </MyAlertDialog>
    </div>
  );
}
