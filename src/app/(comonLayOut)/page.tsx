import Banner from "@/src/component/modules/Home/Banner";
import FeturePost from "@/src/component/modules/Home/FeaturePost/FeturePost";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <FeturePost></FeturePost>
    </div>
  );
}
