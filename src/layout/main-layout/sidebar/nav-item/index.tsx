import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';


interface NavItemProps {
    item: any,
    open: boolean,
    children?: JSX.Element | JSX.Element[],
    handleCollapse?: () => void,

}



const NewLableBadge = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    borderRadius: '4px',
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '2px 2px',
    fontSize: '14px',
    fontWeight: '700',
    margin: `0 ${theme.spacing(2)} `,
}));
const NotifBadge = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.success.main,
    borderRadius: '100%',
    width: '24px',
    height: '24px',
    fontSize: '14px',
    fontWeight: '400',
    margin: ` 0 ${theme.spacing(2)} `,
}));

interface baseProps {
    badge: {
        type: string,
        value: string,
    },
}
function Badges({ badge }: baseProps): JSX.Element {

    switch (badge.type) {
        case 'label-new':
            return (
                <NewLableBadge>
                    new
                </NewLableBadge>
            )
        case 'notification':
            return (
                <NotifBadge>
                    {badge.value}
                </NotifBadge>
            )
        default:
            return (<></>)

    }
}

export default function NavItem({ item, open, children, handleCollapse }: NavItemProps) {
    const theme = useTheme();
    return (
        <ListItem key={item.id} disablePadding onClick={() => handleCollapse && handleCollapse()} >
            <ListItemButton
                sx={{
                    maxHeight: 36,
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

            {item.badge && open && <Badges badge={item.badge} />}
        </ListItem>
    )
}
