import { Box, Card, CardContent, Skeleton, Stack, Typography } from "@mui/material";

export default function UserListSkeleton() {
    return (
        <Stack spacing={4}>
            <Typography component="div" variant={'h1'}>
                <Skeleton />
            </Typography>
            <Typography component="div" variant={'h3'}>
                <Skeleton />
            </Typography>
            <Stack
                useFlexGap
                sx={{
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    alignItems: "baseline",
                }}
                direction="row"
                spacing={{ xs: 1, sm: 2 }}
            >
                {[...Array(6)].map((_, index) => (
                    <Card
                        key={index}
                        sx={{
                            maxWidth: 260,
                            width: 260,
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <Skeleton variant="text" width="80%" height={40} sx={{ mb: 2 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                {[...Array(5)].map((_, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Skeleton variant="circular" width={20} height={20} />
                                        <Skeleton variant="text" width="70%" />
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Skeleton variant="rectangular" width={100} height={24} />
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    )
}
