import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import * as actionTypes from './actionTypes';
export const Context = createContext({});

// global state defined here
const chats = [
  {
    type: 'notice',
    data: {
      message: 'Ashutosh Singh Joined',
      roomid: '3',
    },
  },
  {
    type: 'sent',
    data: {
      message: 'Hey Ajay how are you',
      roomid: '3',
    },
  },
  {
    type: 'recieved',
    data: {
      message: 'Hello Ashutosh, you are an amazing developer',
      user: 'Ajay Yadav',
      roomid: '3',
    },
  },
];

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, chats);

  const sendMessage = (message, roomid) => {
    const action = {
      type: actionTypes.SENT,
      payload: {
        message,
        roomid,
      },
    };
    dispatch(action);
  };

  const recievedMessage = (message, roomid, user) => {
    const action = {
      type: actionTypes.RECIEVED,
      payload: {
        message,
        roomid,
        user,
      },
    };
    dispatch(action);
  };

  const recievedNotice = (message, roomid, user) => {
    const action = {
      type: actionTypes.NOTICE,
      payload: {
        message,
        roomid,
        user,
      },
    };
    dispatch(action);
  };
  const value = { state, sendMessage, recievedMessage, recievedNotice };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
