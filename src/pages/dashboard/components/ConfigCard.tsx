import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardLayout from 'layout/dashboard-card-layout';
import { useTheme } from '@mui/material/styles';


import { FiTool } from 'react-icons/fi';

export default function ConfigCard() {
    const theme = useTheme();

    return (
        <CardLayout
            linkText="Complete the setup!"
            title="Configure your shop"
            Icon={FiTool}
            link="#"
        >

            <Box sx={{ my: "24px" }}>
                <Typography color={theme.palette.warning.main} variant='h1' sx={{ lineHeight: 0.9 }}>
                    45%
                </Typography>
                <Typography color={theme.palette.warning.main} variant='body1'>
                    Completed
                </Typography>
                <Typography variant='h3' sx={{ mt: "24px", pb: "24px" }}>
                    Complete all the steps to have a complete shop to best present to your customers.
                </Typography>

            </Box>
        </CardLayout>
    )
}
