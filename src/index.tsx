import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.less';
import './style/normalize.css'
import Root from './Root'
import routeConfig from './common/routeConfig'
import storeConfig from './common/storeConfig'
import registerServiceWorker from './registerServiceWorker';
function renderApp(app: any) {
    ReactDOM.render(app, document.getElementById('root'));
}
const store = storeConfig()
renderApp(<Root store={store} routeConfig={routeConfig}/>)
registerServiceWorker();
