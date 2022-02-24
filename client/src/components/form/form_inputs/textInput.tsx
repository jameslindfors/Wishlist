import React from "react";
import type { FormTextInput } from "types/types";

const TextInput = ({
  name,
  placeholder,
  value,
  width,
  type,
  callback,
}: FormTextInput) => {
  return (
    <label className="text-l font-mono font-medium">
      <span className="text-gray-700 dark:text-zinc-200">{`${name}: `}</span>
      <input
        type={type || "text"}
        name={name}
        placeholder={!placeholder ? `${name}` : `${placeholder}`}
        value={value}
        onChange={callback}
        className={`border-2 border-gray-300 p-2 ${width} dark:text-zinc-200`}
      />
    </label>
  );
};

export default TextInput;
