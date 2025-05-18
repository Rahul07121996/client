import { Avatar, Button, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router';
import { toast } from 'react-toastify';
import ConfirmDialog from '../App/layout/ConfirmDialog';

export default function ActivityList() {
    const { activities, removeActivity } = useOutletContext();
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setConfirmOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await removeActivity(selectedId);
            toast.success("delete succesfully")
            setConfirmOpen(false);
        } catch (error) {
            console.error("Delete failed", error);
        }
    };
  

    return (
        <div>
            {/* <Button variant="contained" component={Link}
                        to="/create"
        >Add Activity</Button> */}
            <List>
                {activities.map(activity => (

                    <ListItem key={activity.id} divider>
                        <Avatar
                            src={`/Images/categoryImages/${activity.category}.jpg`}
                            alt={activity.category}
                            variant="rounded"
                            sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <ListItemText component={Link}
                            to={`/details/${activity.id}`}
                            primary={activity.title}
                            secondary={activity.description}

                        />
                        <Button component={Link} variant='outlined'
                            to={`/edit/${activity.id}`} sx={{ mr: 1 }}
                        >Edit</Button>
                        <Button variant='outlined' 
                            onClick={() => handleDeleteClick(activity.id)} color="error">Delete</Button>
                    </ListItem>
                ))}
            </List>
            <ConfirmDialog
                open={confirmOpen}
                title="Confirm Delete"
                content="Are you sure you want to delete this activity? This action cannot be undone."
                onClose={() => setConfirmOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </div>
    )
}
