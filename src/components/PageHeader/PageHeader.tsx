import { AppBar,Toolbar, Typography } from '@mui/material';

export default function PageHeader() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >Magic User List</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
