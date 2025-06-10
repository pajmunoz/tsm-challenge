import { Box, Card, CardContent, Divider, Skeleton, Stack } from "@mui/material";

export default function PostSkeleton({ indexOfItem }: { indexOfItem: number }) {
    return (
        <>
            <Stack direction="row" spacing={2} sx={{ marginTop: '2rem' }}>
                <Skeleton
                    variant="rectangular"
                    width={100}
                    height={36}
                    sx={{
                        borderRadius: 1,
                        animation: 'pulse 1.5s ease-in-out infinite'
                    }}
                />
            </Stack>
            <Divider sx={{ margin: '1rem 0' }} />
            {[...Array(indexOfItem)].map((_, index) => (

                <Card
                    key={index}

                    sx={{
                        marginTop:'2rem',
                        opacity: 1 - (index * 0.1),
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                        }
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <Skeleton
                                variant="circular"
                                width={24}
                                height={24}
                                sx={{
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: '0.1s'
                                }}
                            />
                            <Skeleton
                                variant="text"
                                width="80%"
                                height={40}
                                sx={{
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: '0.2s'
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                                sx={{
                                    mt: 0.5,
                                    animation: 'pulse 1.5s ease-in-out infinite',
                                    animationDelay: '0.3s'
                                }}
                            />
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Skeleton
                                    variant="text"
                                    width="90%"
                                    height={20}
                                    sx={{
                                        animation: 'pulse 1.5s ease-in-out infinite',
                                        animationDelay: '0.4s'
                                    }}
                                />
                                <Skeleton
                                    variant="text"
                                    width="85%"
                                    height={20}
                                    sx={{
                                        animation: 'pulse 1.5s ease-in-out infinite',
                                        animationDelay: '0.5s'
                                    }}
                                />
                                <Skeleton
                                    variant="text"
                                    width="70%"
                                    height={20}
                                    sx={{
                                        animation: 'pulse 1.5s ease-in-out infinite',
                                        animationDelay: '0.6s'
                                    }}
                                />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}
