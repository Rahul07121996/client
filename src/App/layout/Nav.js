import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';
export default function Nav({openForm}={}) {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{
                    backgroundImage: {
                        xs: 'none', // optional: fallback for small screens
                        sm: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
                    }
                }}
            >
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                   <Box>
                    <MenuItem sx={{display:'flex',gap:2}}>
                    <Group fontSize='large'/>
                    <Typography variant='h6' fontWeight='bold'>Reactivities</Typography>
                    </MenuItem>
                   </Box>
                   <Box sx={{display:'flex'}}>
                     <MenuItem sx={{fontSize:'1rem',textTransform:'uppercase',fontWeight:'bold'}}>
                       Activities
                     </MenuItem>
                     <MenuItem sx={{fontSize:'1rem',textTransform:'uppercase',fontWeight:'bold'}}>
                     About
                     </MenuItem>
                     <MenuItem sx={{fontSize:'1rem',textTransform:'uppercase',fontWeight:'bold'}}>
                       Contact
                     </MenuItem>
                   </Box>
                   <Button size='medium' variant='contained' color='warning'
                     onClick={openForm}
                   >
                    Create activity
                   </Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}
