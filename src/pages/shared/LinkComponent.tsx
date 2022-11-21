import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
interface Props {
    link: string
    linkText: string
    Icon: React.ElementType
    styles?: any
    iconStyles?: { width: number, height: number, color: string }
}
export default function LinkComponent({ link, Icon, styles, linkText, iconStyles = { width: 24, height: 24, color: 'inherit' } }: Props) {
    return (
        <Link href={link} >
            <IconButton sx={{
                color: "primary.contrastText",
                padding: 0,
            }} >
                <Typography sx={styles}>
                    {linkText}
                </Typography>
                <Icon style={{
                    width: iconStyles.width,
                    height: iconStyles.height,
                    color: iconStyles.color
                }} />
            </IconButton>
        </Link>
    )
}
