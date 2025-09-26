import { combineReducers } from "redux";
import user from "./user_reducer";
import library from "./library_reducer";
import boardgame from "./boardgame_reducer";
import note from "./note_reducer";

export default combineReducers({
  user,
  library,
  boardgame,
  note,
});
