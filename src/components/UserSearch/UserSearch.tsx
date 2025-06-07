import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

interface UserSearchProps {
    users: any[];
    onSearch: (searchTerm: string) => void;
}

export default function UserSearch({ users, onSearch }: UserSearchProps) {
    return (
        <>
            <Typography variant="h3">User List</Typography>

            <Stack spacing={2} sx={{ width: 300, margin: '20px' }}>
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
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    type: 'search',
                                },
                            }}
                        />
                    )}
                />
            </Stack>
        </>
    )
}
