import React from "react";

const ButtonInput = (props: any) => {
  return (
    <button
      className="bg-sky-800 text-white font-mono font-medium py-2 px-3 mx-0 rounded"
      type={props.type}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default ButtonInput;
