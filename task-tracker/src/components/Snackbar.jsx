import { useEffect, useState } from "react";
import useMessageStore from "../store/useMessageStore";

function Snackbar() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = useMessageStore.subscribe((state) => {
      if (state.message) {
        setMessage(state.message);
        setMessageType(state.messageType);
        setVisible(true);

        const timer = setTimeout(() => {
          setVisible(false);
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 300); // Wait for fade out animation
        }, 3000);

        return () => clearTimeout(timer);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!message) return null;

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50
        ${messageType === "success" ? "bg-green-700" : "bg-red-700"} 
        bg-opacity-90 px-6 py-3 rounded-md text-white shadow-lg
        transition-opacity duration-300 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <p className="font-medium">{message}</p>
    </div>
  );
}

export default Snackbar;
