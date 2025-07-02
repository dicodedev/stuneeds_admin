import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createToken = async (data) => {
  return await prisma.token.create({
    data,
  });
};

export const getToken = async (where) => {
  return await prisma.token.findFirst({
    where,
  });
};

export const deleteToken = async (where) => {
  return await prisma.token.delete({
    where,
  });
};
