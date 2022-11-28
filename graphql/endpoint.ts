import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { resolvers } from "./resolvers"
import { typeDefs } from "./schema"

const apolloServer = new ApolloServer({ typeDefs, resolvers })

async function run() {
  const { url } = await startStandaloneServer(apolloServer, { listen: { port: 3000 } })

  console.log(`🚀  Server ready at: ${url}`)
}

run()
