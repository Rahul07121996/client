import { useEffect, useState } from "react";

const initialData = [
    {
        Id: "3d65e94c-c1df-4449-8870-abe563e3e65a",
        Title: "Digital Marketing Summit",
        Date: "2025-10-01T17:43:43.0221784",
        Description: "Summit on the latest trends in digital marketing.",
        Category: "Summit",
        IsCancelled: false,
        City: "Kolkata",
        Venue: "Science City",
        Latitude: 22.5726,
        Longitude: 88.3639
    },
    {
        Id: "4fdc9a60-836c-4502-bf4d-8323cc1f9bc3",
        Title: "Cloud Computing Conference",
        Date: "2026-03-01T17:43:43.0221816",
        Description: "Conference discussing the future of cloud computing.",
        Category: "Conference",
        IsCancelled: false,
        City: "Bengaluru",
        Venue: "NIMHANS Convention Centre",
        Latitude: 12.9716,
        Longitude: 77.5946
    }
];



export const  useActivities = ()=>{
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);


    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setActivities(initialData);
            setLoading(false);
        }, 300);
     },[])


     const addActivity  = async(activity) =>{
        const newActivity  = {...activity,Id:activity.Id|crypto.randomUUID()};
        setActivities(prev=>[...prev,newActivity])
     }

     const updateActivity = async(update)=>{
        setActivities(prev=>
             prev.map(activity=>activity.Id===update.Id ? update:activity)
        );
     }

     const deleteActivity  = async(id)=>{
        setDeletingId(id);
        await new Promise(resolve => setTimeout(resolve, 300));
        setActivities(prev => prev.filter(a => a.Id !== id));
        setDeletingId(null);
     }

     return {
        activities,
        loading,
        formLoading,
        setFormLoading,
        deletingId,
        addActivity,
        updateActivity,
        deleteActivity
    };
}

