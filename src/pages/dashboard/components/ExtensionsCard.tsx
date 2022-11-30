import CardLayout from 'layout/dashboard-card-layout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewIcon from 'assets/icons/new';
import DomainIcon from 'assets/icons/domainIcon';
import { styled, useTheme } from '@mui/material/styles';

const ExtensionsBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    marginBottom: '12px',
}));


// function ExtensionBox (){
//     return(
//         <Box sx={{ width: '150px', marginRight: "50px" }}>
//         <ExtensionsBox sx={{ background: theme.palette.warning.main }}>
//             <DomainIcon />
//         </ExtensionsBox>
//         <Typography variant='h3'
//             sx={{ fontfamily: theme.typography.fontFamily.primary }}
//         >
//             Connect your own domain </Typography>
//     </Box>
//     )
// }

export default function ExtensionsCard() {
    const theme = useTheme();

    return (
        <CardLayout
            linkText="Discover all extensions"
            title="Extensions Marketplace"
            Icon={NewIcon}
            link="#"
            style={{
                height: '343px',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ display: 'flex' }}>



                <Box sx={{ width: '150px', marginRight: "50px" }}>
                    <ExtensionsBox sx={{ background: theme.palette.warning.main }}>
                        <DomainIcon />
                    </ExtensionsBox>
                    <Typography variant='h3'
                        sx={{ fontfamily: theme.typography.fontFamily.primary }}
                    >
                        Connect your own domain </Typography>
                </Box>
                <Box sx={{ width: '150px', marginRight: "50px" }}>
                    <ExtensionsBox sx={{ background: theme.palette.success.main }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: theme.palette.primary.contrastText,
                            }}>
                            <Typography variant='h1'>+50</Typography>
                            <Typography variant='h2'>Prodotti</Typography>
                        </Box>
                    </ExtensionsBox>
                    <Typography variant='h3'
                        sx={{ fontfamily: theme.typography.fontFamily.primary }}
                    >
                        50 Additional
                        Products  </Typography>
                </Box>

            </Box>
        </CardLayout>
    )
}
