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

export default function UserDetailContainer({ id }: { id: string }) {

    const { data: user = [], isLoading } = useQuery({
        queryKey: ['users', id],
        queryFn: () => getUsersId(id || ''),
    });

    const userInfoItems = [
        { icon: <PersonIcon color="action" />, value: user.username },
        { icon: <EmailIcon color="action" />, value: user.email },
        { icon: <PhoneIcon color="action" />, value: user.phone },
        { icon: <LocationOnIcon color="action" />, value: user.address?.city },
        { icon: <BusinessIcon color="action" />, value: user.company?.name },
        { icon: <LanguageIcon color="action" />, value: user.website },
    ];

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
                <Box sx={{ display: 'flex', gap: 2, flexDirection: {  xs: 'column', sm: 'row' } }}>
                    <Box sx={{ flex: 1, width: '100%', height: '200px' }}>
                        <img src={'https://i.pravatar.cc/300'} alt={user.name} style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }} />
                    </Box>
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
                <Box sx={{ marginTop: '2rem', marginBottom: '2rem'}}>
                    <iframe style={{ borderRadius: '10px' }} width="100%" height="250" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">Mapa de población</a></iframe>
                </Box>
            </>)
    )
}
