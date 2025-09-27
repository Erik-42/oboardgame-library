// Types d'actions pour la récupération de la bibliothèque
export const FETCH_LIBRARY_REQUEST = "FETCH_LIBRARY_REQUEST";
export const FETCH_LIBRARY_SUCCESS = "FETCH_LIBRARY_SUCCESS";
export const FETCH_LIBRARY_FAILURE = "FETCH_LIBRARY_FAILURE";

// Action pour démarrer le chargement de la bibliothèque
export const fetchLibraryRequest = () => ({
  type: FETCH_LIBRARY_REQUEST
});

// Action pour le succès du chargement de la bibliothèque
export const fetchLibrarySuccess = (library) => ({
  type: FETCH_LIBRARY_SUCCESS,
  payload: library
});

// Action pour l'échec du chargement de la bibliothèque
export const fetchLibraryFailure = (error) => ({
  type: FETCH_LIBRARY_FAILURE,
  payload: error
});

// Action asynchrone pour récupérer la bibliothèque
export const fetchLibrary = () => {
  return async (dispatch) => {
    dispatch(fetchLibraryRequest());
    try {
      // Remplacez cette URL par votre véritable endpoint d'API
      const response = await fetch('/api/library');
      if (!response.ok) {
        throw new Error('Échec du chargement de la bibliothèque');
      }
      const data = await response.json();
      dispatch(fetchLibrarySuccess(data));
    } catch (error) {
      dispatch(fetchLibraryFailure(error.message));
    }
  };
};

export const SAVE_DATA = "SAVE_DATA";

export const saveData = (data) => ({
  type: SAVE_DATA,
  data,
});

export const ADD_BOARDGAME = "ADD_BOARDGAME";

export const addBoardgame = (name) => ({
  type: ADD_BOARDGAME,
  name,
});

export const ADD_BOARDGAME_SUCCESS = "ADD_BOARDGAME_SUCCESS";

export const addBoardgameSuccess = (message) => ({
  type: ADD_BOARDGAME_SUCCESS,
  message,
});

export const ERASE_SUCCESS_MESSAGE = "ERASE_SUCCESS_MESSAGE";

export const eraseSuccessMessage = () => ({
  type: ERASE_SUCCESS_MESSAGE,
});

export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";

export const addErrorMessage = (message) => ({
  type: ADD_ERROR_MESSAGE,
  message,
});

export const ERASE_ERROR_MESSAGE = "ERASE_ERROR_MESSAGE";

export const eraseErrorMessage = () => ({
  type: ERASE_ERROR_MESSAGE,
});

export const DELETE_BOARDGAME = "DELETE_BOARDGAME";

export const deleteBoardgame = (id) => ({
  type: DELETE_BOARDGAME,
  id,
});

export const ERASE_BOARDGAME_LINE = "ERASE_BOARDGAME_LINE";

export const eraseBoardgameLine = (id) => ({
  type: ERASE_BOARDGAME_LINE,
  id,
});

export const SAVE_DATA_AFTER_UPDATE = "SAVE_DATA_AFTER_UPDATE";

export const saveDataAfterUpdate = (data) => ({
  type: SAVE_DATA_AFTER_UPDATE,
  data,
});

export const UPDATE_LIBRARY_LINE = "UPDATE_LIBRARY_LINE";

export const updateLibraryLine = (data) => ({
  type: UPDATE_LIBRARY_LINE,
  data,
});

export const SELECT_RANDOM_BOARDGAME = "SELECT_RANDOM_BOARDGAME";

export const selectRandomBoardgame = (data) => ({
  type: SELECT_RANDOM_BOARDGAME,
  data,
});

export const SAVE_BOARDGAME_NAME = "SAVE_BOARDGAME_NAME";

export const saveBoardgameName = (boardgame) => ({
  type: SAVE_BOARDGAME_NAME,
  boardgame,
});

export const SAVE_MESSAGE = "SAVE_MESSAGE";

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message,
});

export const ERASE_BOARDGAME_SELECTED = "ERASE_BOARDGAME_SELECTED";

export const eraseBoardgameSelected = () => ({
  type: ERASE_BOARDGAME_SELECTED,
});
