import Link from "next/link";

export default function Navbar() {
  return (
    <div className="  bg-[#111627] w-full">
      <div className="max-w-7xl mx-auto">
        <div className=" flex items-center justify-between p-4 ">
          <div>
            <h3 className=" text-3xl"> next js</h3>
          </div>
          <ul className="flex gap-5 items-center">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/deshbord">Deshbord</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
