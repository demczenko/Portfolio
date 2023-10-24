import React from "react";
import {Magnetic} from "./ui";
import { Github, Linkedin, Youtube } from "lucide-react";

const socials = [
  {
    id: 1,
    component: Youtube,
  },
  {
    id: 2,
    component: Linkedin,
  },
  {
    id: 3,
    component: Github,
  },
];

const Socials = () => {
  return (
    <nav className="flex gap-4">
      {socials.map((item) => (
        <Magnetic key={item.id}>
          <item.component className="md:h-10 md:w-10 w-6 h-6" />
        </Magnetic>
      ))}
    </nav>
  );
};

export default Socials;
