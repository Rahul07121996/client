import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, CircularProgress, Box, Button, Typography, MenuItem } from '@mui/material';
import { fetchActivityById } from '../ActivityApi/activityApi';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router';
import { toast } from 'react-toastify';
const categories = ['Conference', 'Workshop', 'Meetup', 'Webinar', 'Summit'];
const EditActivity = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { editActivity, formLoading, setFormLoading } = useOutletContext();
    const [activity, setActivity] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const loadActivity = async () => {
            try {
                const data = await fetchActivityById(id); // Fetch the activity
                setActivity(data); // Store in state

                // Set form values using react-hook-form
                setValue('title', data.title);
                setValue('description', data.description);
                setValue('category', data.category);
                setValue('city', data.city);
                setValue('venue', data.venue);
                const formattedDate = data.date ? new Date(data.date).toISOString().split('T')[0] : '';
                setValue('date', formattedDate);
            } catch (error) {
                console.error('Failed to fetch activity:', error);
            }
        };

        loadActivity();
    }, [id, setValue]);

    // Wait until data is loaded to display form
    if (!activity) {
        return <CircularProgress />;
    }

    const onSubmit = async (data) => {
        setFormLoading(true);
        try {
            await editActivity(id, data);
            toast.success("Update succesfully");
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            toast.error("Failed to update", error);
        }
        finally {
            setFormLoading(false)
        }

        // Handle form submission
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h5" gutterBottom>
                Edit Activity
            </Typography>

            {/* Form submission */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Title"
                    fullWidth
                    margin="normal"
                    {...register('title', { required: 'Title is required' })}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />

                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    {...register('description', { required: 'Description is required' })}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />

                <TextField
                    select
                    label="Category"
                    fullWidth
                    margin="normal"
                    {...register('category', { required: 'Category is required' })}
                    error={!!errors.category}
                    helperText={errors.category?.message}
                    value={activity ? activity.category : ''}
                    onChange={(e) => {
                        const updatedActivity = { ...activity, category: e.target.value };
                        setActivity(updatedActivity); // Assuming you have setActivity function to update activity state
                    }}
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="City"
                    fullWidth
                    margin="normal"
                    {...register('city', { required: 'City is required' })}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                />

                <TextField
                    label="Venue"
                    fullWidth
                    margin="normal"
                    {...register('venue', { required: 'Venue is required' })}
                    error={!!errors.venue}
                    helperText={errors.venue?.message}
                />

                <TextField
                    label="Date"
                    type="date"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    {...register('date', { required: 'Date is required' })}
                    error={!!errors.date}
                    helperText={errors.date?.message}
                />

                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Button type="submit" variant="contained" disabled={formLoading}>
                        {formLoading ? <CircularProgress size={24} /> : 'update'}
                    </Button>
                    {!formLoading &&
                        <Button variant="contained" color='warning' component={Link} to="/">
                            Cancel
                        </Button>
                    }
                </Box>

            </form>
        </Box>
    );
};

export default EditActivity;
