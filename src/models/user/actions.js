const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

const requestLogin = data => {
  return {
    data,
    type: GET_USER,
  };
};

const requestLoginSuccess = payload => {
  return {
    payload,
    type: GET_USER_SUCCESS,
  };
};

export {GET_USER, GET_USER_SUCCESS, requestLogin, requestLoginSuccess};
