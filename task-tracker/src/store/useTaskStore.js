import { create } from "zustand";
import useMessageStore from "./useMessageStore";

const useTaskStore = create((set) => ({
  tasks: [],
  isLoading: false,
  addTask: (task) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  removeTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
  },
  toggleTask: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
  fetchTasks: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      set({ tasks: data.slice(0, 5), isLoading: false });
      useMessageStore
        .getState()
        .setMessage("Tasks fetched successfully", "success");
    } catch (error) {
      console.error("Error fetching tasks:", error);
      set({ isLoading: false });
      useMessageStore.getState().setMessage("Error fetching tasks", "error");
    }
  },
}));

export default useTaskStore;
