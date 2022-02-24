import React from "react";

const WishlistContent = ({ wishlist }: any) => {
  return (
    <>
      {wishlist.items?.map((item: any) => (
        <div
          key={item.link}
          className="border-2 border-grey-500 dark:bg-neutral-50 w-80 h-80 m-2 p-2 flex justify-center items-center flex-col dark:bg-grey-800"
        >
          <img
            src={item.image}
            alt={item.name}
            className="object-scale-down w-48 h-48 my-5 mx-1 dark:text-darkgrey-300"
          />
          <span className="flex justify-center w-64 my-2">
            <a
              className="w-96  font-mono text-l font-medium dark:text-darkgrey-300"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
            >
              {item.name}
            </a>
            <p className="text-right w-24 font-mono dark:text-darkgrey-300">
              ${item.price}
            </p>
          </span>
        </div>
      ))}
    </>
  );
};

export default WishlistContent;
