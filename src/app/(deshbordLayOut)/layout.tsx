import Link from "next/link";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="w-[15%] border-r min-h-dvh bg-[#e6e6e6]">
        <ul className="flex flex-col pl-4 text-black">
          <Link href="/deshbord/profile">Profile</Link>
          <Link href="/deshbord/admin">Admin</Link>
          <Link href="/deshbord/createBolog">Create Blog</Link>
        </ul>
      </div>
      {children}
    </div>
  );
}
