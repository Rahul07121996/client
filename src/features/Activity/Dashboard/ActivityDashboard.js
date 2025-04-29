import React from 'react'
import Grid from '@mui/material/Grid';
import ActivityList from './ActivityList';
import ActivityDetail from '../Details/ActivityDetail';
import Activityform from '../form/Activityform';
export default function ActivityDashboard(props) {
  return (
    <Grid container spacing={3}>
        <Grid size={7}>
            <ActivityList activities={props.activities}
              SelectActivity={props.SelectActivity}
              selectedActivity = {props.selectedActivity}
              deleteActivity = {props.deleteActivity}
            />
        </Grid>
        <Grid size={5}>
           {props.selectedActivity && !props.editMode && <ActivityDetail
            activity={props.selectedActivity}   
            CancelSelectActivity ={props.CancelSelectActivity}
            openForm={props.openForm}
           />}
           {props.editMode &&
           <Activityform  CloseForm={props.CloseForm}
            activity={props.selectedActivity}
            SubmitForm={props.SubmitForm}
            />}
        </Grid>
    </Grid>
  )
}

