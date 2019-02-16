import * as React from 'react'
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
function renderRouteConfigV3(routes: IRoute[], contextPath: string) {
    const children:any = []; // children component list
    const renderRoute = (item: IRoute, routeContextPath: string) => {
      let newContextPath:string;
      if (/^\//.test(item.path)) {  
        newContextPath = item.path; 
      } else {
        newContextPath = `${routeContextPath}/${item.path}`;  
      }
      newContextPath = newContextPath.replace(/\/+/g, '/'); 
      if (item.component && item.childRoutes) { 
        const childRoutes: any = renderRouteConfigV3(item.childRoutes, newContextPath);
        children.push(  
          <Route
            key={newContextPath}
            render={props => <item.component {...props}>{childRoutes}</item.component>} 
            path={newContextPath}
          />
        );
      } else if (item.component) {  
        children.push(  
          <Route key={newContextPath} component={item.component} path={newContextPath} exact={true} />
        );
      } else if (item.childRoutes) {  
        item.childRoutes.forEach((r: any) => renderRoute(r, newContextPath));
      }
    };
  
    routes.forEach(item => renderRoute(item, contextPath));
    
    return <Switch>{children}</Switch>;
  }

interface IRootProps extends IStore {
    routeConfig: IRoute[]
}
export default class Root extends React.Component<Required<IRootProps>> {
    public render () {
        const children = renderRouteConfigV3(this.props.routeConfig, '/');
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        )
    }
}