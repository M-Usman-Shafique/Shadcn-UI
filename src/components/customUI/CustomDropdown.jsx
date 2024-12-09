// src/components/customUI/GeneralDropdown.jsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CustomDropdown({ trigger, items }) {
  const handleItemClick = (item) => (event) => {
    event.stopPropagation();
    if (item.onClick) item.onClick();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item, index) => (
          <DropdownMenuItem key={index} onClick={handleItemClick(item)}>
            {item.content}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
