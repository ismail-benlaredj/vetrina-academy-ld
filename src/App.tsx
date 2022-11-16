import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Typography from '@mui/material/Typography';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <Typography variant="h1">
        Hello World
      </Typography>
    </ThemeProvider>
  );
}

export default App;
