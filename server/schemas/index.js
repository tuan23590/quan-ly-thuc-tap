export const typeDefs = `#graphql
    type company{
        companyId:String,
        companyName:String,
        email:String,
        phone:String,
        activityStatus:String,
        businessRegistrationNumber:String,
        legalEntityType:String,
        incorporationDate:String,
        nameOfLegalRepresentative:String,
        mainOfficeAddress:String,
        introduction:String
    },
    type internshipList{
        companyId: String,
        studentId: String,
        createDate:String,
        status: String,
        companie: company
    }
    type Query {
        companys: [company],
        InternshipList: [internshipList]
    }
    type Mutation {
        addCompany( 
            companyId:String,
            companyName:String,
            email:String,
            phone:String,
            activityStatus:String,
            businessRegistrationNumber:String,
            legalEntityType:String,
            incorporationDate:String,
            nameOfLegalRepresentative:String,
            mainOfficeAddress:String,
            introduction:String
            ): company
    }
`;
