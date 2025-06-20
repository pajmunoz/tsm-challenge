import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/usersApi";
import UserSearch from "../../components/UserSearch/UserSearch"
import { useState, useEffect } from "react";
import { Container, Stack } from "@mui/material";
import UserTableSkeleton from "../../components/skeletons/UserTableSkeleton/UserTableSkeleton";
import UserTable from "../../components/UserTable/UserTable";
import ErrorState from "../../components/ErrorState/ErrorState";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

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
    //uso react query para obtener los usuarios y evita hacer peticiones innecesarias
    const { data: users = [], isLoading, error, refetch } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
        retry: 1,
    });

    const [sortDirection, setSortDirection] = useState('asc');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    // Actualizo el estado de los usuarios cuando se carga el sitio
    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const handleSort = (field: string) => {
        if (!filteredUsers.length) {
            setSortDirection('');
            return;
        }

        //creo una constante para cambiar la direccion de la ordenacion
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        //actualizo la direccion de la ordenacion del state
        setSortDirection(newSortDirection);
        //ordeno los usuarios por el campo especifico
        const sortedUsers = [...filteredUsers].sort((a, b) => {
            //obtengo tanto un objeto como un path y lo separo por puntos
            const getValue = (obj: any, path: string) => {
                return path.split('.').reduce((acc, part) => acc?.[part], obj);
            };

            const valueA = getValue(a, field);
            const valueB = getValue(b, field);
            //comparo los valores y devuelvo el resultado
            return newSortDirection === 'asc'
                ? String(valueA).localeCompare(String(valueB))
                : String(valueB).localeCompare(String(valueA));
        });

        setFilteredUsers(sortedUsers);
    };

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm) {
            setFilteredUsers(users);
            return;
        }
        //filtro los usuarios por el nombre, username, email y company name
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    //si hay un error, mostrar menjase, y envuelvo html con ErrorBoundary
    if (error) {
        return (
            <ErrorState 
                message={error instanceof Error ? error.message : 'Failed to load users'} 
                onRetry={() => refetch()} 
            />
        );
    }

    return (
        <ErrorBoundary>
            <Container maxWidth="lg">
                {isLoading ? (
                    <UserTableSkeleton />
                ) : (
                    <Stack spacing={4}>
                        <UserSearch onSearch={handleSearch} />
                        <UserTable
                            users={filteredUsers}
                            onSort={handleSort}
                        />
                    </Stack>
                )}
            </Container>
        </ErrorBoundary>
    );
}