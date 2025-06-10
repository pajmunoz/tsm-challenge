import { Box, Button, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
}

export default function ErrorState({ message = 'Error occurred when fetching', onRetry }: ErrorStateProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px',
                padding: '2rem',
                textAlign: 'center'
            }}
        >
            <ErrorOutlineIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
            <Typography variant="h6" color="error" gutterBottom>
                Error
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {message}
            </Typography>
            {onRetry && (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<RefreshIcon />}
                    onClick={onRetry}
                >
                    Retry
                </Button>
            )}
        </Box>
    );
} 