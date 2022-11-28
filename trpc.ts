import { PrismaClient } from "@prisma/client"
import { initTRPC } from "@trpc/server"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"

const prisma = new PrismaClient()

const t = initTRPC.create()

const appRouter = t.router({
  userById: t.procedure
    .input((val: unknown) => val as number)
    .query(async (req) => {
      const { input } = req
      const user = await prisma.user.findUnique({
        where: { id: input },
      })
      return user
    }),
})

export type AppRouter = typeof appRouter

// appRouter
//   .createCaller({})
//   .userById(1)
//   .then((res) => console.dir(res, { depth: null }))

const app = express()

app.use(cors())

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
)

app.listen(4000)
