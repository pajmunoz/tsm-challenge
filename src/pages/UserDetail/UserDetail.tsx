import { Link, useParams } from "react-router-dom";
import { getUsersId, getUsersIdPost } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

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


                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h6" color="text.secondary" sx={{ marginTop: '2rem' }}>
                                {user.name}
                            </Typography>
                        </Box>
                        <Divider sx={{ margin: '.2rem 0' }} />

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PersonIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.username}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <EmailIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.email}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PhoneIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.phone}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocationOnIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.address.city}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <BusinessIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.company.name}
                            </Typography>
                        </Box>
                    </Box>

                </div>
            )}

            <div>
                <Typography variant="h6" color="text.secondary" sx={{ marginTop: '2rem' }}>Posts</Typography>
                <Divider sx={{ margin: '1rem 0' }} />
                {isLoadingPosts ? <div>Loading...</div> : (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
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
