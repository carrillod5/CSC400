import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const routes = [
  {
    title: "Home",
    href: "/Home",
    Icon: BiHomeAlt2,
  },
  {
    title: "Scheduling",
    href: "/Scheduling",
    Icon: FiSearch,
  },
  {
    title: "Pricing",
    href: "/Pricing",
    Icon: IoPricetagsOutline,
  },
  {
    title: "Appointments",
    href: "/Appointments",
    Icon: PiChatCircleBold,
  },
];
