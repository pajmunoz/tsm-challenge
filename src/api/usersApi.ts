const domain = 'https://jsonplaceholder.typicode.com/';
//descomentar para testear el error boundary
//const domain = 'https://google.typicode.com/';
const apiUrl = `${domain}`;

export const getUsers = async () => {
    const response = await fetch(`${apiUrl}users`);
    if (!response.ok) {
        console.error("Error fetching users:", response.statusText);
        throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return response.json();
}

export const getUsersId = async (id: string) => {
    const response = await fetch(`${apiUrl}users/${id}`);
    if (!response.ok) {
        console.error("Error fetching users id:", response.statusText);
        throw new Error(`Failed to fetch users id: ${response.statusText}`);
    }
    return response.json();
}

export const getUsersIdPost = async (id: string) => {
    const response = await fetch(`${apiUrl}users/${id}/posts`);
    if (!response.ok) {
        console.error("Error fetching users posts:", response.statusText);
        throw new Error(`Failed to fetch users posts: ${response.statusText}`);
    }
    return response.json();
}