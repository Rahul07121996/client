import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router';
import { useForm } from 'react-hook-form';
import ActivityForm from '../components/ActivityForm';
import { Box, Button, CircularProgress, MenuItem, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
const categories = ['Conference', 'Workshop', 'Meetup', 'Webinar', 'Summit'];
export default function CreateActivity() {
    const { addActivity, formLoading, setFormLoading } = useOutletContext();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setFormLoading(true);
        try {
            const newActivity = {
                ...data,
                id: crypto.randomUUID(),
                isCancelled: false,
                date: new Date(data.date).toISOString(),
                latitude: 0,
                longitude: 0,
            };
            console.log(newActivity)
            await addActivity(newActivity);
            reset(); 
            toast.success('Activity created successfully!');

            setTimeout(() => {
                 navigate('/');
            }, 1000);
            // No navigation: user can click "Back to Home"
        } catch (error) {
           
            toast.error(' Failed to create activity.');
        } finally {
            setFormLoading(false);
        }
    };
    return (
        <div>
            <Box
                sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    mt: 4,
                    p: 3,
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: 1,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Create New Activity
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Title"
                        fullWidth
                        margin="normal"
                        {...register('title',{required:"Title required"})}
                         error={!!errors.title}
                         helperText={errors.title?.message}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                        margin="normal"
                        {...register('description', { required: 'Description is required' })}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                    <TextField
                        label="Category"
                        fullWidth
                        select
                        margin="normal"
                        {...register('category', { required: 'Category is required' })}
                        error={!!errors.category}
                        helperText={errors.category?.message}
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
                            {formLoading ? <CircularProgress size={24} /> : 'Create'}
                        </Button>

                        <Button
                            component={Link}
                            to="/"
                            variant="outlined"
                            color="secondary"
                        >
                            Back to Home
                        </Button>
                    </Box>

                </form>
            </Box>
        </div>
    );
}

