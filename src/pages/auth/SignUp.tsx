import Button from '@mui/material/Button';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Logo from 'assets/icons/Logo';

import { styled, useTheme } from '@mui/material/styles';

import StyledSupportBtn from 'pages/components/StyledSupportBtn';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StyledInput } from 'pages/components/StyledInput';


const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    margin: "0 12px 0 0",
    padding: 0,
    position: "relative",
    width: "24px",
    height: "24px",
    '& .MuiSvgIcon-root': {
        fontSize: 28,
    },


}))
const StyledLink = styled(Link)(({ theme }) => ({
    fontSize: 'inherit',
    color: theme.palette.primary.main,
    textDecoration: "none",

}))

export default function SignUp() {
    const theme = useTheme();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            overflow: 'hidden scroll',
            minHeight: "100vh",
            maxHeight: "100vh",

        }}>
            <Box
                sx={{
                    my: "48px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxHeight: '100vh',
                    width: '50%',
                    boxSizing: 'border-box',

                }}
            >
                <Box
                    sx={{
                        width: '470px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        pb: '64px',

                    }}
                >
                    <Box sx={{ mb: "72px" }}>
                        <Logo width={167.85} height={25} />

                    </Box>

                    <Typography variant="h1"
                        sx={{
                            fontSize: '28px',
                            mb: "24px",
                            fontWeight: 500,
                            lineHeight: "32px",
                            fontFamily: theme.typography.fontFamily.secondary,

                        }}
                    >
                        Create your E-Commerce
                    </Typography>
                    <Typography variant="h3" color="text.disabled"
                        sx={{
                            mb: "24px"
                        }}
                    >
                        Try Vetrina Live for free and open your online store in minutes. No credit card required.
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <StyledInput
                            type="text"
                            placeholder="Shop name"
                            required
                        />
                        <StyledInput
                            type="text"
                            placeholder="First and last name"
                            required
                        />
                        <StyledInput
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <StyledInput
                            type="password"
                            placeholder="Enter password"
                            required
                        />
                        <Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: "flex-end", textAlign: 'left', mb: theme.spacing(2) }}>
                            <StyledCheckbox value="remember" color="primary" size='medium' />
                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                I authorize Vetrina Live to process my personal data to receive information,
                                promotional and commercial communications via e-mail
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: "flex-end", textAlign: 'left' }}>
                            <StyledCheckbox value="remember" color="primary" />
                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    fontWeight: 300,
                                }}
                            >
                                By creating an account you accept the
                                <StyledLink href="#" >
                                    {" Terms And Conditions "}
                                </StyledLink >
                                Read our
                                <StyledLink href="#" >
                                    {"  Privacy Policy  "}
                                </StyledLink >
                                and
                                <StyledLink href="#" >
                                    {" Cookie Policy "}
                                </StyledLink >

                            </Typography>
                        </Box>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: "100%" }}
                        >
                            Create shop
                        </Button>

                        <Typography variant='h3'>
                            Already have an account?
                            <StyledLink href="#" >
                                {" Login now"}
                            </StyledLink >
                        </Typography>
                    </Box>
                    <StyledSupportBtn />
                </Box>
            </Box>

            <img src="https://admin.vetrinalive.com/static/media/signup_bg.2e7c7a8f.png?__WB_REVISION__=2e7c7a8f010d7ba49c975f95cee6e817" alt="vetrina"
                style={{
                    position: 'absolute',
                    left: '50%',
                    right: '0',
                    top: 0,
                    height: '100%',
                    minHeight: '100vh',
                    maxWidth: "50%",
                    width: '100%',
                    objectFit: 'cover',
                    boxSizing: "border-box"
                }}
            />
        </Box>
    );
}