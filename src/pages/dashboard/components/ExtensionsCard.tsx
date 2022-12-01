import CardLayout from 'layout/dashboard-card-layout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewIcon from 'assets/icons/new';
import DomainIcon from 'assets/icons/domainIcon';
import { styled, useTheme } from '@mui/material/styles';
import { useHorizontalScroll } from 'hooks/useHorizontalScroll';



const ExtensionsBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    marginBottom: '12px',
}));

const HorizontalBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    overflow: "hidden",
    '&:hover': {
        overflow: "scroll hidden",
    },
    '::webkit-scrollbar': {
        width: "10px",
        backgroundColor: "#F5F5F5",
    },
    '::webkit-scrollbar-thumb': {
        borderRadius: "10px",
        backgroundColor: "rgba(15, 15, 15, 0.5)"
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: "10px",
        backgroundColor: " #afa4a4"
    },
    scrollbarColor: " rgba(15, 15, 15, 0.2) rgba(15, 15, 15, 0)",
    scrollbarWidth: "thin",
}))

const CardTextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
}))

export default function ExtensionsCard() {
    const theme = useTheme();
    const scrollRef = useHorizontalScroll(80);
    return (
        <CardLayout
            linkText="Discover all extensions"
            title="Extensions Marketplace"
            Icon={NewIcon}
            link="#"
            style={{
                height: '343px',
                overflow: 'hidden',
            }}
        >
            <HorizontalBox ref={scrollRef}>
                <Box sx={{ width: '150px', marginRight: "50px" }}>
                    <ExtensionsBox sx={{ background: theme.palette.warning.main }}>
                        <DomainIcon />
                    </ExtensionsBox>
                    <Typography variant='h3' sx={{ fontfamily: theme.typography.fontFamily.primary }}>
                        Connect your own domain </Typography>
                </Box>
                <Box sx={{ width: '150px', marginRight: "50px" }}>
                    <ExtensionsBox sx={{ background: theme.palette.success.main }}>
                        <CardTextBox>
                            <Typography variant='h1'>+50</Typography>
                            <Typography variant='h2'>Prodotti</Typography>
                        </CardTextBox>
                    </ExtensionsBox>
                    <Typography variant='h3' sx={{ fontfamily: theme.typography.fontFamily.primary }}>
                        50 Additional
                        Products  </Typography>
                </Box>

            </HorizontalBox>
        </CardLayout>
    )
}
