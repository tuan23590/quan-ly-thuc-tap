import FakeData from '../FakeData/index.js';
import {companyModel, userModel,configNavModel} from '../models/index.js';
export const resolvers = {
    Query: {
      companys:async (parent,args) => {
        const companys = await companyModel.find();
        //console.log({context});
        return companys;
      },
      InternshipList: () => {
        return FakeData.internshipList;
      },
      Users: async (parent,args) => {
        const users = await userModel.find();
        return users;
      },
      Navs: async (parent,args) => {
        const navs = await configNavModel.find();
        return navs;
      },
    },
    internshipList: {
      companie: (parent, args) => {
        const companyId = parent.companyId;
        return FakeData.company.find((id) => id.companyId === companyId);
      },
    },
    Mutation:{
      addCompany: async (parent,args)=>{
        const newCompany = new companyModel(args);
        await newCompany.save();
        return newCompany;
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