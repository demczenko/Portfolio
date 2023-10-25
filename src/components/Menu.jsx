import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { DropDownMenu } from ".";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-center dark:text-zinc-300" size="icon">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropDownMenu />
    </DropdownMenu>
  );
};

export default Menu;
