import { Grid } from "@mui/material";
import UserCard from "../UserCard/UserCard";

export default function UserTable({ users }: { users: any[] }) {



    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {users.map((user: any, index: number) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
    )
}