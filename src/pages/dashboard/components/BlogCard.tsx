import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import { styled, useTheme } from '@mui/material/styles';
import { FiFileText } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import LinkComponent from 'pages/components/LinkComponent';

import { useFetch } from 'hooks/useFetch';

const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '24px',
    width: '100%',
    maxHeight: '620px',
    background: theme.palette.background.default,
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);"
}))
const CardHeader = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
}))

interface BlogCardProps {
    postLink: string
    imgLink: string
    lable: string
    title: string
    meta: string
}
function BlogPost({ imgLink, title, meta, lable, postLink }: BlogCardProps) {
    const theme = useTheme();
    return (
        <Link href={postLink} sx={{
            textDecoration: 'none',
            width: "330px",
            height: "100px",
        }}>
            <Box sx={{ display: 'flex' }}>
                <img alt='Post' src={imgLink}
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "16px"
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant='h6' color={theme.palette.primary.main}>
                        {lable}
                    </Typography>
                    <Typography sx={{ fontSize: 15, fontWeight: 500 }} color={theme.palette.text.primary}>
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        color={theme.palette.text.disabled}
                        sx={{ textDecoration: 'underline' }}
                    >
                        {`Estimated reading: ${meta} min`}
                    </Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default function BlogCard() {
    const theme = useTheme();
    const [data] = useFetch('https://api.vetrinalive.com/api/blog-posts');

    return (
        <CardContainer>
            <CardHeader>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: theme.spacing(3)
                }}>
                    <FiFileText style={{ width: 24, height: 24 }} />
                    <Typography variant='h2' sx={{
                        fontSize: "20px",
                        marginLeft: theme.spacing(2),
                    }}>
                        Latest news
                    </Typography>
                </Box>
                <LinkComponent
                    link='#'
                    linkText='Visit our blog'
                    Icon={FiExternalLink}
                    styles={{
                        fontSize: theme.typography.h3.fontSize,
                        fontWeight: 400,
                        marginRight: theme.spacing(2),
                        textDecoration: 'underline',
                        color: theme.palette.primary.main
                    }}
                    iconStyles={{ color: theme.palette.primary.main }}
                />
            </CardHeader>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
            }}>
                <Grid container columns={2} spacing={4}>
                    {data && data.map((item: any) => (
                        <Grid item sx={{ width: '50%' }} key={item.id + 5}>
                            <BlogPost
                                key={item.id}
                                imgLink={item.image_url}
                                postLink={item.link}
                                lable={item.category}
                                title={item.title}
                                meta={item.read_time}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </CardContainer>
    )
}
