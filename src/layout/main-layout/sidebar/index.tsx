import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../../assets/icons/Logo';
import NavItem from './nav-item';
import NavCollapse from './group-nav-item';
import navItemsList from '../../../constants/nav-itmes';
import { useState } from 'react';

const drawerWidth = 245;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2.5,
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.common.white,
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.common.white,
    height: '60px',
    boxShadow: 'none',
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MainLayout() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const handleDrawerState = () => {
        console.log('handleDrawerState');
        setOpen(!open)
    };



    return (
        <Box sx={{ display: 'flex', color: theme.palette.text.secondary }}>

            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerState}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <AiOutlineMenu style={{ color: theme.palette.text.secondary }} />
                    </IconButton>
                    <Typography variant="h3" color='text.secondary' sx={{ fontWeight: '500', fontFamily: theme.typography.fontFamily.secondary }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <StyledDrawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box sx={{ width: "93.25px", display: open ? 'block' : 'none' }}>
                        <Logo />
                    </Box>

                    <IconButton onClick={handleDrawerState}>
                        <AiOutlineMenu style={{ color: theme.palette.text.secondary }} />
                    </IconButton>
                </DrawerHeader>

                <List sx={{ backgroundColor: theme.palette.common.white, height: '100%' }}>
                    {navItemsList.map((item: any) => (
                        (item.type === 'group')
                            ?
                            (<NavCollapse groupItem={item} open={open} key={item.id} />)
                            :
                            (<NavItem item={item} open={open} key={item.id} />)

                    ))}
                </List>
                <Divider />
            </StyledDrawer>
            <Box component="main" >

            </Box>
        </Box>
    );
}
