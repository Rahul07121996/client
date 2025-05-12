import { Button, List, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { Link, useOutletContext } from 'react-router';

export default function ActivityList() {
    const { activities, handleDelete } = useOutletContext();
   
  return (
    <div>
        <Button variant="contained" component={Link}
                        to="/create"
        >Add Activity</Button>
       <List>
                {activities.map(activity => (
                    <ListItem key={activity.id} divider>
                        <ListItemText component={Link}
                            to={`/details/${activity.id}`}
                            primary={activity.title}
                            secondary={activity.description}
                            
                        />
                        <Button component={Link}
                        to={`/edit/${activity.id}`}
                       >Edit</Button>
                        <Button component={Link}
                        to="/create"
                         onClick={() => handleDelete(activity.id)} color="error">Delete</Button>
                    </ListItem>
                ))}
            </List>
    </div>
  )
}
