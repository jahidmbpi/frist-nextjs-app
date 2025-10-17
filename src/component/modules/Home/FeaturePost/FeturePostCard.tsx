import { IFeaturePost } from "@/src/type";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
interface FeturePostCardProps {
  post: IFeaturePost;
}
export default function FeturePostCard({ post }: FeturePostCardProps) {
  console.log(post);
  return (
    <div className=" border p-2 rounded-lg">
      <div className="h-[180px] w-full relative overflow-hidden rounded-t-lg">
        <Image
          src="https://i.ibb.co.com/fVDxS4Cr/6.jpg"
          alt="this is post"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="px-3">
        <h2 className="font-sans font-semibold">{post.title}</h2>
        <p>
          {post.contant.split(" ").slice(0, 20).join(" ") +
            (post.contant.split(" ").length > 20 ? "..." : "")}{" "}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center">
            {" "}
            <CircleUserRound />
            <span> {post.author.name}</span>
          </h2>
          <p>{post.viewCount} views</p>
        </div>
        <p className="text-right text-blue-600">read more</p>
      </div>
    </div>
  );
}
