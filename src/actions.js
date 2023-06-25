export const TODO_DELET = "TODO_DELET";
export const TODO_ADD = "TODO_ADD";

export const addTodo = (payload) => {
  return {
    type: TODO_ADD,
    payload
  };
};
export const delet = (payload) => {
  return {
    type: TODO_DELET,
    payload
  };
};
