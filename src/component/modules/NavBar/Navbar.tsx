import Link from "next/link";
import Logo from "./Logo";
import { navItem } from "./NavItem";
import { Button } from "../../../../components/ui/button";
import { Menu } from "./Menu";

export default function Navbar() {
  return (
    <div className="fixed top-6 inset-x-4 max-w-7xl mx-auto rounded-full bg-background border dark:border-slate-700/70 z-30">
      <div className="flex items-center justify-between p-4">
        <Logo></Logo>
        <div className="hidden md:block">
          <div className=" flex gap-4 font-serif font-semibold capitalize ">
            {navItem.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.route}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="hidden md:block">
            <Button className="rounded-full   text-sm md:text-base">
              <Link href="/login" className="block w-full text-center">
                Login
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Menu></Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
