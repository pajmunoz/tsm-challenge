import { Box, Divider, Typography } from "@mui/material";
import PostCard from "../PostCard/PostCard";
import PostSkeleton from "../skeletons/PostSkeleton/PostSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getUsersIdPost } from "../../api/usersApi";

export default function PostContainer({ id }: { id: string }) {

    const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getUsersIdPost(id || ''),
    });
    return (
        <>
            {isLoadingPosts ? (

                <PostSkeleton indexOfItem={posts.length || 4} />

            ) : (
                <>
                    <Typography variant="h6" color="text.secondary" sx={{ marginTop: '2rem' }}>Posts</Typography>
                    <Divider sx={{ margin: '1rem 0' }} />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(800px, 100%), 1fr))',
                            gap: 2,
                        }}
                    >
                        {posts.map((post: any) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </Box>
                </>
            )}
        </>
    )

}
