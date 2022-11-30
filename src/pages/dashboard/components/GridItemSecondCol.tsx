import Grid from '@mui/material/Grid';
import ConfigCard from './ConfigCard';
import TrustCard from './TrustCard';
import InviteCard from './InviteCard';
import SupportCard from './SupportCard';
const cardListSecondCol = [<ConfigCard />, <TrustCard />, <InviteCard />, <SupportCard />]

export default function GridItemSecondCol() {
    return (
        <Grid item md={4}>
            <Grid container columns={1} spacing={2} direction="column">
                {
                    cardListSecondCol.map((card, index) => (
                        <Grid item key={index}>
                            {card}
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}
