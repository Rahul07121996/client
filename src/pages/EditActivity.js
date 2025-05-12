import { TextField, Button, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export default function ActivityForm({ activity = {}, onSubmit, loading }) {
    const [formData, setFormData] = useState({ title: '', description: '' });

    useEffect(() => {
        if (activity) setFormData(activity);
    }, [activity]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
            <TextField
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </Button>
        </Box>
    );
}
