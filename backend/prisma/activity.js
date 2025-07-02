import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createActivity = async (data) => {
  return await prisma.activity.create({
    data,
  });
};

export const getProductActivities = async (id, skip, take) => {
  return await prisma.activity.findMany({
    where: {
      productId: id,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take,
    skip,
  });
};

export const getUserActivities = async (id, skip, take) => {
  return await prisma.activity.findMany({
    where: {
      userId: id,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take,
    skip,
  });
};
