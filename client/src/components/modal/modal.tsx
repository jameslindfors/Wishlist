import React from "react";

type ModalProps = {
  heading?: string;
  message?: string;
  link?: string;
  onClose?: () => void;
};

const Modal = ({ heading, message, link, onClose }: ModalProps) => {
  console.log(heading, message, link);
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      {/* <div className="fixed inset-0 bg-gray-900 opacity-75 z-10"></div> */}
      <div className="fixed inset-0 bg-white z-20 flex flex-col justify-center items-center">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h1
            className="text-3xl font-bold text-center font-mono dark:text-zinc-200"
            onClick={onClose}
          >
            {heading}
          </h1>
          <p className="text-center">{message}</p>
          <a
            className="text-center text-blue-500"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Wishlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
