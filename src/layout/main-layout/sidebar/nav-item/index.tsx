import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

interface NavItemProps {
    item: any,
    open: boolean,
    children?: JSX.Element | JSX.Element[],
    handleCollapse?: () => void,
}

export default function NavItem({ item, open, children, handleCollapse }: NavItemProps) {
    const theme = useTheme();

    return (
        <ListItem key={item.id} disablePadding sx={{ display: 'block' }} onClick={() => handleCollapse && handleCollapse()} >
            <ListItemButton
                sx={{
                    maxHeight: 32,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    "&:hover": {
                        color: theme.palette.primary.main,
                        fill: theme.palette.primary.main,
                        backgroundColor: theme.palette.common.white,
                    },
                }}
            >
                {item.icon && <ListItemIcon

                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        fill: 'inherit',
                        color: 'inherit',
                    }}
                >
                    <item.icon style={{
                        width: '20px',
                        height: '20px',

                    }} />
                </ListItemIcon>
                }
                <ListItemText primary={item.label}
                    sx={{
                        opacity: open ? 1 : 0,
                        ml: item.icon ? 'auto' : '44px',
                    }} />
                {children}
            </ListItemButton>
        </ListItem>
    )
}
