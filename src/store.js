import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './root_reducer';
import {watchAll} from './root_saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAll);

export {store};
