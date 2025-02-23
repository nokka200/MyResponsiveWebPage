import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const InfoSectionTitle = ({ title }) => {
  return (
    <Typography variant='h4' component='h3' gutterBottom align='center'>
      {title}
    </Typography>
  );
};

InfoSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
