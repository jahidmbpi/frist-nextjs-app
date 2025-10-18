"use server";
export const create = async (data: FormData) => {
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    authorId: 1,
  };
  console.log(modifiedData);
};
