import { HiHome } from "react-icons/hi";
import {
  HiSquares2X2,
  HiChartPie,
  HiBellAlert,
  HiClock,
  HiShoppingCart,
} from "react-icons/Hi2";
import { MdFastfood, MdSettings } from "react-icons/md";

export const sidebarNavigation = [
  { name: "Home", href: "#", icon: HiHome, current: true },
  { name: "Table", href: "#", icon: HiSquares2X2, current: false },
  { name: "Menu", href: "#", icon: MdFastfood, current: false },
  { name: "Order", href: "#", icon: HiShoppingCart, current: false },
  { name: "History", href: "#", icon: HiClock, current: false },
  { name: "Report", href: "#", icon: HiChartPie, current: false },
  { name: "Alert", href: "#", icon: HiBellAlert, current: false },
  { name: "Settings", href: "#", icon: MdSettings, current: false },
];

export const user = [
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
