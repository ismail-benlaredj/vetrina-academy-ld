import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AiOutlineEye } from 'react-icons/ai';

import CardLayout from 'layout/dashboard-card-layout';
import CardMenu from './CardMenu';

export default function VisitorsCard() {
    return (
        <CardLayout
            linkText="Do you want more visits? Contact us!"
            title="Visitors"
            Icon={AiOutlineEye}
            link="#"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: "24px",
                    right: "24px",
                }}>
                <CardMenu />
            </Box>
            <Typography variant='h1' sx={{ fontSize: '42px' }}>
                1824
            </Typography>
        </CardLayout>
    )
}
