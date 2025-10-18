import Banner from "@/src/component/modules/Home/Banner";
import Image from "next/image";
import Blog from "./blog/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Blog></Blog>
    </div>
  );
}
