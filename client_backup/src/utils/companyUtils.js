import { GraphQLrequest } from "./request";

export const companyLoader = async () =>{
    const query = `query Query {
      companys {
        companyId
        companyName
        email
        phone
        activityStatus
        businessRegistrationNumber
        legalEntityType
        incorporationDate
        nameOfLegalRepresentative
        mainOfficeAddress
        introduction
        avatarUrl
      }
    }`
      const data = await GraphQLrequest({query});
      return data;
}

