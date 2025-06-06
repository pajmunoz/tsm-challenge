
import { Card, CardContent, Typography } from "@mui/material";

export default function PostCard({post}:{post:any}) {
    return (
        <Card variant="outlined" key={post.id}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2">
                    {post.body}
                </Typography>
            </CardContent>


        </Card>
    )
}
