import { Grid2, Box } from '@mui/material';
import kuva01 from '../../assets/kuva01.jpg';

export const HeroPicture = () => {
  return (
    <Grid2 size={12}>
      <Box component='section' sx={{ p: 2 }}>
        <img src={kuva01} alt='Man shaking hand' style={{ width: '100%' }} />
      </Box>
    </Grid2>
  );
};
