import { StyledInput } from 'pages/components/StyledInput';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type SignInFormProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SignInForm({ handleSubmit }: SignInFormProps) {
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '380px' }}>

            <StyledInput
                type="email"
                placeholder="Insert your email"
                required
            />
            <StyledInput
                type="password"
                placeholder="Password"
                required
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, width: "100%" }}
            >
                Sign In
            </Button>
        </Box>
    )
}
