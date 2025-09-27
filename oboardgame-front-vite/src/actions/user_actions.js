import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../middlewares/axiosInstance';

// Constantes d'action
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const logout = () => ({
  type: LOGOUT
});

export const REGISTER = "REGISTER";

export const LOGIN_CHECK = "LOGIN_CHECK";
export const LOGIN_CHECK_ERROR = "LOGIN_CHECK_ERROR";
export const LOGIN_CHECK_FAILURE = "LOGIN_CHECK_FAILURE";
export const LOGIN_CHECK_SUCCESS = "LOGIN_CHECK_SUCCESS";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const SET_USER_FIELD = "SET_USER_FIELD";

export const setUserField = (value, field) => ({
  type: SET_USER_FIELD,
  value,
  field
});

export const loginCheck = () => ({
  type: LOGIN_CHECK
});

export const loginCheckError = (error) => ({
  type: LOGIN_CHECK_ERROR,
  payload: error
});

export const loginCheckFailure = (error) => ({
  type: LOGIN_CHECK_FAILURE,
  payload: error
});

export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  payload: userData
});

export const SAVE_PSEUDO = "SAVE_PSEUDO";

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  payload: pseudo
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (userData) => ({
  type: REGISTER,
  payload: userData
});

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: message
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error
});

export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const updatePassword = (data) => ({
  type: UPDATE_PASSWORD,
  payload: data
});

export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const updateFailure = (message) => ({
  type: UPDATE_FAILURE,
  payload: message
});

export const UPDATE_SUCCESS = "UPDATE_SUCCESS";

export const updateSuccess = (message) => ({
  type: UPDATE_SUCCESS,
  payload: message
});

export const ERASE_MESSAGE = "ERASE_MESSAGE";

export const eraseMessage = () => ({
  type: ERASE_MESSAGE
});

export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT
});

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

export const forgotPassword = (email) => ({
  type: FORGOT_PASSWORD,
  payload: email
});

export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";

export const sendEmailSuccess = (message) => ({
  type: SEND_EMAIL_SUCCESS,
  payload: message
});

export const SEND_EMAIL_FAILURE = "SEND_EMAIL_FAILURE";

export const sendEmailFailure = (error) => ({
  type: SEND_EMAIL_FAILURE,
  payload: error
});

export const SEND_PASSWORD_SUCCESS = "SEND_PASSWORD_SUCCESS";

export const sendPasswordSuccess = (message) => ({
  type: SEND_PASSWORD_SUCCESS,
  payload: message
});

export const SEND_PASSWORD_FAILURE = "SEND_PASSWORD_FAILURE";

export const sendPasswordFailure = (error) => ({
  type: SEND_PASSWORD_FAILURE,
  payload: error
});

export const NEW_PASSWORD_AFTER_FORGOT = "NEW_PASSWORD_AFTER_FORGOT";

export const newPasswordIfForgot = (token, password, passwordRepeat) => ({
  type: NEW_PASSWORD_AFTER_FORGOT,
  payload: { token, password, passwordRepeat }
});

export const VALIDATE_ACCOUNT = "VALIDATE_ACCOUNT";

export const validateAccount = () => ({
  type: VALIDATE_ACCOUNT
});

export const ACCOUNT_VALIDATED = "ACCOUNT_VALIDATED";

export const accountValidated = () => ({
  type: ACCOUNT_VALIDATED
});

export const FETCH_USER = "FETCH_USER";

export const fetchUserSuccess = (userData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error
});

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/user/me');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch user';
      return rejectWithValue(errorMessage);
    }
  }
);

export const DELETE_USER = "DELETE_USER";

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId
});

export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS
});

export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error
});
