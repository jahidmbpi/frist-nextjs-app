import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../../../components/ui/button";
import { MenuIcon } from "lucide-react";
import { navItem } from "./NavItem";
import Link from "next/link";

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-2 pl-4 font-serif font-semibold pt-6">
          {navItem.map((item, index) => (
            <Link href={item.path} key={index}>
              {item.route}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <Button>login</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
