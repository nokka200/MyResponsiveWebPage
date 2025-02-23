import { Box, Container, Typography, Grid2, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='sm'>
        <Typography variant='body1' align='center'>
          Footer Content Here
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
              <Stack spacing={2}>
                <p>Laskuri OY</p>
              </Stack>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 8, xs: 12 }}>
            <Box component='section' sx={{ p: 2 }}>
              <p>
                <strong>Yhteystiedot</strong>
              </p>
              <p>Y-Tunnus: 1-234525</p>
              <p>email@yritys.fi</p>
              <p>+358 501234567</p>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
