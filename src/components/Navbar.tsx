import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" flex items-center justify-between p-4">
        <div>
          <h3 className=" text-3xl"> next js</h3>
        </div>
        <ul className="flex gap-5 items-center">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
          <Link href="/blog">blog</Link>
          <Link href="/deshbord">deshbord</Link>
        </ul>
      </div>
    </div>
  );
}
