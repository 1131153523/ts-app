import * as redux from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
const { createStore, applyMiddleware, compose } = redux
function storeConfig() {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
    return store;
}
export default storeConfig
