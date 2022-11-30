import Typography from '@mui/material/Typography';

export default function SignInTitle() {
    return (
        <>
            <Typography color='primary' sx={{ fontWeight: 400, fontSize: "1rem", }} >
                Seller area
            </Typography>
            <Typography variant="h2" color='text.primary' sx={{ my: '24px', fontWeight: 'bold', fontSize: '24px' }}>
                Shop administration
            </Typography>
            <Typography color='text.disabled' sx={{ mb: "48px", fontWeight: 300, fontSize: "15px" }}>
                Enter your email and password to log in, thank you!
            </Typography>
        </>
    )
}
