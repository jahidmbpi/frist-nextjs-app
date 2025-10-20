import Sidebar from "@/src/component/modules/deshbord/Sidebar";

import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}
