import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async (data) => {
  return await prisma.post.create({
    data,
  });
};

export const getUserPosts = async (id, skip, take) => {
  return await prisma.post.findMany({
    where: {
      userId: id,
    },
    include: {
      post_images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take,
    skip,
  });
};

export const getPostByID = async (id) => {
  return await prisma.post.findFirst({
    where: {
      id,
    },
    include: {
      category: true,
      post_images: true,
      user: true,
    },
  });
};

export const getAllPosts = async (skip, take) => {
  return await prisma.post.findMany({
    include: {
      post_images: true,
      campus: true,
      university: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take,
    skip,
  });
};
