import { createTheme } from '@mui/material/styles';
import themePalette from './palette';
import themeTypography from './typography';

function theme() {
    const palette = themePalette('light');
    const typography = themeTypography("'Source Sans Pro'", "'Noto Sans HK', sans-serif");
    const theme = createTheme({
        palette,
        typography

    })
    return theme;
}
export default theme;