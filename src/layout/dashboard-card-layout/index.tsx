import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LinkComponent from 'pages/shared/LinkComponent';

import { ImArrowRight2 } from 'react-icons/im';

const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '24px',
    maxWidth: '350px',
    height: 'fit-content',
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
}
export default function CardLayout({ children, link, linkText, width, title, Icon }: Props) {
    const theme = useTheme();

    return (
        <CardContainer>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                spacing: 2,
            }}>
                <Icon style={{ width: 24, height: 24 }} />
                <Typography variant='h2' sx={{
                    fontSize: "20px",
                    marginLeft: theme.spacing(2),
                }}>
                    {title}
                </Typography>
            </Box>

            {children}
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
                    color: theme.palette.primary.main,

                }}
                iconStyles={{ width: 20, height: 20, color: theme.palette.primary.main }}
            />
        </CardContainer>
    )
}
