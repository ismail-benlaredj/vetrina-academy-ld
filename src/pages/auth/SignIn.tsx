import Logo from 'assets/icons/Logo';
import StyledSupportBtn from 'pages/components/StyledSupportBtn';
import { StyledHeaderBox, SignInContainer, SignInBox, SignInFlexBox } from './components/StyledComponents';
import SignInTitle from './components/SignInTitle';
import SignInForm from './components/SignInForm';
import SignInLinks from './components/SignInLinks';




export default function SignIn() {
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
            <StyledHeaderBox>
                <Logo />
            </StyledHeaderBox>
            <SignInContainer>
                <SignInBox>
                    <SignInFlexBox>
                        <SignInTitle />
                        <SignInForm handleSubmit={handleSubmit} />
                        < SignInLinks />
                    </SignInFlexBox>
                </SignInBox>
                <StyledSupportBtn />
            </SignInContainer>
        </>
    );
}