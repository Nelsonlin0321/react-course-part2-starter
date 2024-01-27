import { useReducer } from "react";
import "./App.css";
import HomePage from "./routing/HomePage";
import NavBar from "./routing/NavBar";
import TaskContext from "./state-management/contexts/taskcontext";
import tasksReducer from "./state-management/tasksReducer";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
}

export default App;
