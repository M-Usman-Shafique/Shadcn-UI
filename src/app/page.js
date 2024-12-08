// src/app/page.js
import CustomAlertDialog from "@/components/customUI/CustomAlertDialog";
import PostCard from "@/components/PostCard";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-7xl font-bold text-secondary-foreground dark:text-primary text-center">
        Homepage
      </h1>
      <CustomAlertDialog triggerText="Browse">
        <UserCard />
        <PostCard />
      </CustomAlertDialog>
    </div>
  );
}
