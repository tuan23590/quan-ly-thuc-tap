export default{
    departments:[
        {
            id: "123",
            name: 'CNTT',
        },
        {
            id: "124",
            name: 'CNTP',
        },
    ],
    students:[
        {
            id: "1",
            name: 'Van A',
            dateOfBirth: '22/02/2002',
            depId: "123",
        },
        {
            id: "2",
            name: 'Van C',
            dateOfBirth: '22/02/2002',
            depId: "124",
        },
        {
            id: "3",
            name: 'Van D',
            dateOfBirth: '22/02/2002',
            depId: "123",
        },
    ],
    notes:[
        {
            id: "9",
            content: '<p>this is student 1<p/>',
            studentId: "2"
        },
        {
            id: "10",
            content: '<p>this is student 2<p/>',
            studentId: "1"
        }
    ]
}