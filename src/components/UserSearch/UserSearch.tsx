import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface UserSearchProps {
    onSearch: (searchTerm: string) => void;
}

export default function UserSearch({ onSearch }: UserSearchProps) {
    return (


        <Stack spacing={3} sx={{ width: '100%', padding: '2rem' }}>
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#1976d2',
                    marginBottom: '1rem'
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
        </Stack>

    )
}
