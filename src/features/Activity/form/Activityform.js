import { Box, Button, Paper, TextField, Typography } from '@mui/material'

import React from 'react'

export default function Activityform(props) {

  const handleSubmitform = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value
    })
    if (props.activity) data.id = props.activity.id;
    props.SubmitForm(data)
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant='h5' gutterBottom color='primary'>
        Create activity
      </Typography>
      <Box component='form' onSubmit={handleSubmitform} display='flex' flexDirection='column' gap={3}>
        <TextField name='title' label='Title' defaultValue={props.activity?.title} />
        <TextField name='description' label='Description' defaultValue={props.activity?.description} multiline rows={3} />
        <TextField name='description' label='Description' defaultValue={props.activity?.description} multiline rows={3} />
        <TextField name='category' label='Category' defaultValue={props.activity?.category} />
        <TextField name='date' label='Date' type='date' defaultValue={props.activity?.date?.substring(0, 10)} />
        <TextField name='city' label='City' defaultValue={props.activity?.city} />
        <TextField name='venue' label='Venue' defaultValue={props.activity?.venue} />
        <Box display='flex' justifyContent='end' gap={3}>
          <Button color='inherit' onClick={props.CloseForm}>Cancel</Button>
          <Button type='submit' color='success'>Submit</Button>

          <Button
            loading={props.formLoading}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
