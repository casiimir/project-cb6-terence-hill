export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SAVE_DATA":
      return {
        ...state,
        fetchedData: action.payload,
      };
    default:
      return state;
  }
};
