import { Suspense } from 'react';
import Loader from './Loader';

const SuspenseComponent = (Component: any) => (props: any) =>
(
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);
export default SuspenseComponent;