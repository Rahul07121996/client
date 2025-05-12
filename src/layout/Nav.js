import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Nav() {



    return (
        <AppBar position="static" sx={{ mb: 2 }}>
            <Toolbar>
                <Typography component={Link}
                          to={`/`}
                 variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} >
                    Activity Manager
                </Typography>
                { (
                    <Button component={Link}
                        to="/create"
                     color="inherit" variant="outlined">
                        Create Activity
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
