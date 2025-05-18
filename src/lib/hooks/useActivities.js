import { useEffect, useState } from "react";
import { createActivity, deleteActivity, fetchActivities, updateActivity } from "../../ActivityApi/activityApi";





export const useActivities = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        const loadActivities = async () => {
            setLoading(true);
            try {
                const data = await fetchActivities();
                setActivities(data);
            } catch (error) {
                console.error('Failed to load activities:', error);
            } finally {
                setLoading(false);
            }
        }
        loadActivities();
    }, [])

    const addActivity = async (activity) => {
        const create = await createActivity(activity);
        setActivities((prev) => [...prev, create]);
    }

    const editActivity = async (Id, updated) => {
        try {
            const updatedActivity = await updateActivity(Id, updated);
            setActivities((prev) =>
                prev.map((a) => (a.id === Id ? {...updatedActivity,id:Id} : a))
            );
        } catch (error) {
            console.error('Failed to update activity:', error);
            throw error;
        }
    };

    const removeActivity = async (id) => {
        setDeletingId(id);
        try {
            await deleteActivity(id);
            setActivities((prev) => prev.filter((a) => a.id !== id));
        } catch (error) {
            console.error('Failed to delete activity:', error);
            throw error;
        } finally {
            setDeletingId(null);
        }
    };

    
  return {
    activities,
    loading,
    formLoading,
    setFormLoading,
    deletingId,
    addActivity,
    editActivity,
    deleteActivity,
    removeActivity,
    
  };
}






