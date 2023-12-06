import { GRAPHQL_SERVER } from "./constants";

export const GraphQLrequest = async (payLoad,options ={})=>{
    const res = await fetch(`${GRAPHQL_SERVER}/graphql`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payLoad)
      });
      const {data} = await res.json();
      return data;
};