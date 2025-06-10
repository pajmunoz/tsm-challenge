import { Box, Divider, Typography } from "@mui/material";
import PostCard from "../PostCard/PostCard";
import PostSkeleton from "../skeletons/PostSkeleton/PostSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getUsersIdPost } from "../../api/usersApi";
import { memo, useMemo } from "react";
import ErrorState from "../ErrorState/ErrorState";

const PostContainer = memo(function PostContainer({ id }: { id: string }) {
    //agrego un error boundary para manejar los errores
    const { data: posts = [], isLoading: isLoadingPosts, error, refetch } = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getUsersIdPost(id || ''),
        retry: 1,
    });
    //memoizeo los posts para evitar renderizados innecesarios
    const memoizedPosts = useMemo(() => posts.map((post: any) => (
        <PostCard key={post.id} post={post} />
    )), [posts]);

    //si hay un error, muestro un mensaje de error
    if (error) {
        return (
            <ErrorState 
                message={error instanceof Error ? error.message : 'Failed to load posts'} 
                onRetry={() => refetch()} 
            />
        );
    }

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
                        {memoizedPosts}
                    </Box>
                </>
            )}
        </>
    );
});

export default PostContainer;
