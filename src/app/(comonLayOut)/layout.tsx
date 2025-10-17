import Navbar from "@/src/component/modules/NavBar/Navbar";

export default function ComonLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
