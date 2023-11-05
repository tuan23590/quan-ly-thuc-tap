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
        department: Department,
        notes: [Note]
    }
    type Note{
        id: String,
        content: String
    }
    type Department{
        id: String,
        name: String
    }
    type Query {
        students: [Student],
        student(studentId: String): Student
    }
`;
const resolvers = {
    Query: {
        students: () => { return FakeData.students },
        student: (parent,args)=>{  
            const studentId = args.studentId;
            return FakeData.students.find(student => student.id === studentId);
        }
    },
    Student: {
        department: (parent, args) => { 
            const depId = parent.depId;
            return FakeData.departments.find(department => department.id === depId);
        },
        notes: (parent, args) => { 
            return FakeData.notes.filter(note => note.studentId === parent.id);
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