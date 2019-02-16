import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.less';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root'
import routeConfig from './common/routeConfig'
import storeConfig from './common/storeConfig'
function renderApp(app: any) {
    ReactDOM.render(app, document.getElementById('root'));
}
const store = storeConfig()
renderApp(<Root store={store} routeConfig={routeConfig}/>)
registerServiceWorker();
