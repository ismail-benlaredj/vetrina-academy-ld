import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import Divider from '@mui/material/Divider';
import Logo from '../../../assets/icons/Logo';
import NavItem from './nav-item';
import NavCollapse from './group-nav-item';
import { navItemsList, navItemSecondList } from '../../../constants/nav-itmes';
import { drawerWidth } from '../../../constants/nav-itmes';
import SelectMenu from 'pages/components/SelectMenu';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";



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



const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        height: '100%',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor: theme.palette.common.white,
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
interface Props {
    open: boolean;
    handleDrawerState: () => void;
}

export default function Sidebar({ open, handleDrawerState }: Props) {
    const theme = useTheme();



    return (
        <StyledDrawer variant="permanent" open={open} className='test'>
            <DrawerHeader>
                <Box sx={{ width: "93.25px", display: open ? 'block' : 'none' }}>
                    <Logo />
                </Box>

                <IconButton onClick={handleDrawerState}>
                    <AiOutlineMenu style={{ color: theme.palette.text.secondary }} />
                </IconButton>
            </DrawerHeader>

            <List sx={{
                backgroundColor: theme.palette.common.white,
                height: 'fit-content',
                pb: theme.spacing(5),
            }}>
                {navItemsList.map((item: any) => (
                    (item.type === 'group')
                        ?
                        (<NavCollapse groupItem={item} open={open} key={item.id} />)
                        :
                        (
                            <Link key={item.id} to={item.link} >
                                <NavItem item={item} open={open} link={`/${item.link}`} />
                            </Link>
                        )

                ))}

                <Divider sx={{ my: theme.spacing(2) }} />
                {navItemSecondList.map((item: any) => (
                    (item.type === 'group')
                        ?
                        (<NavCollapse groupItem={item} open={open} key={item.id} />)
                        :
                        (<NavItem item={item} open={open} key={item.id} />)

                ))}
            </List>
            <Box sx={{
                px: '20px', pb: theme.spacing(8),
                backgroundColor: theme.palette.common.white,
                display: open ? 'block' : 'none'

            }}>
                <Typography
                    color={theme.palette.text.primary}
                    sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        mb: theme.spacing(2),
                        display: open ? 'block' : 'none'
                    }}
                >Select your shop</Typography>
                <SelectMenu />
            </Box>
        </StyledDrawer>

    );
}
