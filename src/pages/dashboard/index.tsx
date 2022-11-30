import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import DashboardHeader from './components/DashboardHeader';
import GridItemSecondCol from './components/GridItemSecondCol';
import GridItemFirstCol from './components/GridItemFirstCol';

const LinearBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '182px',
    position: 'absolute',
    top: '0',
    left: '0',
    background: `linear-gradient( ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 132.05%)`,
    zIndex: 0,
}));

export default function Dashboard() {

    return (
        <Box sx={{ position: 'relative', }}>
            <LinearBox />
            <Box sx={{ width: '100%', height: '100%' }}>
                <DashboardHeader />
                <Container fixed sx={{ flexGrow: 1 }}>
                    <Grid container direction='row' spacing={1} sx={{ justifyContent: 'flex-start' }}>
                        <GridItemFirstCol />
                        <GridItemSecondCol />
                    </Grid >
                </Container >
            </Box >
        </Box >
    )
}