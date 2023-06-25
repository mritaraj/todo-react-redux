import { useSelector, useDispatch } from "react-redux";
import { delet } from "../actions";
const Todo = () => {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todo, "todo");
  return (
    <div>
      {todo.map((ele) => {
        return (
          <div className="list-container">
            <p key={ele.id}>{ele.label}</p>
            <button onClick={() => dispatch(delet(ele.id))}>Delet</button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
