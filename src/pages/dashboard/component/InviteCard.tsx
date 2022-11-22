import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardLayout from 'layout/dashboard-card-layout';
import { useTheme } from '@mui/material/styles';
import { FiUsers } from 'react-icons/fi';

export default function InviteCard() {
    const theme = useTheme();
    return (
        <CardLayout
            linkText="Start inviting friends!"
            title="Invite friend"
            Icon={FiUsers}
            link="#"
        >
            <Box sx={{ my: "24px" }}>
                <Typography variant='h3' sx={{ mt: "24px", pb: "24px" }}>
                    <span style={{ color: theme.palette.success.main, fontWeight: 700 }}>Receive 50 products</span> by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any plan.
                </Typography>
            </Box>
        </CardLayout>
    )
}
