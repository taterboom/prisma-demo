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

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call: any, callback: any) {
  callback(null, { message: "Hello " + call.request.name })
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server()
  // @ts-ignore
  server.addService(hello_proto.Greeter.service, { sayHello: sayHello })
  server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
    server.start()
  })
}

main()
