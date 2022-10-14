import { createContext, useReducer } from 'react';

export const Context = createContext({});

const user = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const newState = { ...action.payload.profile };
      return newState;
    }
    case 'LOGOUT': {
      const newState = {};
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, user);

  const Login = (profile) => {
    const action = {
      type: 'LOGIN',
      payload: {
        profile,
      },
    };
    dispatch(action);
  };
  const Logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const fetchLocalStorage = () => {
    const data = localStorage.getItem('googleLogin');
    if (data) {
      const newData = JSON.parse(data);
      dispatch({
        type: 'LOGIN',
        payload: {
          profile: newData,
        },
      });
    }
  };

  const value = { state, Login, Logout, fetchLocalStorage };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
