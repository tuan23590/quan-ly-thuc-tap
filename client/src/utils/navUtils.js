import { GraphQLrequest } from "./request";

export const navAdminLoader = async (type) =>{
    const query = `query Navs($type: String) {
      Navs(type: $type) {
        title
        path
        icon
        type
      }
    }`;
      const variables = {
        type
      };
      const data = await GraphQLrequest({query,variables});
      return data;
}

