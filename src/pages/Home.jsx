import { Container, Typography, Box } from '@mui/material';
import { HomeTitle } from '../components/Home/HomeTitle';
import { InformationSection } from '../components/Home/InformationSection';
import { PriceSection } from '../components/Home/PriceSection';
import { EmailForm } from '../components/Home/EmailForm';

export const Home = () => {
  const handleEmailSubmit = (email) => {
    // Handle sending the email, e.g., call an API endpoint.
    console.log('Email submitted:', email);
  };

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
        <PriceSection />
      </Box>
      <Box
        component='section'
        sx={{ p: 2, border: '1px solid black', marginBottom: 2 }}
      >
        <Typography variant='body1' gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem pariatur repellat sequi culpa eum minima laboriosam hic
          corrupti modi optio, consequatur vitae quos impedit eos maiores
          recusandae! Assumenda, dignissimos ab. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem pariatur repellat sequi
          culpa eum minima laboriosam hic corrupti modi optio, consequatur vitae
          quos impedit eos maiores recusandae! Assumenda, dignissimos ab. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
          pariatur repellat sequi culpa eum minima laboriosam hic corrupti modi
          optio, consequatur vitae quos impedit eos maiores recusandae!
          Assumenda, dignissimos ab. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem pariatur repellat sequi culpa eum
          minima laboriosam hic corrupti modi optio, consequatur vitae quos
          impedit eos maiores recusandae! Assumenda, dignissimos ab. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Exercitationem pariatur
          repellat sequi culpa eum minima laboriosam hic corrupti modi optio,
          consequatur vitae quos impedit eos maiores recusandae! Assumenda,
          dignissimos ab. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem pariatur repellat sequi culpa eum minima
          laboriosam hic corrupti modi optio, consequatur vitae quos impedit eos
          maiores recusandae! Assumenda, dignissimos ab.
        </Typography>
      </Box>
      <EmailForm onEmailSubmit={handleEmailSubmit} />
    </Container>
  );
};
