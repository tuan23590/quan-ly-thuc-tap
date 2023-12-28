import { GraphQLrequest } from "./request";

export const findInternsByUid = async (uid) =>{
  console.log('[uid]',uid);
    const query = `query FindInternsByUid($uid: String) {
      findInternsByUid(uid: $uid) {
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
    const variables = {
        uid
    };
      const data = await GraphQLrequest({ query,variables });
      return data;
  }
  