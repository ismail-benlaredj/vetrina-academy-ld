import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
import { useState } from 'react';
// import { drawerWidth } from '../../constants/nav-itmes';

export default function MainLayout() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const handleDrawerState = () => {
        setOpen(!open)
    };


    const Main = styled('main')(({ theme }) => ({
        marginTop: theme.spacing(8),
        marginLeft: 0,
        width: `calc(100% - ${theme.spacing(7)})`,
        backgroundColor: theme.palette.background.paper,
        minHeight: 'calc(100vh - 65px)',
        boxSizing: 'border-box',
    }));
    return (
        <Box sx={{ display: 'flex', color: theme.palette.text.secondary }}>
            <Header open={open} />
            <Sidebar open={open} handleDrawerState={handleDrawerState} />
            <Main>
                <Outlet />
            </Main>
        </Box>
    )
}
