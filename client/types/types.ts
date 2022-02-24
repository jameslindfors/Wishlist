export interface Wishlist {
  name: string;
  description: string;
  author: string;
  items: Item[];
}

export interface Item {
  name: string;
  image: string;
  price: number;
  link: string;
}

export interface FormTextInput {
  name: string;
  value?: string | number;
  width?: string;
  placeholder?: string;
  type?: string;
  callback: (value: any) => void;
}

export interface FormProps {
  wishlist: Wishlist;
  setWishlist: (wishlist: Wishlist) => void;
  items: Item[];
  setItems: (items: Item[]) => void;
}

export interface ItemListProps {
  items: Item[];
}

export interface WishlistRenderProps {
  wishlist: Wishlist;
  setWishlist: (wishlist: Wishlist) => void;
}
