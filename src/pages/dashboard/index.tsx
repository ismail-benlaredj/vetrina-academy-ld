import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import VisitorsCard from './component/VisitorsCard';
import OrdersCard from './component/OrdersCard';
import { styled, useTheme } from '@mui/material/styles';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import CardLayout from 'layout/dashboard-card-layout';
import LinkComponent from 'pages/shared/LinkComponent';
import CardMenu from './component/CardMenu';
const LinearBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '182px',
    position: 'absolute',
    top: '0',
    left: '0',
    background: `linear-gradient( ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 132.05%)`,
    zIndex: 0,
}));

const StyledLinearContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
}));

export default function Dashboard() {
    const theme = useTheme();

    return (
        <Box sx={{ position: 'relative', height: 'fit-content' }}>
            <LinearBox />

            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}>

                <Container fixed
                    sx={{
                        marginBottom: theme.spacing(6),
                    }}
                >
                    <StyledLinearContent>
                        <Typography variant='h1' sx={{ color: "primary.contrastText" }}>
                            Welcome Mario!
                        </Typography>
                        <LinkComponent
                            link='#'
                            linkText='app.vetrinalive.it/fenoh-store'
                            Icon={FiExternalLink}
                            styles={{
                                fontSize: theme.typography.h3.fontSize,
                                fontWeight: 500,
                                marginRight: theme.spacing(2),
                                textDecoration: 'underline',
                            }}
                        />
                    </StyledLinearContent>
                </Container>

                <Container fixed
                >
                    <Grid container columns={2} direction='row' spacing={2}>
                        <Grid item columns={2} direction='row' spacing={2}>
                            <Grid container columns={2} direction='row' spacing={2}>
                                <Grid item>
                                    <VisitorsCard />
                                </Grid>
                                <Grid item>
                                    <OrdersCard />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container columns={1} spacing={2} direction='column'>
                                <Grid item>

                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box >
        </Box >
    )
}
