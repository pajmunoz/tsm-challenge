import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


export default function UserCard({ user }: { user: any }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {user.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.username}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {user.phone}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {user.email}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="i">
                        {user.address.city}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {user.company.name}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}
