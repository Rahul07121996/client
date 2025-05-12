import React from 'react'
import { useOutletContext } from 'react-router';
import ActivityForm from '../components/ActivityForm';

export default function CreateActivity() {
    const { handleSubmitForm, formLoading } = useOutletContext();
    return <ActivityForm onSubmit={handleSubmitForm} loading={formLoading} />;
  
}

