import Logo from 'assets/icons/Logo';
import StyledSupportBtn from 'pages/components/StyledSupportBtn';
import Box from '@mui/material/Box';
import { SignUpContainer, SignUpBox, SignUpFlexBox } from './components/StyledComponents';
import SignUpHeader from './components/SignUpHeader';
import SignUpForm from './components/SignUpForm';



export default function SignUp() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <SignUpContainer>
            <SignUpBox>
                <SignUpFlexBox>
                    <Box sx={{ mb: "72px" }}>
                        <Logo width={167.85} height={25} />
                    </Box>
                    <SignUpHeader />
                    <SignUpForm handleSubmit={handleSubmit} />
                    <StyledSupportBtn />
                </SignUpFlexBox>
            </SignUpBox>

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
        </SignUpContainer>
    );
}