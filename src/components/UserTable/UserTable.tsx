import { Stack } from "@mui/material";
import UserCard from "../UserCard/UserCard";

export default function UserTable({ users }: { users: any[] }) {



    return (
        <Stack useFlexGap sx={{
            flexWrap: 'wrap', 
            justifyContent: "space-between",
            alignItems: "baseline",
        }} direction="row" spacing={{ xs: 1, sm: 2 }}>
            {users.map((user: any, index: number) => (


                <UserCard key={index} user={user} />



            ))}
        </Stack>
    )
}