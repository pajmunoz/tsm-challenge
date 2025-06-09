import { Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function UserListSkeleton() {
    return (
        <Stack spacing={4}>
            <Typography component="div" variant={'h3'} sx={{ paddingTop: '2rem', paddingBottom: '0', marginBottom: '0' }}>
                <Skeleton />
            </Typography>
            <Typography component="div" variant={'h1'} sx={{ paddingTop: '0' }}>
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

                <TableContainer component={Paper} sx={{ margin: '1rem 0', boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {[...Array(6)].map((_, index) => (
                                    <TableCell key={index}>
                                        <Skeleton
                                            variant="text"
                                            width={100}
                                            height={40}
                                            animation="wave"
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[...Array(5)].map((_, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {[...Array(6)].map((_, colIndex) => (
                                        <TableCell key={colIndex}>
                                            <Skeleton
                                                variant="text"
                                                width="80%"
                                                height={24}
                                                animation="wave"
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Stack>
    )
}
