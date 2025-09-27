import {
  SAVE_PSEUDO,
  SET_USER_FIELD,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  ERASE_MESSAGE,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  SEND_PASSWORD_SUCCESS,
  SEND_PASSWORD_FAILURE,
  ACCOUNT_VALIDATED,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../actions/user_actions";

const initialState = {
  logged: false,
  token: localStorage.getItem('token') || null,
  loading: false,
  user: null,
  email: "",
  pseudo: "",
  password: "",
  passwordRepeat: "",
  error: null,
  message: null,
  check: false,
};

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'user/login/pending':
    case 'user/fetchUser/pending':
      return {
        ...state,
        loading: true,
        error: null,
        message: null
      };

    case 'user/login/fulfilled':
      return {
        ...state,
        logged: true,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
        message: 'Connexion réussie'
      };
      
    case 'user/fetchUser/fulfilled':
      return {
        ...state,
        logged: true,
        loading: false,
        user: action.payload,
        error: null
      };
      
    case LOGIN_CHECK_SUCCESS:
      return {
        ...state,
        logged: true,
        loading: false,
        user: action.payload,
        error: null
      };

    case 'user/login/rejected':
    case 'user/fetchUser/rejected':
      localStorage.removeItem('token');
      return {
        ...state,
        logged: false,
        loading: false,
        token: null,
        user: null,
        error: action.payload || 'Erreur lors du chargement de l\'utilisateur',
        message: null
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: null
      };

    case REGISTER_FAILURE:
    case UPDATE_FAILURE:
    case SEND_EMAIL_FAILURE:
    case SEND_PASSWORD_FAILURE:
    case FETCH_USER_FAILURE:
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case LOGOUT:
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        message: 'Déconnexion réussie'
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        error: 'Erreur lors de la déconnexion'
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        logged: true,
        error: null
      };

    case DELETE_USER_SUCCESS:
      return {
        ...initialState,
        message: 'Compte supprimé avec succès'
      };

    case ERASE_MESSAGE:
      return {
        ...state,
        message: null,
        error: null
      };

    case SET_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value
      };

    default:
      return state;
  }
}

export default userReducer;
