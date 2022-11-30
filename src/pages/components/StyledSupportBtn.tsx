import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import SupportIcon from 'assets/icons/supportIcon';

const StyledBtn = styled(IconButton)(({ theme }) => ({
    border: "1px solid #11B35B",
    marginTop: "48px",
    borderRadius: "42px",
    height: "50px",
    padding: " 6px 16px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "16px",
    color: theme.palette.text.primary,
    minWidth: "64px",
    backgroundColor: "white",
    fontFamily: theme.typography.fontFamily.secondary,
    fontWeight: 500,
    transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
}))

export default function StyledSupportBtn() {
    return (
        <StyledBtn>
            <SupportIcon />
            Customer support
        </StyledBtn>
    )
}
