import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    users: async () => {
      const data = await prisma.user.findMany({
        include: {
          posts: true,
          profile: true,
        },
      })
      console.dir(data, { depth: null })
      return data
    },
  },
}
