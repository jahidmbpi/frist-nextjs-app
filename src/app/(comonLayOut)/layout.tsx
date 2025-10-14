import Navbar from "../../components/Navbar";

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
