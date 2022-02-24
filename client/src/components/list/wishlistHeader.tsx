import React from "react";

const WishlistHeader = ({ wishlist }: any) => {
  return (
    <>
      <h1 className="font-mono text-2xl font-semibold dark:text-zinc-200 mb-1">
        {wishlist.name}
      </h1>
      <p className="font-mono text-l font-medium dark:text-zinc-300">
        {wishlist.description}
      </p>
      <p className="font-mono text-l font-medium dark:text-zinc-300">
        {`by: ${wishlist.author}`}
      </p>
    </>
  );
};

export default WishlistHeader;
