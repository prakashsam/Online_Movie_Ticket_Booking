import { CREATE_USERS_REQUEST, CREATE_USERS_SUCCESS, CREATE_USERS_FAILURE } from './userTypes';
import axios from 'axios'

export const registerUsers = (values) => {
  console.log('values',values)
    return (dispatch) => {
      dispatch(createUserRequest(values))
      axios
        .post('http://localhost:4000/user', values)
        .then(response => {
          // response.data is the users
          const users = response;
          dispatch(createUserSuccess(users))
          console.log('users',users)
        })
        .catch(error => {
          // error.message is the error message
          dispatch(createUserFailure(error.message))
        })
    }
  }


export const createUserRequest = (values) => {
    return {
        type : CREATE_USERS_REQUEST,
        payload: values
    }
}

export const createUserSuccess = () => {
    return {
        type: CREATE_USERS_SUCCESS
    }
}

export const createUserFailure = () => {
    return {
        type: CREATE_USERS_FAILURE
    }
}