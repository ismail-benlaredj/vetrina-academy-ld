import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import CardLayout from 'layout/dashboard-card-layout';
import TrustpilotLogo from 'assets/icons/TrustpilotLogo';

export default function TrustCard() {
    const theme = useTheme();

    return (
        <CardLayout
            linkText="Write a review on Trustpilot"
            title=""
            Icon={TrustpilotLogo}
            link="#"
            style={{
                background: theme.palette.secondary.main,
                color: theme.palette.primary.contrastText,
            }}
            linkColor={theme.palette.success.main}
        >

            <Typography variant='h3'
                sx={{
                    mt: "24px",
                    pb: "24px",
                    fontFamily: "'Noto Sans KR', sans-serif"
                }}>
                Show us your love by leaving a
                <span style={{ color: theme.palette.success.main }}> positive </span>
                review on trust pilot and
                receive the extension of
                <span style={{ fontWeight: 700 }}> 50 additional products</span>
            </Typography>

        </CardLayout>
    )
}
