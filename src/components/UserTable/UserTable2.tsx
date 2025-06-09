import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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

interface UserTable2Props {
    users: User[];
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'actions',
        headerName: 'Link',
        width: 150,
        renderCell: (params: GridRenderCellParams<User>) => <Link to={`/user/${params.row.id}`}><Button size="small" variant="text">View More</Button> </Link>
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    {
        field: 'city',
        headerName: 'City',
        width: 130,
        renderCell: (params: GridRenderCellParams<User>) => params.row.address?.city || ''
    },
    {
        field: 'company',
        headerName: 'Company',
        width: 150,
        renderCell: (params: GridRenderCellParams<User>) => params.row.company?.name || ''
    },

];

export default function UserTable2({ users }: UserTable2Props) {
    return (
        <Box sx={{ height: 500, width: '100%', mt: 2 }}>

            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 25]}
                checkboxSelection={false}
                disableRowSelectionOnClick={true}
            />

        </Box>
    );
}
