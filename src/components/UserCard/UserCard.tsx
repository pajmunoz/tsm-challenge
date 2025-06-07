import { Card, CardActionArea, CardContent, Typography, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

export default function UserCard({ user }: { user: any }) {
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PersonIcon color="action" />
                                <Typography variant="body2" color="text.secondary">
                                    {user.username}
                                </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon color="action" />
                                <Typography variant="body2" color="text.secondary">
                                    {user.email}
                                </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhoneIcon color="action" />
                                <Typography variant="body2" color="text.secondary">
                                    {user.phone}
                                </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnIcon color="action" />
                                <Typography variant="body2" color="text.secondary">
                                    {user.address.city}
                                </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BusinessIcon color="action" />
                                <Typography variant="body2" color="text.secondary">
                                    {user.company.name}
                                </Typography>
                            </Box>
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
