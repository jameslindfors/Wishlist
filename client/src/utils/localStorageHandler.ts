import type { Wishlist } from "types/types";

const saveWishlistToLocalStorage = (id: string, wishlist: Wishlist) => {
  localStorage.setItem(id, JSON.stringify(wishlist));
};

const loadWishlistFromLocalStorage = async (
  id: string
): Promise<Wishlist | null> => {
  const wishlist = localStorage.getItem(id);
  if (wishlist) {
    const { name, description, author, items } = JSON.parse(wishlist);
    return {
      name,
      description,
      author,
      items,
    };
  }
  return null;
};

const removeOldWishlistsFromLocalStorage = () => {
  const localStorageWishlistKeys = Object.keys(localStorage);
  localStorageWishlistKeys.map((key) => {
    const wishlist = localStorage.getItem(key);
    const createdAt = wishlist != null ? JSON.parse(wishlist).createdAt : null;
    const now = new Date();
    const difference = now.getTime() - createdAt;
    const diffDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (diffDays > 7) {
      localStorage.removeItem(key);
    }
  });
};

export {
  saveWishlistToLocalStorage,
  loadWishlistFromLocalStorage,
  removeOldWishlistsFromLocalStorage,
};
