import { Typography, Box, Grid2 } from '@mui/material';
import kuva03 from '../../assets/kuva03.jpg';
import kuva02 from '../../assets/kuva02.jpg';
import { InfoTextBox } from './InfoTextBox';

export const PriceSection = () => {
  return (
    <>
      <Typography
        id='price'
        variant='h4'
        component='h2'
        gutterBottom
        align='center'
      >
        Hinnasto
      </Typography>
      <Grid2
        container
        spacing={2}
        direction='row'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid2 size={{ md: 4, xs: 12 }}>
          <Box component='section' sx={{ p: 2 }}>
            <img src={kuva03} style={{ width: '100%' }} />
          </Box>
        </Grid2>
        <Grid2 size={{ md: 4, xs: 12 }}>
          <InfoTextBox
            title='Tuotteemme'
            text='Per kuukausi: 10€
            Vuodelta: 90€'
          />
        </Grid2>
        <Grid2 size={{ md: 4, xs: 12 }}>
          <Box component='section' sx={{ p: 2 }}>
            <img src={kuva02} style={{ width: '100%' }} />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};
