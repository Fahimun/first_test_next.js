"use client"; // হুক ব্যবহারের জন্য ক্লায়েন্ট কম্পোনেন্ট হওয়া জরুরি

import Link from "next/link";
import { usePathname } from "next/navigation"; // pathname জানার জন্য হুক
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname(); // বর্তমানে কোন URL-এ আছেন তা এটি স্টোর করবে

  // লিংকগুলোর স্টাইল ডাইনামিক করার জন্য একটি ফাংশন
  const linkStyle = (path: string) => 
    pathname === path 
      ? "text-blue-600 font-bold" // Active স্টাইল
      : "hover:text-blue-600 transition-colors"; // Normal স্টাইল

  return (
    <nav className="flex justify-between items-center p-4 border-b shadow-sm">
      <div className="text-xl font-bold">
        <Link href="/">MyApp</Link>
      </div>
      
      <div className="flex gap-4 items-center">
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>
        
        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>
        
        <Link href="/contact" className={linkStyle("/contact")}>
          Contact
        </Link>

        <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
      </div>
    </nav>
  );
}