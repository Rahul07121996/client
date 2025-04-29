import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

export default function ActivityCard(props) {
  return (
      <Card sx={{borderRadius:3}}>
        <CardContent>
            <Typography variant='h5'>{props.activity.title}</Typography>
            <Typography sx={{color:'text.secoundry',mb:1}}>{props.activity.date}</Typography>
            <Typography variant='body2'>{props.activity.description}</Typography>
            <Typography variant='subtitle1'>{props.activity.city} / {props.activity.venue}</Typography>
        </CardContent>
        <CardActions sx={{display:'flex',justifyContent:'space-between',pb:2}}>
        <Chip label={props.activity.category} variant='outlined'/>
        <Box sx={{display:'flex'}} gap={3}>
        <Button size='medium' variant='contained' 
           onClick={()=>props.SelectActivity(props.activity.id)}>View</Button>
          <Button size='medium' variant='contained'  color='error'
           onClick={()=>props.deleteActivity(props.activity.id)}>Delete</Button>
        </Box>
    
        </CardActions>
      </Card>
  )
}

