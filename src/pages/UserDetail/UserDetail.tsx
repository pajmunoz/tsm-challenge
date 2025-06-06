import { useParams } from "react-router-dom";
import { getUsersId, getUsersIdPost } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";

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
        <>
            {isLoading ? <div>Loading...</div> : (
                <div>
                    <h1>{user.name}</h1>
                </div>
            )}
            <div>
                <h1>Posts</h1>
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
                            <PostCard post={post} />
                        ))}
                    </Box>
                )}
            </div>
        </>
    )
}
