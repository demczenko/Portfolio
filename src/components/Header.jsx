import React from "react";
import { Link } from "react-router-dom";
import { Menu } from ".";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="md:py-4 py-2 flex items-center justify-between">
      <Link to={"/"}>
        <span className="md:text-3xl text-2xl font-semibold dark:text-zinc-300">DEMCHENKO</span>
      </Link>
      <HeaderActions />
    </nav>
  );
};

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <Menu />
    </div>
  );
};

export default Header;
