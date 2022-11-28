// export const schema = makeSchema({
//   types: [],
//   outputs: {
//     typegen: join(process.cwd(), "node_modules", "@types", "nexus-typegen", "index.d.ts"),
//     schema: join(process.cwd(), "graphql", "schema.graphql"),
//   },
//   contextType: {
//     export: "Context",
//     module: join(process.cwd(), "graphql", "context.ts"),
//   },
// })

export const typeDefs = `
  type User {
    id: Int
    email: String
    name: String
    posts: [Post]
    profile: Profile
  }

  type Post {
    id: Int
    title: String
    content: String
    published: Boolean
    author: User
    authorId: Int
  }

  type Profile {
    id: Int
    bio: String
    userId: Int
    user: User
  }

  type Query {
    users: [User]!
  }
`
