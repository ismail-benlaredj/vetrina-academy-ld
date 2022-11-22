import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styled, useTheme } from '@mui/material/styles';
import LinkComponent from 'pages/shared/LinkComponent';
import { ImArrowRight2 } from 'react-icons/im';
import mockup from 'assets/images/mockup.png';
import AppStoreIcon from 'assets/icons/app-store-icon';
import GooglePlayIcon from 'assets/icons/play-store-icon';

const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '24px',
    width: '340px',
    height: '343px',
    background: theme.palette.warning.main,
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);"
}))
export default function AppsCard() {
    const theme = useTheme();
    return (
        <CardContainer>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: "60%", }}>
                    <Typography variant="h2" color={theme.palette.primary.contrastText}
                        sx={{ marginBottom: theme.spacing(2) }}
                    >
                        Sell your products on your exclusive APP published on the stores
                    </Typography>
                    <LinkComponent
                        link='#'
                        linkText='Show more'
                        Icon={ImArrowRight2}
                        styles={{
                            fontSize: theme.typography.h3.fontSize,
                            fontWeight: 400,
                            marginRight: theme.spacing(1),
                            textDecoration: 'underline',
                            fontFamily: theme.typography.fontFamily.primary,
                            color: theme.palette.primary.contrastText,

                        }}
                        iconStyles={{ width: 20, height: 20, color: theme.palette.primary.contrastText }}
                    />
                </Box>
                <Box>
                    <img src={mockup} alt="mockup" />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                <AppStoreIcon />
                <GooglePlayIcon />
            </Box>
        </CardContainer>
    )
}
