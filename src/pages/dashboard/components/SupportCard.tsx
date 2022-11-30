import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled, useTheme } from '@mui/material/styles';

import avatar from 'assets/images/avatar.png';
import { FiHeadphones } from 'react-icons/fi';


const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '24px',
    width: '340px',
    minHeight: '200px',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);"
}))

export default function SupportCard() {
    const theme = useTheme();

    return (
        <CardContainer >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',

            }}>
                <FiHeadphones style={{ width: 24, height: 24 }} />
                <Typography variant='h2'
                    sx={{
                        fontSize: "20px",
                        marginLeft: theme.spacing(2),
                    }}>
                    Customer support
                </Typography>
            </Box>


            <Box sx={{ display: "flex", alignItems: 'center' }}>
                <Avatar alt="Marina" src={avatar} sx={{ marginRight: '22px' }} />
                <Typography
                    sx={{
                        fontSize: "15px",
                        fontWeight: 400,
                    }}
                >
                    Marina is here to help you.</Typography>
            </Box>
            <Button variant="contained">Contact us</Button>
        </CardContainer>
    )
}
