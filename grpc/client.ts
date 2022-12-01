import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

const PROTO_PATH = __dirname + "/helloworld.proto"

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld

function main() {
  // @ts-ignore
  const client = new hello_proto.Greeter("localhost:50051", grpc.credentials.createInsecure())
  client.sayHello({ name: "testname" }, (err: any, res: any) => {
    console.dir(err)
    console.dir(res, { depth: null })
    console.log("res", res.message)
  })
}

main()
