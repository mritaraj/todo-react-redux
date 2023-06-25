import "./styles.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="App">
      <TodoList />
      <Todo />
    </div>
  );
}
