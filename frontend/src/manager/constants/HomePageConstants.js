import React from "react";
import { LuFileCode } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";

export const upperDivOptions = [
  { text: "Project", icon: LuFileCode },
  { text: "Add Member", icon: MdPersonAddAlt1 },
  { text: "Create Sprint", icon: LuIterationCcw },
];

export const downDivOptions = [
  { text: "Profile", icon: LuCircleUser },
  { text: "Logout", icon: MdLogout },
];
