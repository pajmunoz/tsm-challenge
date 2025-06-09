import { Card, CardContent, Typography, Box } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostCard({ post }: { post: Post }) {
    return (
        <Card 
            sx={{ 
                maxWidth: '100%',
                width: '100%',
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
            }}
        >
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <ArticleIcon color="primary" />
                    <Typography 
                        variant="h6" 
                        component="div"
                        sx={{ 
                            fontWeight: 'bold',
                            color: '#1976d2',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical'
                        }}
                    >
                        {post.title}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <FormatQuoteIcon 
                        color="action" 
                        sx={{ 
                            fontSize: '1.2rem',
                            mt: 0.5,
                            color: '#666'
                        }} 
                    />
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            lineHeight: 1.5
                        }}
                    >
                        {post.body}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
