import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

interface UserTableProps {
    users: User[];
    onSort: (field: string) => void;
}

const columns = [
    { field: 'name', label: 'Name' },
    { field: 'username', label: 'Username' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Phone' },
    { field: 'address.city', label: 'City' },
    { field: 'company.name', label: 'Company' }
];

export default function UserTable2({ users, onSort }: UserTableProps) {
    return (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.field}>
                                <Button 
                                    size="small" 
                                    variant="text" 
                                    onClick={() => onSort(column.field)}
                                >
                                    {column.label}
                                </Button>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.address.city}</TableCell>
                            <TableCell>{user.company.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
