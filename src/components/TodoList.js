import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
const TodoList = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState();
  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };
  const addHandler = () => {
    let payload = {
      label: inputVal,
      id: Math.floor(Math.random() * 100)
    };

    dispatch(addTodo(payload));
  };

  return (
    <>
      <input value={inputVal} onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
    </>
  );
};
export default TodoList;
