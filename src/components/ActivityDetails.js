import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchActivityById } from '../ActivityApi/activityApi';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function ActivityDetails() {
    const {id} = useParams();
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{
      const loadActivitiesDeatils = async()=>{
         try {
            const data = await fetchActivityById(id);
            setActivity(data);
         } catch (error) {
            console.error('Error loading activity:', error);
         }finally{
            setLoading(false);
         }
      }

      loadActivitiesDeatils(); 
  },[id])

  if (loading) {
    return <CircularProgress />;
  }
  if (!activity) {
    return <Typography variant="h6">Activity not found</Typography>;
  }
  const imageUrl = `/Images/CategoryImages/${activity.category}.jpg`;
  return (
    <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 2 }}>
        <Box
        component="img"
        src={imageUrl}
        alt={activity.category}
        sx={{
          width: '50%',
          height: 300,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 2,
        }}
      />
      <Typography variant="h4" gutterBottom>{activity.title}</Typography>
      <Typography><strong>Date:</strong> {new Date(activity.date).toLocaleDateString()}</Typography>
      <Typography><strong>Description:</strong> {activity.description}</Typography>
      <Typography><strong>Category:</strong> {activity.category}</Typography>
      <Typography><strong>City:</strong> {activity.city}</Typography>
      <Typography><strong>Venue:</strong> {activity.venue}</Typography>
      <Typography><strong>Cancelled:</strong> {activity.isCancelled ? 'Yes' : 'No'}</Typography>
    </Box>
  )
}
