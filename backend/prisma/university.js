import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUniversitiesWithAds = async () => {
  return await prisma.university.findMany({
    include: {
      campuses: {
        include: {
          _count: {
            select: {
              campus_posts: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const getAllUniversities = async (where) => {
  return await prisma.university.findMany({
    where,
    orderBy: {
      name: "asc",
    },
  });
};
