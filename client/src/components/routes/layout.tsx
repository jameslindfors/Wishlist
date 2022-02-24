import React from "react";

const Overlay = ({ children }: any) => {
  // console.log(localStorageParseToObject());
  return (
    <>
      {children}
      <footer className="flex justify-center items-center w-full ">
        <a
          className="font-mono font-medium text-l underline text-sky-800 dark:text-blue-500"
          href="https://github.com/jameslindfors"
          target="_self"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </>
  );
};

export default Overlay;
