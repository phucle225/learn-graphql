import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";

const app = express();
const port = 8080;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use("/test", (req, res) => {
  res.send("run");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
