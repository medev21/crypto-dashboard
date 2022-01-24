// dependencies
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
    const store = createStore(
        combineReducers({}),
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    return store;
};

export default configureStore;
