import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import VisitorsCard from './component/VisitorsCard';
import OrdersCard from './component/OrdersCard';
import { styled, useTheme } from '@mui/material/styles';
import { FiExternalLink } from 'react-icons/fi';
import LinkComponent from 'pages/components/LinkComponent';
import ConfigCard from './component/ConfigCard';
import TrustCard from './component/TrustCard';
import InviteCard from './component/InviteCard';
import SupportCard from './component/SupportCard';
import AppsCard from './component/AppsCard';
import ExtensionsCard from './component/ExtensionsCard';
import BlogCard from './component/BlogCard';

import { useOutletContext } from "react-router-dom";


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
    const open = useOutletContext();

    const cardListFirstCol = [<VisitorsCard />, <OrdersCard />, <AppsCard />, <ExtensionsCard />]
    const cardListSecondCol = [<ConfigCard />, <TrustCard />, <InviteCard />, <SupportCard />]
    return (
        <Box className='test' sx={{
            position: 'relative',

        }}>
            <LinearBox />

            <Box sx={{
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
                    sx={{ flexGrow: 1 }}
                >
                    <Grid container direction='row' spacing={1} sx={{ justifyContent: 'flex-start' }}>
                        <Grid item md={open ? 8 : 7.35} >
                            <Grid container spacing={1.5} >
                                {
                                    cardListFirstCol.map((card, index) => (
                                        <Grid item key={index}>
                                            {card}
                                        </Grid>
                                    ))
                                }
                                <Grid item md={11.95}>
                                    <BlogCard />
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid container columns={1} spacing={2} direction="column">
                                {
                                    cardListSecondCol.map((card, index) => (
                                        <Grid item key={index}>
                                            {card}
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid >
                </Container >
            </Box >
        </Box >
    )
}
