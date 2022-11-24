// material-ui
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const LoaderBox = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});

const Loader = () => (
    <LoaderBox>
        <LinearProgress color="primary" />
    </LoaderBox>
);

export default Loader;
