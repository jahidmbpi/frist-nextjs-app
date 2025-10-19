export const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:5001/api/v1/post/${id}`);
  return await res.json();
};
