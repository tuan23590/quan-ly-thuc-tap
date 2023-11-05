export const notesLoader = async ({params:{folderId}}) => {
    const query = `
    query Student($studentId: String) {
        student(studentId: $studentId) {
          id
          name
          notes {
            id
            content
          }
        }
      }
    `;
    const res = await fetch('http://localhost:4000/graphql', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            query,
            variables:{
                studentId : folderId
            }
        })
    });
    const { data } = await res.json();
    console.log({data})
    return data;
}