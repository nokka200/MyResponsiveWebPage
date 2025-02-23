import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

export const InfoTextBox = ({ title, text }) => {
  return (
    <Box component='section' sx={{ p: 2, border: '1px solid black' }}>
      <Typography variant='h6' component='h2' gutterBottom align='center'>
        <strong>{title}</strong>
      </Typography>
      <Typography variant='h6' component='p' gutterBottom>
        {text}
      </Typography>
    </Box>
  );
};

InfoTextBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
