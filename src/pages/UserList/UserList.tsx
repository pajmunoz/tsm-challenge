import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/usersApi";
import UserSearch from "../../components/UserSearch/UserSearch"
import UserTable from "../../components/UserTable/UserTable"
import { useState } from "react";
import { Container, Stack} from "@mui/material";
import UserListSkeleton from "../../components/skeletons/UserListSkeleton/UserListSkeleton";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: {
        city: string;
    };
    company: {
        name: string;
    };
}

export default function UserList() {
    const { data: users = [], isLoading } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm) {
            setFilteredUsers(users);
            return;
        }

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (<Container maxWidth="md">
        <Stack spacing={4}>

            {
                isLoading ? (
                    <UserListSkeleton />
                ) : (
                    <Stack spacing={4}>
                        <UserSearch onSearch={handleSearch} />
                        <UserTable users={!filteredUsers.length ? users : filteredUsers} />
                    </Stack>
                )
            }
        </Stack>
    </Container>
    )
}