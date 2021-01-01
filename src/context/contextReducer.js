// Reducer takes a funciton in old state and an action then can return a new state
const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
