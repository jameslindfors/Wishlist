import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="font-mono text-3xl my-2 dark:text-zinc-200">Uh oh...</h1>
      <h1 className="font-mono text-l my-1 dark:text-zinc-200">
        looks like something went wrong.
      </h1>
      <p className="font-mono text-l my-1 text-center dark:text-zinc-200">
        If you're trying to access a wishlist please wait a few minutes and try
        again <br /> or double check the url as it is case sensitive.
      </p>
      <Link
        to="/"
        className="font-mono text-l text-sky-500 dark:text-sky-300 my-4"
      >
        Create a Wishlist
      </Link>
    </div>
  );
};

export default NotFound;
