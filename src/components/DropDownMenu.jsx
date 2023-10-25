import { ArrowUpRight } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { children_navigation } from "../router/router";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <DropdownMenuContent className="w-[180px]">
      <DropdownMenuLabel>Navigation</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {children_navigation.map((item) => {
        return (
          <DropdownMenuItem
            key={item.path}
            className="font-medium cursor-pointer rounded">
            <Link
              to={item.path}
              className="flex justify-between items-center w-full group">
              <span>{item.name}</span>
              <ArrowUpRight className="text-blue-300 group-hover:text-blue-500 h-4 w-4 group-hover:scale-105 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </Link>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  );
};

export default DropDownMenu;