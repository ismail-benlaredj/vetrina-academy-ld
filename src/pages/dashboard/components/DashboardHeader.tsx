import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LinkComponent from 'pages/components/LinkComponent';
import { FiExternalLink } from 'react-icons/fi';
import Box from '@mui/material/Box';


const StyledLinearContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
}));

export default function DashboardHeader() {
    const theme = useTheme();

    return (
        <Container fixed
            sx={{ marginBottom: theme.spacing(6) }}>
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
    )
}
