import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllStates = async (id) => {
  return await prisma.state.findMany({
    orderBy: {
      name: "asc",
    },
  });
};
