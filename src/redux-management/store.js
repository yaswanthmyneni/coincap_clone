import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homeReducer from "./slices/homeSlice/homeSlice";
import { homeSaga } from "./homeSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(homeSaga);
