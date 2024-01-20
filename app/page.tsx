"use client"
import { useState } from "react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Trusted from "@/components/trusted";
import { Meteors } from "@/components/Meteors";


export default function Landing() {
  const router = useRouter();
  const handleOpenApp = () => {
    router.push('/dashboard');
  };
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 hidden top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
        <svg width="41" height="15" viewBox="0 0 41 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_88_595)">
<path d="M0 14.5455V0H8.72159V1.5625H1.76136V6.47727H8.06818V8.03977H1.76136V14.5455H0Z" fill="white"/>
<path d="M26 0H28.1023L33.0455 12.0739H33.2159L38.1591 0H40.2614V14.5455H38.6136V3.49432H38.4716L33.9261 14.5455H32.3352L27.7898 3.49432H27.6477V14.5455H26V0Z" fill="white"/>
<path d="M11 15V12.5739L16.2399 7.49547L11 2.43512V0L17.5 6.29149L24 0V2.43512L11 15ZM24 15L18.1709 9.34218L19.4128 8.1382L24 12.5739V15Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_88_595">
<rect width="40.2614" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
        <div className="relative z-20 mt-auto">
          <Trusted />
          <blockquote className="space-y-2">
            <footer className="text-sm">A project by Team Xtream </footer>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Try FluXtreme
            </h1>
            <p className="text-sm text-muted-foreground">
            Send Tokens as a stream
            </p>
          </div>
          <Button disabled={loading} className="ml-auto w-full" type="submit" onClick={handleOpenApp}>
            Open App
          </Button>
          <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            FluXtreme
          </span>
        </div>
      </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
            <Meteors number={50} />
          </p>
        </div>
      </div>
    </div>
  );
}
