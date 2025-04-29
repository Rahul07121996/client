import { Box } from '@mui/material'
import React from 'react'
import ActivityCard from './ActivityCard'

export default function ActivityList(props) {
  return (
     <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
       {
         props.activities.map((item)=>(
            <ActivityCard key={item.id} activity={item}
            SelectActivity={props.SelectActivity}
            deleteActivity={props.deleteActivity}
            />
        ))
       }
     </Box>
  )
}
