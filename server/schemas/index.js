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
        introduction:String,
        avatarUrl :String,
    },
    type internshipList{
        companyId: String,
        studentId: String,
        createDate:String,
        status: String,
        companie: company
    },
    type user{
        userId: String,
        userName: String,
        token: String,
        sessionKey: String,
        email: String,
        type: String,
        avatarUrl :String,
    },
    type nav{
        title: String,
        path: String,
        icon: String,
        type: String
    },
     type Query {
        companys: [company],
        InternshipList: [internshipList],
        Users: [user],
        Navs: [nav]
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
            introduction:String,
            avatarUrl :String,
            ): company,
            register(userId: String!,userName: String,email: String,role: String,avatarUrl: String): user
    },
    
`;
