

import { useState } from 'react';


import Nav from './Nav';
import { Box, Container, Typography } from '@mui/material';
import ActivityDashboard from '../../features/Activity/Dashboard/ActivityDashboard';
import { useActivites } from '../../lib/hooks/useActivites';
function App() {
  // const[activities,setActivies] = useState([])
  const[selectedActivity,setselectActivity] = useState(undefined);
  const[editMode,setEditMode] = useState(false);  
  const{activities,isPending} = useActivites();



  // useEffect(()=>{
  //   const fetchActivities = async()=>{
  //      try{
  //          const response  = await  axios.get("https://localhost:5001/api/Activities");
  //          if(!response.data || response.data.length===0){
  //             console.log("no record found");
  //             setActivies([])
  //          }
  //          else{
  //          setActivies(response.data);
  //          }
  //      }
  //      catch(error){
  //       console.log(error);
  //      }
  //   }
  //   fetchActivities();
  // },[])


  const handleSelectActivity =(Id)=>{

    const data = activities.find(x=>x.id ===Id);
     setselectActivity(data);

     console.log(selectedActivity)
  }

  const handleCancelSelectActivity = ()=>{
    setselectActivity(undefined);
  }


 const handleOpenform =(id)=>{
   if(id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
 } 

 const handleCloseform =()=>{
  setEditMode(false);
 }

 const handleSubmitForm = (activity)=>{
    // if(activity.id){
    //   setActivies(activities.map(x=>x.id===activity.id ? activity : x))
    // }
    // else{
    //   const newActivity  = {...activity,id:activities.length.toString()}
    //   setselectActivity(newActivity)
    //   setActivies([...activities,newActivity])
     
    // }
    setEditMode(false);
 }

 const handleDelete =(id)=>{
     // setActivies(activities.filter(x=>x.id !==id));
 }

  return (
    <Box sx={{bgcolor:'#eeeeee',minHeight:'100vh'}}>
    <Nav openForm={handleOpenform}></Nav>
    <Container maxWidth='xl' sx={{mt:3}}>
      {!activities || isPending ?(
        <Typography>Loading...</Typography>
      ):(
        <ActivityDashboard activities={activities}
        SelectActivity={handleSelectActivity}
        CancelSelectActivity ={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleOpenform}
        CloseForm ={handleCloseform}
        SubmitForm={handleSubmitForm}
        deleteActivity = {handleDelete}
      />
      )}
    </Container>
    </Box>
  );
}

export default App;
