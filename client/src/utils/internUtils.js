import { GraphQLrequest } from "./request";

export const internLoader = async () =>{
    const query = `query Interns {
      Interns {
        internId
        userId
        internName
        dateOfBirth
        classOfIntern
        department
        phone
        email
        avatarUrl
        status
      }
    }`;
      const data = await GraphQLrequest({query});
      return data;
}

