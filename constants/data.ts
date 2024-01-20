import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type Stream = {
  id: number;
  name: string;
  receiver: string;
  flowrate: string;
  verified: boolean;
  status: string;
};
export const streams: Stream[] = [
  {
    id: 1,
    name: "Candice Schiner",
    receiver: "Dell",
    flowrate: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    receiver: "TechCorp",
    flowrate: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    receiver: "WebTech",
    flowrate: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    receiver: "Innovate Inc.",
    flowrate: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    receiver: "TechGuru",
    flowrate: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    receiver: "CodeGenius",
    flowrate: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    receiver: "SoftWorks",
    flowrate: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    receiver: "DevCraft",
    flowrate: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    receiver: "WebSolutions",
    flowrate: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    receiver: "DataTech",
    flowrate: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Stream",
    href: "/dashboard/stream",
    icon: "stream",
    label: "stream",
  },
  {
    title: "Send",
    href: "/dashboard/send",
    icon: "send",
    label: "send",
  },
  {
    title: "Receive",
    href: "/dashboard/receive",
    icon: "receipt",
    label: "receipt",
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: "history",
    label: "history",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Disconnect",
    href: "/",
    icon: "login",
    label: "login",
  },
];
