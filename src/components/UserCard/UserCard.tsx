import { Card, CardActionArea, CardContent, Typography, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

export default function UserCard({ user }: { user: any }) {
    const userCardItems = [
        { icon: <PersonIcon color="action" />, value: user.username },
        { icon: <EmailIcon color="action" />, value: user.email },
        { icon: <PhoneIcon color="action" />, value: user.phone },
        { icon: <LocationOnIcon color="action" />, value: user.address?.city },
        { icon: <BusinessIcon color="action" />, value: user.company?.name },
    ];
    return (
        <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
            <Card 
                sx={{ 
                    maxWidth: 260,
                    width: 260,
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                }}
            >
                <CardActionArea sx={{ height: '100%' }}>
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="h5" 
                            component="div"
                            sx={{ 
                                fontWeight: 'bold',
                                color: '#1976d2',
                                marginBottom: '1rem'
                            }}
                        >
                            {user.name}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {userCardItems.map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {item.icon}
                                <Typography variant="body2" color="text.secondary">
                                    {item.value}
                                </Typography>
                            </Box>
                        ))}
                        </Box>

                        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip 
                                label="View Details" 
                                size="small" 
                                color="primary" 
                                variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}
