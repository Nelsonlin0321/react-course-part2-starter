import { useReducer } from "react";
import "./App.css";
// import HomePage from "./routing/HomePage";
// import NavBar from "./routing/NavBar";
import TaskContext from "./state-management/contexts/taskContext";
import tasksReducer from "./state-management/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
