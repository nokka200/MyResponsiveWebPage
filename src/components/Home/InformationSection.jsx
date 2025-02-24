import { Grid2, Box } from '@mui/material';
import { InfoTextBox } from './InfoTextBox';
import { InfoSectionTitle } from './InfoSectionTitle';
import { HeroPicture } from './HeroPicture';

export const InformationSection = () => {
  return (
    <Grid2 container spacing={2}>
      <HeroPicture />
      <Grid2 size={12}>
        <Box id='feature' component='section' sx={{ p: 2 }}>
          <InfoSectionTitle title='Mitä voimme tarjota sinun yrityksellesi' />
        </Box>
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <InfoTextBox
          title='1. Palkanlaskenta'
          text='Palkanlaskenta on helppoa ja nopeaa.'
        />
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <InfoTextBox
          title='2. Verot ja pidätykset'
          text='Verojen lasku on hasukaa nyt ja aina.'
        />
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <InfoTextBox
          title='3. Palkkalaskelmat'
          text='Työntekijät saavat selkeät ja yksityiskohtaiset palkkalaskelmat.'
        />
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <InfoTextBox
          title='4. Viranomaisilmoituket'
          text='Yhdellä painaluksela kaikki byrokraattiset ongelmat hoidettu.'
        />
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <InfoTextBox
          title='5. Lomat ja poissaolot'
          text='Vielä helpommin lomalle tai sairaspoissaololle.'
        />
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <InfoTextBox
          title='6. Matkalaskut'
          text='Ei enää päänsärkyä vaan kaikki hoituu.'
        />
      </Grid2>
    </Grid2>
  );
};
