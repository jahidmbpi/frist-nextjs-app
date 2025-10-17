import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0 max-h-screen w-full"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
        }}
      ></div>

      {/* content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center
       text-white min-h-screen text-center px-4 space-y-3"
      >
        <h1 className="text-4xl font-serif md:text-6xl font-extrabold mb-6">
          Read. Learn. Share. <br className="hidden md:block" />
          Ideas That Shape the Future
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl font-sans">
          Discover in-depth articles, tutorials, and thought-provoking stories
          from a global network of creators. Stay updated with fresh insights on
          technology, design, productivity, and personal growth—all in one
          place.
        </p>
        <Button className=" text-xl ">
          <Link href="/products">Explore more</Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
