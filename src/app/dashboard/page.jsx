import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const authObj = await auth();
  const userObj = await currentUser();

  console.log(authObj, userObj);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-7xl font-bold text-secondary-foreground dark:text-primary text-center">
        Dashboard
      </h1>
    </div>
  );
}
