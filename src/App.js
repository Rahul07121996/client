import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function App() {
  const title = "Reactivities"
  const[activities,setActivies] = useState([])

  useEffect(()=>{
    const fetchActivities = async()=>{
       try{
           const response  = await  axios.get("https://localhost:5001/api/Activities");
           if(!response.data || response.data.length===0){
              console.log("no record found");
              setActivies([])
           }
           else{
           setActivies(response.data);
           }
       }
       catch(error){
        console.log(error);
       }
    }
    fetchActivities();
  },[])
  return (
    <div>
     <h3 className='px-4 py-2'>{title}</h3>
     <ListGroup >
      {
            activities.map((item)=>(
             <ListGroup.Item key={item.id} style={{border:"none"}}>{item.title}</ListGroup.Item>
            ))
        }
    </ListGroup>
    </div>
  );
}

export default App;
