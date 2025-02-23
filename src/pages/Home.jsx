import { Container } from '@mui/material';
import { HomeTitle } from '../shared/HomeTitle';

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
      {/* Add your components and routes here */}
    </Container>
  );
};
