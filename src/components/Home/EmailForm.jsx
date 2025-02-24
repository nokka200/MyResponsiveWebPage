import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const EmailForm = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger the callback with the provided email.
    onEmailSubmit(email);
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        my: 2,
        border: '1px solid black',
        p: 2,
      }}
    >
      <Typography variant='h5' component='h3' gutterBottom align='center'>
        Tilaa uutiskirjeemme
      </Typography>
      <TextField
        label='Sähköpostisi'
        variant='outlined'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button variant='contained' type='submit'>
        Lähetä
      </Button>
    </Box>
  );
};

EmailForm.propTypes = {
  onEmailSubmit: PropTypes.func.isRequired,
};
