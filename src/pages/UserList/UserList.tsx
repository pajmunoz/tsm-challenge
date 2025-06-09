import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/usersApi";
import UserSearch from "../../components/UserSearch/UserSearch"
import { useState } from "react";
import { Container, Stack } from "@mui/material";
import UserListSkeleton from "../../components/skeletons/UserListSkeleton/UserListSkeleton";
import UserTable2 from "../../components/UserTable/UserTable";

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

    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = (field: string) => {
        //creo una constante para cambiar la direccion de la ordenacion
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        //actualizo la direccion de la ordenacion del state
        setSortDirection(newSortDirection);
        //ordeno los usuarios por el campo especifico
        const sortedUsers = [...users].sort((a, b) => {
            //obtengo tanto un objeto como un path y lo separo por puntos
            const getValue = (obj: any, path: string) => {
                return path.split('.').reduce((acc, part) => acc?.[part], obj);
            };

            const valueA = getValue(a, field);
            //console.log('valueA', valueA);
            const valueB = getValue(b, field);
            //console.log('valueB', valueB);
            //comparo los valores y devuelvo el resultado
            return newSortDirection === 'asc' 
                ? String(valueA).localeCompare(String(valueB))
                : String(valueB).localeCompare(String(valueA));
        });

        setFilteredUsers(sortedUsers);
    };

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

    return (<Container maxWidth="lg">


        {
            isLoading ? (
                <UserListSkeleton />
            ) : (
                <Stack spacing={4}>
                    <UserSearch onSearch={handleSearch} />
                    <UserTable2 
                        users={!filteredUsers.length ? users : filteredUsers} 
                        onSort={handleSort}
                    />

                </Stack>
            )
        }

    </Container>
    )
}