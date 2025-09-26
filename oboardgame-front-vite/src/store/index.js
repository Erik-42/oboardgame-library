import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import userMiddleware from "../middlewares/user_middleware";
import libraryMiddleware from "../middlewares/library_middleware";
import boardgameMiddleware from "../middlewares/boardgame_middleware";
import noteMiddleware from "../middlewares/note_middleware";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userMiddleware)
      .concat(libraryMiddleware)
      .concat(boardgameMiddleware)
      .concat(noteMiddleware),
});

export default store;
