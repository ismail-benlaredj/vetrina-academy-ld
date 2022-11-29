import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import theme from './theme';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <BrowserRouter>
          {/* <Routes /> */}
          <SignUp />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
