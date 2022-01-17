
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Toast } from "./styles";

const ToastComponent = () => {
  return (
    <Toast
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      draggable
      pauseOnHover
      limit={5}
    />
  );
};

export { ToastComponent, toast };
