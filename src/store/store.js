import { compose, createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { legacy_createStore as createStore } from 'redux';
// phòng trường hợp chạy không được
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

/// thunk

// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(dispatch);
//   }
// };

///middle ware
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

///////////////////// cấu hình redux devtools
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composeEnhancers = compose(applyMiddleware(...middleWares));

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));
/////////////persit
const configPersist = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(configPersist, rootReducer);

/////////////////store
export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
