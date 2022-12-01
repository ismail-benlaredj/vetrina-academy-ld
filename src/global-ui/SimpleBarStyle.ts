import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
    maxHeight: '100%',
    display: 'flex !important',
    '& .simplebar-scrollbar': {
        '&:before': {
            backgroundColor: theme.palette.grey[300]
        },
        '&.simplebar-visible:before': {
            opacity: 1
        }
    },
    '& .simplebar-track.simplebar-vertical': {
        width: 10
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
        height: 6
    },
    '& .simplebar-mask': {
        zIndex: 'inherit'
    }
}));