import home from '../pages/home/home';
import profile from '../pages/profile/profile';

const publicRouter = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/profile',
        component: profile,
    },
];

export default publicRouter;
