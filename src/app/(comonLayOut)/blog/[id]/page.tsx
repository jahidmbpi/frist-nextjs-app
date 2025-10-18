import React from "react";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div className="max-w-7xl mx-auto">BlogDetails:{id}</div>;
}
