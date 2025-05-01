

import { useState, useEffect } from 'react';


import Nav from './Nav';
import { Box, Container, Typography } from '@mui/material';
import ActivityDashboard from '../../features/Activity/Dashboard/ActivityDashboard';
import { useActivities } from '../../lib/hooks/useActivites';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  // const [activities, setActivities] = useState([]);
  // const [selectedActivity, setSelectActivity] = useState(undefined);
  // const[editMode,setEditMode] = useState(false);  
  // const [loading, setLoading] = useState(true); 

  const { activities, loading, addActivity, updateActivity, deleteActivity, formLoading,
    setFormLoading, deletingId
  } = useActivities();
  const [selectedActivity, setSelectedActivity] = useState(undefined);
  const [editMode, setEditMode] = useState(false);




  const handleSelectActivity = (Id) => {

    const data = activities.find(x => x.id === Id);
    setSelectedActivity(data);

    console.log(selectedActivity)
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }


  const handleOpenform = (id) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleCloseform = () => {
    setEditMode(false);
  }



  const handleDelete = async (id) => {
    await deleteActivity(id);
  };

  const handleSubmitForm = async (activity) => {
    setFormLoading(true);
    try {
      if (activity.id) {
        await updateActivity(activity); // wait for update to complete
      } else {
        const newActivity = { ...activity, id: crypto.randomUUID() };
        await addActivity(newActivity); // wait for add to complete
        setSelectedActivity(newActivity);
      }
      setEditMode(false); // only close the form if successful
    } catch (error) {
      console.error("Error saving activity:", error);
      // optionally show an error message to the user
    } finally {
      setFormLoading(false); // re-enable button
    }
  };
  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <Nav openForm={handleOpenform}></Nav>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <ActivityDashboard activities={activities}
            SelectActivity={handleSelectActivity}
            CancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenform}
            CloseForm={handleCloseform}
            SubmitForm={handleSubmitForm}
            deleteActivity={handleDelete}
            formLoading={formLoading}
            deletingId={deletingId}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
