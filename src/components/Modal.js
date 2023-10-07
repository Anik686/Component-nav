import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children, actionBar, onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div className="fixed bg-gray-300 opacity-80 inset-0" onClick={onClose} />
      <div className="fixed bg-white inset-60 p-10">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
