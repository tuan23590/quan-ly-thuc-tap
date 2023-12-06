import FakeData from '../FakeData/index.js';
import {companyModel} from '../models/index.js';
export const resolvers = {
    Query: {
      companys:async (parent,args,context) => {
        const companys = await companyModel.find();
        console.log({context});
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
      }
    }
  };