// Nouveau contenu pour le reducer utilisateur
import {
  SAVE_PSEUDO,
  SET_USER_FIELD,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  UPDATE_FAILURE,
  ERASE_MESSAGE,
  UPDATE_SUCCESS,
  SEND_EMAIL_FAILURE,
  SEND_EMAIL_SUCCESS,
  SEND_PASSWORD_FAILURE,
  SEND_PASSWORD_SUCCESS,
  ACCOUNT_VALIDATED,
} from "../actions/user_actions";

const initialState = {
  logged: false,
  email: "",
  pseudo: "",
  password: "",
  passwordRepeat: "",
  error: null,
  message: null,
  check: false,
};

function userReducer(state = initialState, action) {
  // ... (le reste du code du reducer reste inchangé)
}

export default userReducer;
