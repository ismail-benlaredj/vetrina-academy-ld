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


    return (
        <Box sx={{ display: 'flex', color: theme.palette.text.secondary }}>
            <Header open={open} />
            <Sidebar open={open} handleDrawerState={handleDrawerState} />
            <Box component="main" >
                <Outlet />
            </Box>
        </Box>
    )
}
