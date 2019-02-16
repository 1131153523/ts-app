import App from '../App'
import About from '../About'
import Home from '../Home'
// 子路由
const childRoutes: IRoute[] = [
    {
        path: 'about',
        name: 'About',
        component: About,
        childRoutes: []
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        childRoutes: []
    }
];
const routes: IRoute[] = [
    {
        path: '/',
        component: App,
        childRoutes: [
            ...childRoutes,
            // { path: '*', name: 'Page not found', component: PageNotFound },
        ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
    },
];
function handleIndexRoute(route: IRoute) {
    if (!route.childRoutes || !route.childRoutes.length) {
        return;
    }
    const indexRoute:IRoute | undefined = route.childRoutes.find((value: IRoute): boolean  => value.isIndex as boolean);
    if (indexRoute) {
        const first = { ...indexRoute };
        first.path = '';
        first.exact = true;
        first.autoIndexRoute = true; 
        route.childRoutes.unshift(first);
    }
    route.childRoutes.forEach(handleIndexRoute);
}
routes.forEach(handleIndexRoute);
export default routes;
