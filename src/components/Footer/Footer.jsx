import { Box, Container, Grid2, Stack, Typography } from '@mui/material';

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
              <Typography variant='body1' component={'p'}>
                <strong>Yhteystiedot</strong>
              </Typography>
              <Typography variant='body2' component={'p'}>
                Y-Tunnus: 1-234525
              </Typography>
              <Typography variant='body2' component={'p'}>
                email@yritys.fi
              </Typography>
              <Typography variant='body2' component={'p'}>
                +358 501234567
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component={'p'}
                sx={{ mt: 2 }}
              >
                © 2021 Laskuri OY
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
