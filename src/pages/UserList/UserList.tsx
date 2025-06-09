import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/usersApi";
import UserSearch from "../../components/UserSearch/UserSearch"
import { useState } from "react";
import { Container, Stack } from "@mui/material";
import UserListSkeleton from "../../components/skeletons/UserListSkeleton/UserListSkeleton";
import UserTable2 from "../../components/UserTable/UserTable2";

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

    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSortByName = () => {
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newSortDirection);

        const sortedUsers = [...users].sort((a, b) => {
            const comparison = a.name.localeCompare(b.name);
            return newSortDirection === 'asc' ? comparison : -comparison;
        });

        setFilteredUsers(sortedUsers);
    }
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


        {
            isLoading ? (
                <UserListSkeleton />
            ) : (
                <Stack spacing={4}>
                    <UserSearch onSearch={handleSearch} />
                    <UserTable2 users={!filteredUsers.length ? users : filteredUsers} />

                </Stack>
            )
        }

    </Container>
    )
}