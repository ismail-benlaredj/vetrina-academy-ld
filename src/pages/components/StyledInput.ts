import { styled } from '@mui/material/styles';

export const StyledInput = styled('input')(({ theme }) => ({
    borderRadius: '5px',
    border: '1px solid #E5E5E5',
    padding: '15.5px 12px',
    height: '50px',
    width: '100%',
    fontSize: '20px',
    fontWeight: '500',
    color: "black",
    marginBottom: "24px",
    '&:focus': {
        outline: 'none',
        borderColor: theme.palette.primary.main,
        fontSize: '20px',
        fontWeight: '500',
        color: "black",
    },
    '&::placeholder': {
        color: theme.palette.text.disabled,
        fontSize: '17px',
        fontWeight: '500',
    }
}));