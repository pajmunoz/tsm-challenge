import { Link, useParams } from "react-router-dom";
import { getUsersId, getUsersIdPost } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function UserDetail() {
    const { id } = useParams();

    const { data: user = [], isLoading } = useQuery({
        queryKey: ['users', id],
        queryFn: () => getUsersId(id || ''),
    });

    const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getUsersIdPost(id || ''),
    });

    return (
        <Container maxWidth="md" sx={{ marginTop: '2.5em' }}>
            {isLoading ? <div>Loading...</div> : (
                <div>
                    <Stack direction="row" spacing={2}>
                        <Link
                            to="/"
                        >
                            <Button size="small" startIcon={<ArrowBackIcon />}>
                                Volver
                            </Button>
                        </Link>
                    </Stack>


                    <Typography variant="h3">{user.name}</Typography>

                </div>
            )}
            <div>
                <Typography variant="h4">Posts</Typography>
                {isLoadingPosts ? <div>Loading...</div> : (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                            gap: 2,
                        }}
                    >
                        {posts.map((post: any) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </Box>
                )}
            </div>
        </Container>
    )
}
