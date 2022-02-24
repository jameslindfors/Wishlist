import React, { useState } from "react";
import { saveWishlist } from "../../utils/gql";
import type { FormProps } from "types/types";

import ItemForm from "./itemForm";
import TextInput from "./form_inputs/textInput";
import ButtonInput from "./form_inputs/formButton";
import Group from "../container/group";
import Container from "../container/container";

import { wishlistInitialState } from "../../utils/initialStates";
import Modal from "../modal/modal";

const WishlistForm = ({
  items,
  setItems,
  wishlist,
  setWishlist,
}: FormProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{
    heading: string;
    message: string;
    link?: any;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //TODO:
  // ? Add types to event
  const submitForm = async (e: any) => {
    e.preventDefault();
    setWishlist({ ...wishlist });
    const itemLength = items.length;

    if (itemLength === 0) {
      setModalData({
        heading: "Wait a second...",
        message:
          "You need to add at least one item to your wishlist before sharing.",
      });
      setShowModal(true);
      return;
    }

    setLoading(true);
    await saveWishlist(wishlist)
      .then((res) => {
        const { name, id, url } = res;
        setLoading(false);
        setModalData({
          heading: "Success! 🎉",
          message: "Your wishlist can be shared! Here's the link: ",
          link: url,
        });
        setShowModal(true);
      })
      .catch((err) => {
        setLoading(false);
        setModalData({
          heading: "Oops!",
          message: "Something went wrong. Please try again.",
        });
        setShowModal(true);
      });
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold text-center font-mono dark:text-zinc-200">
        Create a new Wishlist
      </h1>
      {showModal && (
        <Modal
          heading={modalData?.heading}
          message={modalData?.message}
          link={modalData?.link}
          onClose={() => setShowModal(false)}
        />
      )}
      <form className="my-2 flex flex-col">
        <Group styles="my-2 space-x-10">
          <TextInput
            name="Wishlist Name"
            value={wishlist.name}
            width="w-2/3"
            callback={(e: any) =>
              setWishlist({ ...wishlist, name: e.target.value })
            }
          />
          <ButtonInput name="Share" type="submit" onClick={submitForm} />
        </Group>
        <Group styles="mr-0 my-2 space-x-3">
          <TextInput
            name="Wishlist Description"
            value={wishlist.description}
            width="w-50"
            callback={(e: any) =>
              setWishlist({ ...wishlist, description: e.target.value })
            }
          />
          <TextInput
            name="Wishlist Author"
            value={wishlist.author}
            width="w-50"
            callback={(e: any) =>
              setWishlist({ ...wishlist, author: e.target.value })
            }
          />
        </Group>
      </form>
      <ItemForm
        items={items}
        setItems={setItems}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </Container>
  );
};

export default WishlistForm;
