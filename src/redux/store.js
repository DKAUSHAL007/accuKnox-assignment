import WidgetReducer from "./reducers.js";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    widget: WidgetReducer,
  },
});

export default store;
