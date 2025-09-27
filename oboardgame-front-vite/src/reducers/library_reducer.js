import {
  ADD_BOARDGAME_SUCCESS,
  ADD_ERROR_MESSAGE,
  ERASE_BOARDGAME_LINE,
  ERASE_BOARDGAME_SELECTED,
  ERASE_ERROR_MESSAGE,
  ERASE_SUCCESS_MESSAGE,
  SAVE_BOARDGAME_NAME,
  SAVE_DATA,
  SAVE_DATA_AFTER_UPDATE,
  SAVE_MESSAGE,
  SELECT_RANDOM_BOARDGAME,
  UPDATE_LIBRARY_LINE,
  FETCH_LIBRARY_REQUEST,
  FETCH_LIBRARY_SUCCESS,
  FETCH_LIBRARY_FAILURE
} from "../actions/library_actions";

// État initial
const initialState = {
  library: [],
  loading: false,
  error: null,
  successMessage: '',
  errorMessage: '',
  selectedBoardgame: null
};

// Reducer
export default function libraryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIBRARY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case FETCH_LIBRARY_SUCCESS:
      return {
        ...state,
        loading: false,
        library: action.payload,
        error: null
      };
      
    case FETCH_LIBRARY_FAILURE:
      return {
        ...state,
        loading: false,
        library: [],
        error: action.payload
      };
      
    case ADD_BOARDGAME_SUCCESS:
      return {
        ...state,
        library: [...state.library, action.payload],
        successMessage: 'Jeu ajouté avec succès',
        errorMessage: ''
      };
      
    case UPDATE_LIBRARY_LINE:
      return {
        ...state,
        library: state.library.map(item => 
          item.id === action.payload.id ? action.payload : item
        ),
        successMessage: 'Jeu mis à jour avec succès',
        errorMessage: ''
      };
      
    case ERASE_BOARDGAME_LINE:
      return {
        ...state,
        library: state.library.filter(item => item.id !== action.payload),
        successMessage: 'Jeu supprimé avec succès',
        errorMessage: ''
      };
      
    case SELECT_RANDOM_BOARDGAME:
      return {
        ...state,
        selectedBoardgame: action.payload
      };
      
    case SAVE_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
        errorMessage: ''
      };
      
    case ADD_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: ''
      };
      
    case ERASE_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: ''
      };
      
    case ERASE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: ''
      };
      
    case ERASE_BOARDGAME_SELECTED:
      return {
        ...state,
        selectedBoardgame: null
      };
      
    default:
      return state;
  }
}
