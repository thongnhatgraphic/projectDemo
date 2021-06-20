import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./../Reduce/root";
import thunk from "redux-thunk";
// import rootSaga from "./../saga/rootSaga";
// import createSagaMiddleware from "redux-saga";
// const sagaMiddleware = createSagaMiddleware();

const composeEhencers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

const configureStore = () => {
  const middleWares = [thunk];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(rootReducers, composeEhencers(...enhancers));
  // sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
