import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import Outline from '@/components/Outline';
import Routes from '@/Routes';
import { theme } from '@/theme';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<Outline />}>
          <Routes />
        </Suspense>
      </BrowserRouter >
    </ThemeProvider >
  )
}

export default App; 