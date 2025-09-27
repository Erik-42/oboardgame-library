import axiosInstance from "./axiosInstance";
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  LOGIN,
  loginSuccess,
  loginFailure,
  LOGOUT,
  REGISTER,
  registerSuccess,
  registerFailure,
  FETCH_USER,
  fetchUserSuccess,
  fetchUserFailure,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../actions/user_actions";

// Async thunk for login
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return { token, user };
    } catch (err) {
      let errorMessage = 'Erreur de connexion';
      
      if (err.code === 'ECONNABORTED') {
        errorMessage = 'Le serveur ne répond pas. Vérifiez votre connexion ou réessayez plus tard.';
      } else if (err.response) {
        // Le serveur a répondu avec un statut d'erreur
        errorMessage = err.response.data?.message || `Erreur ${err.response.status}: ${err.response.statusText}`;
      } else if (err.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        errorMessage = 'Impossible de se connecter au serveur. Vérifiez votre connexion internet.';
      }
      
      return rejectWithValue(errorMessage);
    }
  }
);

// Middleware to handle login success/failure
const userMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().user;
  
  // Handle login success/failure
  if (loginUser.fulfilled.match(action)) {
    store.dispatch(loginSuccess(action.payload));
  } else if (loginUser.rejected.match(action)) {
    store.dispatch(loginFailure(action.payload));
  }
  
  // Handle other actions
  switch (action.type) {
    case REGISTER:
      axiosInstance
        .post("/register", action.payload)
        .then((res) => {
          store.dispatch(registerSuccess(res.data.message));
        })
        .catch((err) => {
          const error = err.response?.data?.message || 'Erreur lors de l\'inscription';
          store.dispatch(registerFailure(error));
        });
      break;

    case FETCH_USER:
      axiosInstance
        .get("/user/me", {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((res) => {
          store.dispatch(fetchUserSuccess(res.data));
        })
        .catch((err) => {
          const error = err.response?.data?.message || 'Erreur lors du chargement du profil';
          store.dispatch(fetchUserFailure(error));
          
          if (err.response?.status === 401) {
            localStorage.removeItem('token');
            store.dispatch({ type: LOGOUT });
          }
        });
      break;

    case LOGOUT:
      localStorage.removeItem('token');
      store.dispatch({ type: LOGOUT_SUCCESS });
      break;

    default:
      break;
  }
  
  return next(action);
};

export default userMiddleware;
