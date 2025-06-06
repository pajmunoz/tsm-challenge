const domain = 'https://jsonplaceholder.typicode.com/';
const apiUrl = `${domain}`;

export const getUsers = async () => {
    const response = await fetch(`${apiUrl}/users`);
    if (!response.ok) {
        console.error("Error fetching users:", response.statusText);
        throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return response.json();
}