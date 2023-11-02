import express from 'express';
import http from 'http';
import { ApolloServer } from "@apollo/server"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import bodyParser from 'body-parser';
import { expressMiddleware } from "@apollo/server/express4"
import cors from 'cors';
import FakeData from './FakeData/index.js';

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
    type Student{
        id: String,
        name: String,
        dateOfBirth: String,
        department: Department
    }
    type Department{
        id: String,
        name: String
    }
    type Query {
        students: [Student]
    }
`;
const resolvers = {
    Query: {
        students: () => { return FakeData.students }
    },
    Student: {
        department: (parser, args) => { 
            const depId = parser.depId;
            return FakeData.departments.find(department => department.id === depId);
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})
await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log("Server ready at http://localhost:4000");