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

export const pizza = [
  {
    id: 1,
    name: 'Pizza Margherita',
    icon: './assets/Pizza Margherita.png',
    price: 600,
  },
  {
    id: 2,
    name: 'Pizza Newyork style',
    icon: './assets/Pizza Newyork style.png',
    price: 700,
  },
 
  {
    id: 3,
    name: 'Pizza Pepperoni Chicago style',
    icon: './assets/Pizza Pepperoni Chicago style.png',
    price: 400,
  },
  {
    id: 4,
    name: 'Pizza Pepperoni',
    icon: './assets/Pizza Pepperoni.png',
    price: 400,
  },
  {
    id: 5,
    name: 'Pizza',
    icon: './assets/Pizza.png',
    price: 700,
  },
  {
    id: 6,
    name: 'Tomato Pizza',
    icon: './assets/Tomato Pizza.png',
    price: 500,
  },
]

