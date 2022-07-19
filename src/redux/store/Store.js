import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "../rootReducer/rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
// export const store = legacy_createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

export let store = legacy_createStore(persistedReducer);
export let persistor = persistStore(store);
