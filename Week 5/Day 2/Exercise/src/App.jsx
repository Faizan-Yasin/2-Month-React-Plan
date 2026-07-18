import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoApp from "./Components/TodoApp";
import DebugBanner from "./Components/DebugBanner";

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.body.style.backgroundColor = theme ? "#ffffff" : "#1f2937";
    document.body.style.color = theme ? "#000000" : "#ffffff";
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoApp />
      <DebugBanner />
    </>
  );
};

export default App;