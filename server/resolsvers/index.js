import FakeData from "../FakeData/index.js";
import {
  companyModel,
  userModel,
  configNavModel,
  internModel,
  internshipModel,
} from "../models/index.js";
export const resolvers = {
  Query: {
    companys: async (parent, args) => {
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
    Navs: async (parent, args) => {
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
  Mutation: {
    addCompany: async (parent, args) => {
      const newCompany = new companyModel(args);
      await newCompany.save();
      return newCompany;
    },
    addSubscriberToInternship: async (parent, args) => {
      const internshipId = args.internshipId;
      const subscriber = args.subscriber;
      // Tìm internship theo internshipId
      const internship = await internshipModel.findOne({ internshipId });
      if (!subscriber) {
        return "null";
      }
      if (!internship) {
        return "not found";
      }
      // Kiểm tra xem subscriber đã tồn tại trong các internships khác hay không
      const existingInternshipWithSubscriber = await internshipModel.findOne({
        _id: { $ne: internship._id }, // Loại trừ internship hiện tại
        subscribers: subscriber,
      });

      if (existingInternshipWithSubscriber) {
        return "exist other";
      }
      if (!internship.subscribers.includes(subscriber)) {
        internship.subscribers.push(subscriber);
        await internship.save();
        return "success";
      } else {
        return "exist";
      }
    },
    register: async (parent, args) => {
      console.log("register function");
      const foundUser = await userModel.findOne({ userId: args.userId });
      if (!foundUser) {
        const newUser = new userModel(args);
        await newUser.save();
        console.log("register");
        return newUser;
      }
      console.log("exit uesr");
      return foundUser;
    },
  },
};
