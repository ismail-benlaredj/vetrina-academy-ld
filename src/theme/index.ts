import { createTheme } from '@mui/material/styles';
import themePalette from './palette';
import themeTypography from './typography';

function theme() {
    const palette = themePalette('light');
    const typography = themeTypography("'Source Sans Pro'", "'Noto Sans HK', sans-serif");
    const theme = createTheme({
        palette,
        typography,
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        margin: 0,
                    },
                }

            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    },

                }
            },
            MuiMenu: {
                styleOverrides: {
                    list: {
                        width: 220,
                        border: '1px solid #e0e0e0',
                        borderRadius: 4,
                        backgroundColor: '#fff',
                        bosShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
                        boxSizing: 'border-box',
                        padding: '8px 0',
                        '& .MuiMenuItem-root': {
                            padding: '6px 16px',
                            fontSize: 13,
                            fonwtWeight: 300,
                            '&:hover': {
                                backgroundColor: '#E9F8FE',
                                color: '#21B8F9'
                            }
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        padding: '15px 20px',
                        borderRadius: 5,
                        boxShadow: ' 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)',
                        width: '168px',
                        height: '50px'
                    }
                }
            }
        },


    })
    return theme;
}
export default theme;