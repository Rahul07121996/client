import axios from "axios";
import axiosInstance from "../lib/axiosInstance";



export const fetchActivities = async()=>{
    const response = await axiosInstance.get('/Activities');
        return response.data;
}

export const fetchActivityById =async(id)=>{
    const response = await axiosInstance.get(`/Activities/${id}`)
    return response.data;
  
}
export const createActivity =async(newactivity) =>{
    const response = await axiosInstance.post('/Activities',newactivity);
    return response.data;
}

export const updateActivity =async(id,updateActivity)=>{
    const response  = await axiosInstance.put(`Activities/${id}`,updateActivity);
    return  response.data;
}

export const deleteActivity = async (id) => {
    const response = await axiosInstance.delete(`Activities/${id}`);  // DELETE request to delete an activity
        return response.data;
};