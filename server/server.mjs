import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import FakeData from "./FakeData/index.js";
import mongoose from 'mongoose';

import 'dotenv/config'

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
        companyId: String,
        studentId: String,
        createDate:String,
        status: String,
        companie: companies
    }
    type Query {
        company(companyId: String): companies,
        InternshipList: [internshipList]
    }
`;
const resolvers = {
  Query: {
    company: (parent,args) => {
      const id = args.companyId;
      return FakeData.companies.find(c => c.companyId = id);
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


//connect to DB
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fxyab4d.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

mongoose.connect(URI,{}).then(async() =>{
  console.log('Connect to DB');
  
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log("Server ready at http://localhost:4000");
});



