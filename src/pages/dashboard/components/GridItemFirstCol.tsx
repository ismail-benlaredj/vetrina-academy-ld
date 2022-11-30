import Grid from '@mui/material/Grid';
import BlogCard from './BlogCard';
import VisitorsCard from './VisitorsCard';
import OrdersCard from './OrdersCard';
import AppsCard from './AppsCard';
import ExtensionsCard from './ExtensionsCard';
import { useOutletContext } from "react-router-dom";


const cardListFirstCol = [<VisitorsCard />, <OrdersCard />, <AppsCard />, <ExtensionsCard />]

export default function GridItemFirstCol() {
    const open = useOutletContext();

    return (
        <Grid item md={open ? 8 : 7.35} >
            <Grid container spacing={1.5} >
                {
                    cardListFirstCol.map((card, index) => (
                        <Grid item key={index}>
                            {card}
                        </Grid>
                    ))
                }
                <Grid item md={11.95}>
                    <BlogCard />
                </Grid>
            </Grid>
        </Grid>
    )
}
