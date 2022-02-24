import React, { useState } from "react";
import type { FormProps, Item } from "../../../types/types";
import TextInput from "./form_inputs/textInput";

const ItemInitialState: Item = {
  name: "",
  image: "",
  price: 0,
  link: "",
};

const ItemForm = ({ items, setItems, wishlist, setWishlist }: FormProps) => {
  const [item, setItem] = useState<Item>(ItemInitialState);

  return (
    <form className="my-2 flex w-2/3 space-x-2">
      {/* <label className="text-l font-mono font-medium">
        <span className="text-gray-700 dark:text-zinc-200 w-full">
          Item Name:{" "}
        </span>
        <input
          type="text"
          name="itemname"
          placeholder="My Item"
          value={item.name}
          onChange={(e) => {
            // set the item name
            const name = e.target.value;
            setItem({ ...item, name });
          }}
          className="border-2 border-gray-300 p-2 "
        />
      </label> */}
      <TextInput
        name="Item Name"
        value={item.name}
        callback={(e: any) => {
          const name = e.target.value;
          setItem({ ...item, name });
        }}
      />
      <TextInput
        name="Link to Image"
        value={item.image}
        placeholder="...com/image.jpg"
        callback={(e: any) => {
          const image = e.target.value;
          setItem({ ...item, image });
        }}
      />
      <TextInput
        name="Price"
        type="number"
        placeholder="$0.00"
        callback={(e: any) => {
          const price = e.target.value;
          setItem({ ...item, price: Number(price) });
        }}
      />
      <TextInput
        name="Link to Item"
        value={item.link}
        placeholder="example.com/item"
        callback={(e: any) => {
          const link = e.target.value;
          setItem({ ...item, link });
        }}
      />
      <button
        className="bg-sky-800 text-white font-mono font-medium py-2 px-4 rounded"
        type="button"
        onClick={() => {
          // add the item to the list
          setItems([...items, item]);
          setWishlist({ ...wishlist, items: [...items, item] });
          // reset the item state
          setItem(ItemInitialState);
        }}
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
