import { useMemo } from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { NewLableBadge, NotifBadge, activeItemStyle } from './StyledComponents'


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

interface NavItemProps {
    item: any,
    open: boolean,
    children?: JSX.Element | JSX.Element[],
    handleCollapse?: () => void,
    link?: string,

}
export default function NavItem({ item, open, children, handleCollapse, link }: NavItemProps) {
    const theme = useTheme();
    let { pathname } = useLocation();

    const styles = useMemo(() => (
        (link === pathname) ? activeItemStyle : {}
    ), [link, pathname])


    return (

        <ListItem key={item.id} disablePadding onClick={() => handleCollapse && handleCollapse()}
            sx={styles}
        >
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
        </ListItem >

    )
}
