import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "../trpc"

const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:4000/trpc" })],
})

client.userById.query(1).then((res) => {
  console.log(`I'm ${res?.name}`)
})
