import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


export const NewLableBadge = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    borderRadius: '4px',
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '2px 2px',
    fontSize: '14px',
    fontWeight: '700',
    margin: `0 ${theme.spacing(2)} `,
    zIndex: 1,
}));

export const NotifBadge = styled(Box)(({ theme }) => ({
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
    zIndex: 1,
}));


export const activeItemStyle = (theme: any) => ({
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        width: '95%',
        height: '100%',
        backgroundColor: '#F7F7F7',
        borderRadius: '4px',
        zIndex: 0,
        borderLeft: `3px solid ${theme.palette.primary.main}`,
        left: '2%',
    }
})

