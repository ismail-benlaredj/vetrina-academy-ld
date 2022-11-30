import { FlexBoxColCenter } from 'pages/components/StyledFlexBox';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  margin: '24px 0',
  fontSize: '16px',
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.main,
  }
}));
export default function SignInLinks() {
  const theme = useTheme();

  return (
    <FlexBoxColCenter>
      <StyledLink href="#" sx={{ color: theme.palette.text.primary }}>
        Forgot password?
      </StyledLink>

      <Typography color="text.primary"
        sx={{
          textDecoration: 'none',
          fontSize: '16px',
        }}
      >
        Don't have an account?
        <StyledLink href="#">
          {"  Signup Now"}
        </StyledLink>
      </Typography>
    </FlexBoxColCenter>
  )
}
