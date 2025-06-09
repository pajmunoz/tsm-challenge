import { Box, Divider, Skeleton, Stack } from "@mui/material";

export default function UserInfoSkeleton() {
    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
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

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Skeleton 
                        variant="text" 
                        width={200} 
                        height={40} 
                        sx={{ 
                            animation: 'pulse 1.5s ease-in-out infinite',
                            transform: 'scale(1)'
                        }} 
                    />
                </Box>
                <Divider sx={{ margin: '.2rem 0' }} />

                {[...Array(5)].map((_, index) => (
                    <Box 
                        key={index} 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            opacity: 1 - (index * 0.1) // Gradually reduce opacity for a staggered effect
                        }}
                    >
                        <Skeleton 
                            variant="circular" 
                            width={24} 
                            height={24} 
                            sx={{ 
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: `${index * 0.1}s`
                            }} 
                        />
                        <Skeleton 
                            variant="text" 
                            width={`${60 + (index * 5)}%`} 
                            height={24}
                            sx={{ 
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: `${index * 0.1}s`
                            }} 
                        />
                    </Box>
                ))}
            </Box>
        </Stack>
    )
}
