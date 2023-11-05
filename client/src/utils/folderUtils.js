export const foldersLoader = async () => {
    const query = `query Students {
        students {
          id
          name
          dateOfBirth
        }
      }`;
    const res = await fetch('http://localhost:4000/graphql', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            query
        })
    });
    const { data } = await res.json();
    return data;
}