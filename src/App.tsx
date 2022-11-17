import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import theme from './theme';

import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
