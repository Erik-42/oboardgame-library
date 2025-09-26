// Nouveau contenu pour le reducer des notes
import {
  ADD_NOTE,
  DELETE_NOTE,
  HAS_NOTE,
  REMOVE_NOTE,
} from "../actions/note_actions";

const initialState = {
  notes: {},
};

function noteReducer(state = initialState, action) {
  switch (action.type) {
    case HAS_NOTE:
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.noteId]: { ...state.notes[action.noteId], hasNote: true },
        },
      };

    case ADD_NOTE:
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.noteId]: { ...state.notes[action.noteId], note: action.note },
        },
      };

    case DELETE_NOTE:
      const updatedNotes = { ...state.notes };
      delete updatedNotes[action.noteId];
      return {
        ...state,
        notes: updatedNotes,
      };

    default:
      return state;
  }
}

export default noteReducer;
