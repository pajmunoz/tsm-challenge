import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from "@tanstack/react-query";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import { getUsersId } from "../../api/usersApi";
import UserInfoSkeleton from "../skeletons/UserInfoSkeleton/UserInfoSkeleton";
import ErrorState from "../ErrorState/ErrorState";

export default function UserDetailContainer({ id }: { id: string }) {
    //agrego  error boundary
    const { data: user = [], isLoading, error, refetch } = useQuery({
        queryKey: ['users', id],
        queryFn: () => getUsersId(id || ''),
        retry: 1,
    });

    const userInfoItems = [
        { icon: <PersonIcon color="action" />, value: user.username },
        { icon: <EmailIcon color="action" />, value: user.email },
        { icon: <PhoneIcon color="action" />, value: user.phone },
        { icon: <LocationOnIcon color="action" />, value: user.address?.city },
        { icon: <BusinessIcon color="action" />, value: user.company?.name },
        { icon: <LanguageIcon color="action" />, value: user.website },
    ];

    //si hay un error, muestro mensaje de error y recargo
    if (error) {
        return (
            <ErrorState 
                message={error instanceof Error ? error.message : 'Failed to load user details'} 
                onRetry={() => refetch()} 
            />
        );
    }

    return (
        isLoading ? (
            <UserInfoSkeleton indexOfItem={userInfoItems.length} />
        ) : (
            <>
                <Stack direction="row" spacing={2}>
                    <Link to="/#">
                        <Button size="small" startIcon={<ArrowBackIcon />}>
                            Back
                        </Button>
                    </Link>
                </Stack>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" color="text.secondary" sx={{ marginTop: '.5rem' }}>
                        {user.name}
                    </Typography>
                </Box>
                <Divider sx={{ margin: '1rem 0' }} />
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {userInfoItems.map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {item.icon}
                                <Typography variant="body2" color="text.secondary">
                                    {item.value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </>
        )
    );
}
