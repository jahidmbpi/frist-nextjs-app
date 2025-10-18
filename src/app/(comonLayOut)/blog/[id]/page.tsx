import Image from "next/image";
import React from "react";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5001/api/v1/post/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-6xl mx-auto w-full md:mt-24 flex justify-center">
      <div className="flex flex-col items-center w-full md:w-[70%] px-4">
        <h2 className="font-sans  text-xl md:text-2xl font-medium text-left w-full md:w-[80%] md:px-2">
          {data.title}
        </h2>

        <div className="h-[300px] w-full md:w-[600px] relative overflow-hidden rounded-lg mb-6">
          <Image
            src="https://i.ibb.co.com/fVDxS4Cr/6.jpg"
            alt="this is post"
            className="object-cover"
            fill
          />
        </div>

        <div className="w-full md:w-[80%] text-left md:px-2">
          <p className="text-[16px] font-serif leading-relaxed">
            {data.contant}
          </p>
        </div>
      </div>
    </div>
  );
}
