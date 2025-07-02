import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCategories = async (id) => {
  return await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
};
