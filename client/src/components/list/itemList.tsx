import React from "react";
import type { ItemListProps } from "../../../types/types";

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div className="flex flex-row flex-wrap items-center  mx-56 w-4/5 my-5">
      {items.length > 0 &&
        items.map((item: any) => (
          <div
            key={item.link}
            className="border-2 border-grey-300 w-80 h-80 m-2 p-4 flex justify-center items-center flex-col dark:bg-slate-50"
          >
            {/* <button className="">Edit</button> */}
            <img
              src={item.image}
              className="object-scale-down w-48 h-48 my-2 mx-1"
            />
            <span className="flex flex-row align-baseline my-2 h-auto mx-auto">
              <a
                className="font-mono text-xl font-semibold"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
              >
                {item.name}
              </a>
              <p className="text-right text-l w-24 font-mono">${item.price}</p>
            </span>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
