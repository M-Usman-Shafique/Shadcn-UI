// src/components/customUI/DropdownAvatar.jsx
import CustomDropdown from "./CustomDropdown";
import Avatar from "./Avatar";

export default function AvatarMenu() {
  return (
    <CustomDropdown
      trigger={
        <button className="outline-none flex items-center gap-2">
          <Avatar />
          <span className="md:hidden">John Doe</span>
        </button>
      }
      items={[
        { content: "Profile" },
        { content: "Dashboard" },
        { content: "Logout" },
      ]}
    />
  );
}
