"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Profile() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
//   const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !userId) {
    return null;
  }

//   if (!isLoaded || !isSignedIn) {
//     return null;
//   }

return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-7xl font-bold text-secondary-foreground dark:text-primary text-center">
        Profile
      </h1>
    </div>
  );
}