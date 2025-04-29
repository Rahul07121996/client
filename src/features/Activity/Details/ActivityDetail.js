import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ActivityDetail(props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component='img' src={`/Images/CategoryImages/${props.activity.category}.jpg`} />
            <CardContent>
                <Typography variant='h5'>{props.activity.title}</Typography>
                <Typography variant='subtitle1' fontWeight='light'>{props.activity.date}</Typography>
                <Typography variant='body1'>{props.activity.description}</Typography>
            </CardContent>
             <CardActions>
                <Button color='primary' onClick={()=>props.openForm(props.activity.id)}>Edit</Button>
                <Button color='inherit' onClick={()=>props.CancelSelectActivity()}>Cancel</Button>
             </CardActions>
        </Card>
    )
}
