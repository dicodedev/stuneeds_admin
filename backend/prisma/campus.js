import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createAccount = async (data) => {
  return await prisma.campus.create({
    data,
  });
};

export const getAllCampuses = async (where) => {
  return await prisma.campus.findMany({
    where,
    orderBy: {
      name: "asc",
    },
  });
};

export const getAccount = async (where) => {
  return await prisma.campus.findFirst({
    where,
  });
};

export const deleteAccount = async (where) => {
  return await prisma.campus.delete({
    where,
  });
};
