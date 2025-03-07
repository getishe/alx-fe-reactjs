import React, { useEffect } from "react";
import useTaskStore from "./store/useTaskStore";
import "./App.css";
import Snackbar from "./components/Snackbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import SnackbarDemo from "./components/SnackbarDemo";

function App() {
  const fetchTasks = useTaskStore((state) => state.fetchTasks);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="App min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="w-96 p-6 rounded-lg shadow-md bg-white mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Task Tracker</h1>
          </div>
          <div className="mb-4">
            <TaskForm />
            <TaskList />
          </div>
          {/* <SnackbarDemo /> */}
        </div>
      </div>
      {/* Snackbar should be outside the main container */}
      <Snackbar />
    </div>
  );
}

export default App;
