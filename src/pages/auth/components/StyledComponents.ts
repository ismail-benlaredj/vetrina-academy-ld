import Box from '@mui/material/Box';
import { styled, } from '@mui/material/styles';

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '70px',
    borderBottom: '1px solid #c4cad2',
}));

export const SignInContainer = styled(Box)(({ theme }) => ({
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    padding: `${theme.spacing(10)} 0`,
}));

export const SignInBox = styled(Box)(({ theme }) => ({
    width: "730px",
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    padding: '40px',
}));

export const SignInFlexBox = styled(Box)(({ theme }) => ({
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
}));

export const SignUpContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    overflow: 'hidden scroll',
    minHeight: "100vh",
    maxHeight: "100vh",
}));

export const SignUpBox = styled(Box)(({ theme }) => ({
    margin: "48px 0",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '100vh',
    width: '50%',
    boxSizing: 'border-box',
}))

export const SignUpFlexBox = styled(Box)(({ theme }) => ({
    width: '470px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '64px',
}))