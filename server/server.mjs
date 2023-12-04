import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import FakeData from "./FakeData/index.js";

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
    type companies{
        companyId:String,
        companyName:String,
        email:String,
        phone:String,
        activityStatus:String,
        businessRegistrationNumber:String,
        legalEntityType:String,
        incorporationDate:String,
        nameOfLegalRepresentative:String,
        mainOfficeAddress:String,
        introduction:String
    },
    type internshipList{
        studentId: String,
        createDate:String,
        status: String,
        companie: companies
    }
    type Query {
        Companies: [companies],
        InternshipList: [internshipList]
    }
`;
const resolvers = {
  Query: {
    Companies: () => {
      return FakeData.companies;
    },
    InternshipList: () => {
      return FakeData.internshipList;
    },
  },
  internshipList: {
    companie: (parent, args) => {
      const companyId = parent.companyId;
      return FakeData.companies.find((id) => id.companyId === companyId);
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log("Server ready at http://localhost:4000");
