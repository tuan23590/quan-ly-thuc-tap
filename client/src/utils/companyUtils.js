import { GraphQLrequest } from "./request";

export const companyLoader = async () =>{
    const query = `query Companys {
        companys {
          companyName
          companyId
          email
          phone
          activityStatus
        }
      }`
      const data = await GraphQLrequest({query});
      return data;
}