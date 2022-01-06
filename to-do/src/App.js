import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodo] = useState([]);

  const todoText = useRef();

  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodo(existingTodos ? JSON.parse(existingTodos) : []);
  }, [])

  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodo(next);
    localStorage.setItem("todos", JSON.stringify(next));
  }

  return (
    <div className="text-center">
      <Navbar />
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
      <form onSubmit={addTodo}>
        <label htmlFor="enter_tasks" className="form-label">Enter Tasks Here</label>
        <input type="email" className="form-control" id="enter_tasks" placeholder="memories are everywhere" ref={todoText}/>
      </form>
    </div>
  );
}

export default App;
