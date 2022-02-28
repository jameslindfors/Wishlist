import { GraphQLClient, gql } from "graphql-request";
import type { Wishlist } from "types/types";
import {
  saveWishlistToLocalStorage,
  loadWishlistFromLocalStorage,
} from "./localStorageHandler";
const endpoint = "http://localhost:4000/graphql";

const createWishlist = gql`
  mutation createWishlist(
    $name: String!
    $description: String
    $author: String
    $items: [ItemInput]
  ) {
    createWishlist(
      wishlist: {
        name: $name
        description: $description
        author: $author
        items: $items
      }
    ) {
      _id
      name
      description
      author
      url
      items {
        _id
        name
        image
        price
        link
      }
      createdAt
    }
  }
`;

const getWishlistById = gql`
  query Wishlist($_id: String!) {
    Wishlist(_id: $_id) {
      _id
      name
      description
      author
      items {
        _id
        name
        image
        price
        link
      }
    }
  }
`;

async function saveWishlist(wishlist: Wishlist) {
  // Save to database
  const client = new GraphQLClient(endpoint, {
    credentials: "omit",
    mode: "cors",
  });
  try {
    const res = await client.request(createWishlist, wishlist);
    const data = res.createWishlist;
    // Cache in local storage
    saveWishlistToLocalStorage(data._id, data);
    return {
      id: data._id,
      name: wishlist.name,
      url: data.url,
    };
  } catch (err) {
    throw new Error("Internal Server Error: " + err);
  }
}

async function loadWishlist(
  id: string,
  setWishlist: (wishlist: Wishlist) => void
) {
  const client = new GraphQLClient(endpoint, {
    credentials: "omit",
    mode: "cors",
  });
  // Attempt to load from localstorage
  const localStorageWishlist = await loadWishlistFromLocalStorage(id);

  // If not in localstorage, load from database
  if (localStorageWishlist == null) {
    const { Wishlist: databaseWishlist } = await client.request(
      getWishlistById,
      {
        _id: id,
      }
    );
    databaseWishlist && setWishlist(databaseWishlist);
    // Cache in localstorage
    saveWishlistToLocalStorage(id, databaseWishlist);
    return databaseWishlist;
  } else {
    localStorageWishlist && setWishlist(localStorageWishlist);
    return localStorageWishlist;
  }
}

export { createWishlist, getWishlistById, saveWishlist, loadWishlist };
