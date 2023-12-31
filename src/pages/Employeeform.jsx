import React, { useState } from 'react';
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';

const Employeeform = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic goes here
    console.log('Form submitted successfully');
    console.log(formData);

    // Reset the form data after successful submission
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          border: '2px solid #333',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          width: '300px',
        }}
      >
        <FormControl sx={{ marginBottom: '16px' }}>
          <InputLabel sx={{ fontWeight: 'bold' }} htmlFor="name-input">
            Name
          </InputLabel>
          <Input
            id="name-input"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </FormControl>

        <FormControl sx={{ marginBottom: '16px' }}>
          <InputLabel sx={{ fontWeight: 'bold' }} htmlFor="designation-input">
            Designation
          </InputLabel>
          <Input
            id="designation-input"
            value={formData.designation}
            onChange={(e) => handleChange('designation', e.target.value)}
            required
          />
        </FormControl>

        <FormControl sx={{ marginBottom: '16px' }}>
          <InputLabel sx={{ fontWeight: 'bold' }} htmlFor="location-input">
            Location
          </InputLabel>
          <Input
            id="location-input"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            required
          />
        </FormControl>

        <FormControl sx={{ marginBottom: '16px' }}>
          <InputLabel sx={{ fontWeight: 'bold' }} htmlFor="salary-input">
            Salary
          </InputLabel>
          <Input
            id="salary-input"
            value={formData.salary}
            onChange={(e) => handleChange('salary', e.target.value)}
            required
          />
        </FormControl>
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: '16px' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Employeeform;
