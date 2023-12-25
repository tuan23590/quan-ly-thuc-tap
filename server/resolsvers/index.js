import FakeData from '../FakeData/index.js';
import {companyModel, userModel,configNavModel,internModel,internshipModel} from '../models/index.js';
export const resolvers = {
    Query: {
      companys:async (parent,args) => {
        const companys = await companyModel.find();
        return companys;
      },
      internships: async () => {
        const internship = await internshipModel.find();
        return internship;
      },
      Users: async () => {
        const users = await userModel.find();
        return users;
      },
      Navs: async (parent,args) => {
        const typeFilter = args.type ? { type: args.type } : {};
        const navs = await configNavModel.find(typeFilter);
        return navs;
      },
      Interns: async () => {
        const intern = await internModel.find();
        return intern;
      },
    },
    // internships: {
    //   companie: (parent, args) => {
    //     const companyId = parent.companyId;
    //     return FakeData.company.find((id) => id.companyId === companyId);
    //   },
    // },
    Mutation:{
      addCompany: async (parent,args)=>{
        const newCompany = new companyModel(args);
        await newCompany.save();
        return newCompany;
      },
      addSubscriberToInternship: async (parent,args)=>{
        const internshipId = args.internshipId;
        const subscribers = args.subscriber;
        const internship = await internshipModel.findOne({ internshipId });
        internship.subscribers.push(subscribers);
        await internship.save();
        return internship;
      },
      register: async (parent,args) =>{
        console.log('register function');
        const foundUser = await userModel.findOne({userId: args.userId});
        if(!foundUser){
          const newUser = new userModel(args);
          await newUser.save();
          console.log('register');
          return newUser;
        };
        console.log('exit uesr');
        return foundUser;
      }
    },
  };