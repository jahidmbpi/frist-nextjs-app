"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const session = useSession();
  console.log(session);
  return (
    <div className="w-[15%] border-r min-h-dvh bg-[#e6e6e6] flex flex-col justify-between">
      <ul className="flex flex-col pl-4 text-black">
        <Link href="/deshbord/profile">Profile</Link>
        <Link href="/deshbord/admin">Admin</Link>
        <Link href="/deshbord/createBolog">Create Blog</Link>
      </ul>
      <div className="p-4">
        <Button onClick={() => signOut()} className="w-full">
          Log out
        </Button>
      </div>
    </div>
  );
}
