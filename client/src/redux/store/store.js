import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga"; // hàm này có nhiệm vụ tạo ra một middleware năm giữa action và reducer trong redux
import rootReducer from "../reducers/index";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// Middleware

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["post"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware(); //
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
