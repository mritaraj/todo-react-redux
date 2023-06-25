const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      console.log(action.payload, "actionPayload");
      console.log(state, "staee");
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "TODO_DELET":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    default:
      return state;
  }
};
export default reducer;
