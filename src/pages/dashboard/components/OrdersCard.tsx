import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FiList } from 'react-icons/fi';


import CardLayout from 'layout/dashboard-card-layout';
import CardMenu from './CardMenu';

export default function OrdersCard() {
    return (
        <CardLayout
            linkText="10 free tips to increase your sales"
            title="Orders"
            Icon={FiList}
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
            <Box sx={{ my: "24px" }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '94%',
                        marginBottom: '12px'
                    }} >
                    <Typography
                        variant="h3"
                        color="text.disabled"
                    >
                        Orders received:
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 500 }}
                    >
                        156
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '94%' }}>
                    <Typography
                        variant="h3"
                        color="text.disabled"
                    >
                        Earnings:
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 500 }}
                    >
                        € 1893,24
                    </Typography>
                </Box>
            </Box>
        </CardLayout>
    )
}
