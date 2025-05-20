import { Calendar, Tag, User } from "lucide-react";

export const LandingMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Discover events",
    link: "/discover",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "About",
    link: "/about",
  },
];

export const dashboardMenu = [
  {
    title: "Events",
    link: "/dashboard",
    icon: Calendar,
  },
  {
    title: "Discounts",
    link: "/dashboard/discount",
    icon: Tag,
  },
  {
    title: "Account",
    link: "/dashboard/admin",
    icon: User,
  },
];
