import { createStore, combineReducers, applyMiddleware, Store, Reducer, DeepPartial, Middleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const getStoreReducer = (reducers: any, history: any) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });

const createReduxStore = (
  reducers: Reducer,
  initialState: DeepPartial<any>,
  history: any,
  client?: any,
  routerMiddleware?: Middleware
): Store => {
  return createStore(
    getStoreReducer(reducers, history),
    initialState, // initial state
    routerMiddleware ? composeWithDevTools(applyMiddleware(routerMiddleware)) : undefined
  );
};

export default createReduxStore;
