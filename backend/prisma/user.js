import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const registerUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};

export const getUser = async (where) => {
  return await prisma.user.findFirst({
    where,
    include: {
      campus: true,
      university: true,
    },
  });
};

export const getUsers = async (where) => {
  return await prisma.user.findMany({
    where,
  });
};

export const updateUser = async (where, data) => {
  return await prisma.user.update({
    where,
    data,
  });
};
