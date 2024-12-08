// src/app/page.js
import CustomAlertDialog from "@/components/customUI/CustomAlertDialog";
import CustomForm from "@/components/customUI/CustomForm";
import PostCard from "@/components/PostCard";
import { ModeToggle } from "@/components/ui/ModeToggle";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex justify-center gap-3">
        <ModeToggle />
        <CustomAlertDialog triggerText="Browse">
          <UserCard />
          <PostCard />
        </CustomAlertDialog>
      </div>
      {/* <p className="bg-secondary-foreground text-secondary dark:bg-primary dark:text-primary-foreground text-center">
        Hello Shadcn UI
      </p> */}
      <CustomForm />
    </div>
  );
}
