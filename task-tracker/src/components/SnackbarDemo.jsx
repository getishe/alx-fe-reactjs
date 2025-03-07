import React from "react";
import useMessageStore from "../store/useMessageStore";

function SnackbarDemo() {
  const showMessage = useMessageStore((state) => state.showMessage);

  const showSuccessMessage = () => {
    showMessage("Task added successfully!", "success");
  };

  const showErrorMessage = () => {
    showMessage("Failed to add task!", "error");
  };

  return (
    <div className="mt-4 border-t pt-4">
      <h2 className="text-lg mb-2">Test Notifications</h2>
      <div className="flex gap-2">
        <button
          onClick={showSuccessMessage}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
        >
          Test Success
        </button>
        <button
          onClick={showErrorMessage}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Test Error
        </button>
      </div>
    </div>
  );
}

export default SnackbarDemo;
