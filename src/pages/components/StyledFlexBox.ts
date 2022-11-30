import Box from '@mui/material/Box';
import { styled, } from '@mui/material/styles';

export const FlexBoxColCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}));
