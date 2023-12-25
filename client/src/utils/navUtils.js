import { GraphQLrequest } from "./request";

export const navAdminLoader = async () =>{
    const query = `query Navs {
        Navs {
          type
          title
          path
          icon
        }
      }`
      const data = await GraphQLrequest({query});
      return data;
}

