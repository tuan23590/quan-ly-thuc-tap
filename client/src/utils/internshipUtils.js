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
        status
        startDay
        endDay
      }
    }`;
      const data = await GraphQLrequest({ query });
      return data;
}


export const addSubscriberToInternship = async (internshipId,subscriber) =>{
  const query = `mutation AddSubscriberToInternship($internshipId: String!, $subscriber: String!) {
    addSubscriberToInternship(internshipId: $internshipId, subscriber: $subscriber)
  }`;
  const variables = {
    internshipId,
    subscriber
  };
    const data = await GraphQLrequest({ query,variables });
    return data;
}

export const setStatusIntern = async (internId,status) =>{
  const query = `mutation Mutation($internId: String!, $status: String!) {
    setStatusIntern(internId: $internId, status: $status)
  }`;
  const variables = {
    internId,
    status
  };
    const data = await GraphQLrequest({ query,variables });
    return data;
}
