import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
import { useState } from 'react';

export default function MainLayout() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const handleDrawerState = () => {
        setOpen(!open)
    };


    const Main = styled('main')(({ theme }) => ({
        position: 'relative',
        marginTop: theme.spacing(8),
        marginLeft: 0,
        width: `calc(100% - ${theme.spacing(7)})`,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        flexDirection: 'column',
        display: 'flex',
    }));
    return (
        <Box sx={{ display: 'flex', color: theme.palette.text.secondary }}>
            <Header open={open} />
            <Sidebar open={open} handleDrawerState={handleDrawerState} />
            <Main>
                <Outlet context={open} />
            </Main>
        </Box>
    )
}
