import { Box } from '@mui/material'
import React from 'react'
import Nav from '../layout/Nav'
import { Outlet } from 'react-router'
import { useActivities } from '../lib/hooks/useActivities'

export default function MainHome() {
    const activityProps = useActivities();
    return (
        <Box sx={{ bgcolor: '#f4f4f4', minHeight: '100vh' }}>
            <Nav />
            <Outlet context={activityProps} />
        </Box>
    )
}
