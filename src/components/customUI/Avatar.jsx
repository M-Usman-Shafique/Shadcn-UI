import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CustomAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
