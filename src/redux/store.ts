import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
// export const store = createStore(
//     reducer,
//     {},
//     applyMiddleware(thunk)
// )

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
