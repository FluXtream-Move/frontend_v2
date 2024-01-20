"use client"
import { ThemeToggle } from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import lightLogo from "@/public/white_logo.svg"
import darkLogo from "@/public/black_logo.svg"
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes'
import Socials from "@/components/layout/socials";

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden md:block">
          <Link href="https://linktr.ee/fluxtreme" target="_blank">
              <Image src={theme === "dark" ? lightLogo : darkLogo} alt="Fluxtream Logo" width={150} height={40} />
          </Link>
        </div>
        <div className={cn("block sm:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
          <Socials />
        </div>
      </nav>
    </div>
  );
}
