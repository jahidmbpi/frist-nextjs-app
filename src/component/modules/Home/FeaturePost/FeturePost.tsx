import { IFeaturePost, Iproduct } from "@/src/type";
import FeturePostCard from "./FeturePostCard";

export default async function FeturePost() {
  const res = await fetch("http://localhost:5001/api/v1/post", {
    cache: "no-store",
  });
  const postdata = await res.json();
  console.log(postdata);

  return (
    <div>
      <div>
        <h2 className="text-xl font-sans capitalize font-bold text-center my-6">
          feature post
        </h2>
      </div>
      <div className="max-w-5xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
        {postdata?.data?.map((post: IFeaturePost) => (
          <FeturePostCard key={post.id} post={post}></FeturePostCard>
        ))}
      </div>
    </div>
  );
}
