import React from "react";
import {Magnetic} from "./ui";
import { Github, Linkedin, Youtube } from "lucide-react";

export const socials = [
  {
    id: 1,
    component: Youtube,
    name: "Youtube",
    href: "https://www.youtube.com/"
  },
  {
    id: 2,
    component: Linkedin,
    name: "Linkedin",
    href: "https://www.linkedin.com/"
  },
  {
    id: 3,
    component: Github,
    name: "Github",
    href: "https://github.com/"
  },
];

const Socials = () => {
  return (
    <nav className="flex gap-4">
      {socials.map((item) => (
        <Magnetic key={item.id}>
          <item.component className="w-6 h-6" />
        </Magnetic>
      ))}
    </nav>
  );
};

export default Socials;
