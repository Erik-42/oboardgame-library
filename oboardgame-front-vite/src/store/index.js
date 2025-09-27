import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import userReducer from "../reducers/user_reducer";
import { loginUser } from "../middlewares/user_middleware";
import userMiddleware from "../middlewares/user_middleware";
import libraryMiddleware from "../middlewares/library_middleware";
import boardgameMiddleware from "../middlewares/boardgame_middleware";
import noteMiddleware from "../middlewares/note_middleware";

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['user/login/fulfilled', 'user/login/rejected'],
      },
    })
      .concat(userMiddleware)
      .concat(libraryMiddleware)
      .concat(boardgameMiddleware)
      .concat(noteMiddleware),
});

export default store;
