import Link from "next/link";

export default function layout({ children }) {
  return (
    <div className="flex">
      <div className="w-[15%] border-r min-h-dvh bg-[#e6e6e6]">
        <ul className="flex flex-col pl-4 text-black">
          <Link href="/deshbord/profile">Profile</Link>
          <Link href="/deshbord/admin">Admin</Link>
        </ul>
      </div>
      {children}
    </div>
  );
}
