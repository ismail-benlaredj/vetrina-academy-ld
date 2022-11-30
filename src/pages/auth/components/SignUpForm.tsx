import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import SignUpInputs from './SignUpInputs';

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

const StyledConditionsBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: "flex-end",
    textAlign: 'left',
    marginBottom: theme.spacing(2)

}))

const StyledConditionsTypography = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    fontWeight: 300,
}))


type SignUpFormProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}


export default function SignUpForm({ handleSubmit }: SignUpFormProps) {
    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <SignUpInputs />
            <StyledConditionsBox>
                <StyledCheckbox value="remember" color="primary" size='medium' />
                <StyledConditionsTypography>
                    I authorize Vetrina Live to process my personal data to receive information,
                    promotional and commercial communications via e-mail
                </StyledConditionsTypography>
            </StyledConditionsBox>

            <StyledConditionsBox>
                <StyledCheckbox value="remember" color="primary" />
                <StyledConditionsTypography>
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

                </StyledConditionsTypography>
            </StyledConditionsBox>


            <Button
                type="submit"
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
    )
}
