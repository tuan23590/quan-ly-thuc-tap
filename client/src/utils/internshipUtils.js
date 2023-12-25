import { GraphQLrequest } from "./request";
export const internshipLoader = async (internshipId,subscriber) =>{
    const query = `query Query {
      internships {
        internshipId
        companyId
        companyName
        position
        information
        subscribers
        avatarUrl
      }
    }`;
      const data = await GraphQLrequest({ query });
      return data;
}


