import { Container, Typography, Box, Grid2 } from '@mui/material';
import { HomeTitle } from '../components/Home/HomeTitle';
import { InformationSection } from '../components/Home/InformationSection';
import { InfoTextBox } from '../components/Home/InfoTextBox';
import kuva03 from '../assets/kuva03.jpg';
import kuva02 from '../assets/kuva02.jpg';

export const Home = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        marginTop: { xs: 2, sm: 4 },
        marginBottom: { xs: 2, sm: 4 },
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'primary.main',
        minHeight: { xs: 'auto', sm: '100vh' },
      }}
    >
      <HomeTitle />
      <Box
        component='section'
        sx={{ p: 2, border: '1px solid black', marginBottom: 2 }}
      >
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          Yrityksesi palkanlaskennan ratkaisusi
        </Typography>
        <InformationSection />
      </Box>
      <Box
        component='section'
        sx={{ p: 2, border: '1px solid black', marginBottom: 2 }}
      >
        <Typography variant='h4' component='h2' gutterBottom align='center'>
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
      </Box>
    </Container>
  );
};
