export default{
   company:[
        {
            companyId: "C123456",
            companyName: "Example Company",
            email: "info@example.com",
            phone: "123-456-7890",
            activityStatus: "Active",
            businessRegistrationNumber: "BRN123456",
            legalEntityType: "Corporation",
            incorporationDate:"2000-01-01T00:00:00.000Z",
            nameOfLegalRepresentative: "John Doe",
            mainOfficeAddress: "123 Business Street, City A",
            introduction: "A brief introduction about the company"
          },
          {
            companyId: "C123457",
            companyName: "Another Company_test",
            email: "info@another.com",
            phone: "987-654-3210",
            activityStatus: "Active",
            businessRegistrationNumber: "BRN123457",
            legalEntityType: "LLC",
            incorporationDate: "2005-03-15T00:00:00.000Z",
            nameOfLegalRepresentative: "Jane Smith",
            mainOfficeAddress: "456 Corporate Lane, City B",
            introduction: "A different introduction about the company"
          },
          {
            companyId: "C123458",
            companyName: "Yet Another Company",
            email: "info@yetanother.com",
            phone: "555-123-4567",
            activityStatus: "Inactive",
            businessRegistrationNumber: "BRN123458",
            legalEntityType: "Partnership",
            incorporationDate: "2010-08-20T00:00:00.000Z",
            nameOfLegalRepresentative: "Bob Johnson",
            mainOfficeAddress: "789 Commercial Blvd, City C",
            introduction: "Another introduction for a different company"
          },
          {
            companyId: "C123459",
            companyName: "NewCo",
            email: "info@newco.com",
            phone: "111-222-3333",
            activityStatus: "Active",
            businessRegistrationNumber: "BRN123459",
            legalEntityType: "Sole Proprietorship",
            incorporationDate: "2018-05-10T00:00:00.000Z",
            nameOfLegalRepresentative: "Alice Williams",
            mainOfficeAddress: "321 Business Avenue, City D",
            introduction: "Introducing a new company with a new introduction"
          }
    ],
    interns:[
        {
            accountId: "123456",
            educationalInformation: {
              name: "John Doe",
              gender: "Male",
              class: "A101",
              department: "Computer Science",
              specialization: "Software Engineering",
              course: "Bachelor"
            },
            personalInformation: {
              birthday: "1995-01-15T00:00:00.000Z",
              citizenId: "A123456",
              issueDate:"2015-02-20T00:00:00.000Z",
              placeOfIssue: "City A",
              ethnicity: "Some Ethnicity",
              religion: "Some Religion",
              phoneNumber: "123-456-7890",
              email: "john.doe@example.com",
              permanentAddress: "123 Main Street, City A"
            },
            GPA: 3.75,
            studentId: "2001200123"
          },
    ],
    internshipList:[
        {
            studentId: "2001200123",
            companyId: "C123457",
            createDate:"2023-01-15T00:00:00.000Z",
            status: "Đang thực tập"
        },
    ],
}


