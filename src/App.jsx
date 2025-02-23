import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/App.css';
import { Home } from './pages/Home';

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#556cd6' : '#aa3229',
          },
          secondary: {
            main: mode === 'light' ? '#19857b' : '#e67a84',
          },
          error: {
            main: '#ff4444',
          },
        },
      }),
    [mode]
  );

  const handleModeChange = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} onModeChange={handleModeChange} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
