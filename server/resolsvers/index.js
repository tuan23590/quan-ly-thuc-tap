import FakeData from '../FakeData/index.js';
import {companyModel, userModel} from '../models/index.js';
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
        console.log({newCompany});
        return newCompany;
      },
      register: async (parent,args) =>{
        const foundUser = await userModel.findOne({userId: args.userId});
        if(!foundUser){
          const newUser = new userModel(args);
          await newUser.save();
          return newUser;
        };
        return foundUser;
      }
    },
  };