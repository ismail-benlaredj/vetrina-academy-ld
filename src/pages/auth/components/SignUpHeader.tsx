import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Head = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
    marginBottom: "24px",
    fontWeight: 500,
    lineHeight: "32px",
    fontFamily: theme.typography.fontFamily.secondary,

}))
export default function SignUpHeader() {
    return (
        <>
            <Head variant="h1">
                Create your E-Commerce
            </Head>
            <Typography
                variant="h3"
                color="text.disabled"
                sx={{ mb: "24px" }}
            >
                Try Vetrina Live for free and open your online store in minutes. No credit card required.
            </Typography>
        </>
    )
}
