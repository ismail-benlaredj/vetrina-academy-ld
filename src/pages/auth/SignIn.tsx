import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { styled, useTheme } from '@mui/material/styles';

import Logo from 'assets/icons/Logo';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function SignIn() {
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
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '70px',
                borderBottom: '1px solid #c4cad2',

            }}>
                <Logo />
            </Box>
            <Box
                sx={{
                    minWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F8F9FB',
                    pt: theme.spacing(10),
                }}
            >
                <Box sx={{
                    width: "730px",
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#fff',

                }}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',

                            width: '60%',
                        }}
                    >

                        <Typography variant="h5" color='primary' >
                            Seller area
                        </Typography>
                        <Typography variant="h2" color='text.primary' sx={{ my: '24px' }}>
                            Shop administration
                        </Typography>
                        <Typography variant="body1" color='text.disabled' sx={{ mb: "48px" }}>
                            Enter your email and password to log in, thank you!
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '380px' }}>
                            <TextField
                                hiddenLabel
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                InputProps={{ disableUnderline: true }}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: "100%" }}
                            >
                                Sign In
                            </Button>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >

                                <Link href="#" variant="h3" color="text.primary"
                                    sx={{
                                        textDecoration: 'none',
                                        mb: '24px',
                                    }}
                                >
                                    Forgot password?
                                </Link>

                                <Typography variant="h3" color="text.primary">
                                    Don't have an account?
                                    <Link href="#" variant="h3" color="primary"
                                        sx={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {"  Sign Up"}
                                    </Link>
                                </Typography>


                            </Box>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </Box>
        </>
    );
}