import axios from "axios";
import { useEffect, useState } from "react";
import agent from "./api/agent";

const API_URL = 'https://localhost:5001/api/Activities';
export const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);


  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await agent.get(API_URL);
        setActivities(response.data);
      }
      catch (err) {
        console.error('Failed to fetch activities:', err);
        setError(err);
      }
      finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, [])

  const addActivity = async(activity) =>{

      try{
         const response = await agent.post(API_URL,activity);
         setActivities(pre=>[...pre,response.data]);
      }
      catch(err){
        console.log("failed to add activity",err);
        setError(err);
      }finally {
        setFormLoading(false);
      }
      

  }


  const updateActivity = async (activity) => {
    try {
      await agent.put(`${API_URL}/${activity.id}`, activity);
      setActivities(prev =>
        prev.map(a => (a.id === activity.id ? activity : a))
      );
    } catch (err) {
      console.error('Failed to update activity:', err);
    }
    finally {
      setFormLoading(false);
    }
  };

  const deleteActivity = async (id) => {
    setDeletingId(id)
    try {
      await agent.delete(`${API_URL}/${id}`);
      setActivities(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      console.error('Failed to delete activity:', err);
    }
    finally {
      setDeletingId(null);
    }
  };

  return {
    activities,
    loading,
    error,
    formLoading,
    deletingId,
    addActivity,
    updateActivity,
    deleteActivity,
    setFormLoading,
    setDeletingId

  };


}