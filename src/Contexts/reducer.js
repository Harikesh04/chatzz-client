import * as actionTypes from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SENT: {
      const newState = [...state];
      const { message, roomid } = action.payload;
      const type = actionTypes.SENT;
      const newMessage = {
        type,
        data: {
          message,
          roomid,
        },
      };
      newState.push(newMessage);
      return newState;
    }
    case actionTypes.RECIEVED: {
      const newState = [...state];
      const { message, roomid, user } = action.payload;
      const type = actionTypes.RECIEVED;
      const newMessage = {
        type,
        data: {
          message,
          roomid,
          user,
        },
      };
      newState.push(newMessage);
      return newState;
    }
    case actionTypes.NOTICE: {
      const newState = [...state];
      const { message, roomid } = action.payload;
      const type = actionTypes.NOTICE;
      const newMessage = {
        type,
        data: {
          message,
          roomid,
        },
      };
      newState.push(newMessage);
      return newState;
    }
    default: {
      console.log('Impossible Case');
      return state;
    }
  }
};

/*
action : {
    type : ....,
    payload : {
        mesage : "....",
        roomid : "....",
    }
}
*/
