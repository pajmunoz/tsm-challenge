import { Autocomplete, TextField, Typography } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

interface UserSearchProps {
    onSearch: (searchTerm: string) => void;
    isLoading?: boolean;
}

export default function UserSearch({ onSearch }: UserSearchProps) {
    return (<>

        <Typography
            variant="h2"
            style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1976d2',
                marginTop: '3rem',
                textAlign: 'center'
            }}
        >
            User Directory
        </Typography>

        <Autocomplete
            freeSolo
            id="user-search"
            disableClearable
            options={[]}
            onChange={(_, value) => onSearch(value || '')}
            onInputChange={(_, value) => onSearch(value)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search users"
                    placeholder="Search by name, username, email or company"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            backgroundColor: 'white',
                            '&:hover': {
                                '& > fieldset': { borderColor: '#1976d2' },
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#1976d2',
                        },
                    }}
                />


            )}
        />


    </>
    )
}
