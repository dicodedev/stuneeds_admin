import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPostImage = async (data) => {
  return await prisma.postImage.create({
    data,
  });
};

export const updatePostImage = async (id, data) => {
  return await prisma.postImage.update({
    where: {
      id,
    },
    data,
  });
};

export const getPostImage = async (where) => {
  return await prisma.postImage.findFirst({
    where,
  });
};

export const deletePostImage = async (where) => {
  return await prisma.postImage.delete({
    where,
  });
};
