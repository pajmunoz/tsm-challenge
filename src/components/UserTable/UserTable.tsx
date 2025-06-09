import { Button, Typography } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { useNavigate } from 'react-router-dom';
import './UserTable.css';

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

export default function UserTable({ users, onSort }: UserTableProps) {
    const navigate = useNavigate();
    const getValue = (obj: any, path: string) => {
        return path.split('.').reduce((acc, part) => acc?.[part], obj);
    };

    const handleNavigate = (id: number) => {
        navigate(`/user/${id}`);
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.field}>
                                <Button
                                    size="small"
                                    variant="text"
                                    onClick={() => onSort(column.field)}
                                    startIcon={<SortIcon />}
                                >
                                    {column.label}
                                </Button>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} onClick={() => handleNavigate(user.id)}>
                            {columns.map((column) => (
                                <td key={column.field}>
                                    <Typography variant="body2" component="p">
                                        {getValue(user, column.field)}
                                    </Typography>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
