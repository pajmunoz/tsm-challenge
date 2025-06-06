import { Grid } from "@mui/material";
import UserCard from "../UserCard/UserCard";
import { getUsers } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";

export default function UserTable() {
    const { data: main = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    if (isLoading) return <div>Loading...</div>;
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {main.map((user: any, index: number) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
    )
}