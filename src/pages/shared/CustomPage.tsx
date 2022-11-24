import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';


export default function CustomPage({ lable }: { lable: string }) {
    return (
        <>
            <Typography variant='h1'>{lable}</Typography>
            <Outlet />
        </>
    )
}
