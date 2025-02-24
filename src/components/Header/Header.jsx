import { AppBar, Toolbar, Typography, Switch, Box, Link } from '@mui/material';
import PropTypes from 'prop-types';
import logo from '../../assets/Logo.png';

export default function Header({ mode, onModeChange }) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <a href='https://www.google.com' style={{ textDecoration: 'none' }}>
            <img src={logo} alt='Logo' style={{ height: 40, marginRight: 8 }} />
          </a>
          <Typography variant='h6' component='div'>
            Laskuri OY
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Link href='#feature' color='inherit' underline='none' sx={{ ml: 2 }}>
            Ominaisuudet
          </Link>
          <Link href='#price' color='inherit' underline='none' sx={{ ml: 2 }}>
            Hinnasto
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            ml: { xs: 'auto', sm: 0 },
          }}
        >
          <Typography variant='body1' component='div' sx={{ mr: 1 }}>
            Light/Dark
          </Typography>
        </Box>
        <Box
          sx={{
            display: { sm: 'flex' },
            alignItems: 'center',
            ml: { xs: 'auto', sm: 0 },
          }}
        >
          <Switch checked={mode === 'dark'} onChange={onModeChange} />
          <Link href='#' color='inherit' sx={{ ml: 2 }}>
            Kirjaudu
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  onModeChange: PropTypes.func.isRequired,
};
