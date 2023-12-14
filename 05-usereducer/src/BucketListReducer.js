import { v4 as uuidv4 } from "uuid";

export const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };

    case "INPUT_TOGGLE":
      return {
        ...state,
        [action.field]: !action.payload,
      };
    default:
      return state;
  }
};

export const blReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISH": {
      const newWish = { ...action.payload, id: uuidv4(), isDone: false };
      return [...state, newWish];
    }
    case "DONE_WISH": {
      const index = state.findIndex((wish) => wish.id === action.payload);
      const doneWish = [...state];
      doneWish[index].isDone = true;
      return [...doneWish];
    }
    case "REMOVE_WISH": {
      const wishRemained = state.filter((wish) => wish.id !== action.payload);
      return [...wishRemained];
    }
    default:
      return state;
  }
};
