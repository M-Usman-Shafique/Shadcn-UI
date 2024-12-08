// src/app/page.js
import MyAlertDialog from "@/components/myUi/MyAlertDialog";
import PostCard from "@/components/PostCard";
import { ModeToggle } from "@/components/ui/ModeToggle";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center gap-3 py-20">
        <ModeToggle />
        <MyAlertDialog triggerText="Browse">
          <UserCard />
          <PostCard />
        </MyAlertDialog>
      </div>
      <p className="bg-secondary-foreground text-secondary dark:bg-primary dark:text-primary-foreground text-center">
        Hello Shadcn UI
      </p>
    </div>
  );
}
