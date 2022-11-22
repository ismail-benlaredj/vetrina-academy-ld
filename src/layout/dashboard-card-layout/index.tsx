import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LinkComponent from 'pages/shared/LinkComponent';

import { ImArrowRight2 } from 'react-icons/im';

const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '24px',
    width: '340px',
    minHeight: '220px',
    background: theme.palette.background.default,
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);"
}))

interface Props {
    children?: React.ReactElement | React.ReactElement[]
    link: string
    linkText: string
    width?: number
    title?: string
    Icon: React.ElementType
    style?: React.CSSProperties
    linkColor?: string
}
export default function CardLayout({ children, link, linkText, title, Icon, style = {}, linkColor }: Props) {
    const theme = useTheme();
    return (
        <CardContainer
            sx={style}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: theme.spacing(3)
            }}>
                <Icon style={{ width: 24, height: 24 }} />
                <Typography variant='h2' sx={{
                    fontSize: "20px",
                    marginLeft: theme.spacing(2),
                }}>
                    {title}
                </Typography>
            </Box>

            <Box sx={{
                marginBottom: theme.spacing(3)
            }}>
                {children}
            </Box>
            <Box sx={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                <LinkComponent
                    link={link}
                    linkText={linkText}
                    Icon={ImArrowRight2}
                    styles={{
                        fontSize: theme.typography.h3.fontSize,
                        fontWeight: 400,
                        marginRight: theme.spacing(2),
                        textDecoration: 'underline',
                        fontFamily: theme.typography.fontFamily.primary,
                        color: linkColor ? linkColor : theme.palette.primary.main,

                    }}
                    iconStyles={{ width: 20, height: 20, color: linkColor ? linkColor : theme.palette.primary.main }}
                />
            </Box>

        </CardContainer>
    )
}
