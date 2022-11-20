import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FiZap } from 'react-icons/fi';
import Box from '@mui/material/Box';
const drawerWidth = 245;

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
    ...(!open && {
        marginLeft: `calc(${theme.spacing(7)} + 1px)`,
        width: `calc(100% - ${theme.spacing(7)} - 1px)`,
    }),
}));
const StyledIconBtn = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily.primary,
    '&:hover': {
        backgroundColor: theme.palette.common.white,
    },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
}));
export default function Header({ open }: AppBarProps) {
    const theme = useTheme();

    console.log(theme.spacing(7))
    return (
        <AppBar position="fixed" open={open}>
            <StyledToolbar >
                <Typography variant="h3" color='text.secondary' sx={{ fontWeight: '500', fontFamily: theme.typography.fontFamily.secondary }}>
                    Dashboard
                </Typography>
                <StyledIconBtn >
                    <FiZap style={{
                        color: 'inherit',
                    }} />
                    <Typography variant="h3" sx={{ fontWeight: 500 }}>
                        What's New
                    </Typography>
                    <Box sx={{
                        width: '20px',
                        height: '20px',
                        bgcolor: theme.palette.error.main,
                        borderRadius: 50,
                        top: '-2px',
                        right: '-4px',
                        position: 'absolute',
                    }}>
                        <Typography variant='h4' color='white' sx={{ fontWeight: 500 }}>
                            2
                        </Typography>
                    </Box>
                </StyledIconBtn>
            </StyledToolbar>
        </AppBar>
    )
}
