import React from 'react';
import { theme } from './theme/theme';

import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Main from './components/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
};

export default App;
