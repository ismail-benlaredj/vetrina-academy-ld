import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { styled, useTheme } from '@mui/material/styles';
import { FiExternalLink } from 'react-icons/fi';

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
            <LinearBox >
            </LinearBox >
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}>

                <Container fixed>
                    <StyledLinearContent>
                        <Typography variant='h1' sx={{ color: "primary.contrastText" }}>
                            Welcome Mario!
                        </Typography>

                        <Link href="#" >
                            <IconButton sx={{
                                color: "primary.contrastText",

                            }} >
                                <Typography sx={{
                                    fontSize: theme.typography.h3.fontSize,
                                    fontWeight: 500,
                                    marginRight: theme.spacing(2),
                                    textDecoration: 'underline',
                                }}>
                                    app.vetrinalive.it/fenoh-store
                                </Typography>
                                <FiExternalLink style={{ width: 24, height: 24 }} />
                            </IconButton>
                        </Link>
                    </StyledLinearContent>
                </Container>
            </Box>
        </Box>
    )
}
