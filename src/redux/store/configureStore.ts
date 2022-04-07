// dependencies
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// sagas
import rootSaga from '../sagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
    const store = createStore(
        combineReducers({}),
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    // Run the saga
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
