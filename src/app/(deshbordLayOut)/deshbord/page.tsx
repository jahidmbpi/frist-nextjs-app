import { authOptions } from "@/src/helpers/authOptions";
import { getServerSession } from "next-auth";

export default async function Deshbord() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex justify-center h-screen items-center w-full ">
      <h2 className="text-center text-4xl ">this is Deshbord</h2>
    </div>
  );
}
