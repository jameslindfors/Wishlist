import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import type { Item, Wishlist } from "../types/types";
import "./App.css";

// Components
import WishlistView from "./components/list/wishlist";
import WishlistForm from "./components/form/wishListForm";
import ItemList from "./components/list/itemList";
import Overlay from "./components/routes/layout";
import NotFound from "./components/routes/notfound";

// Utils
import { wishlistInitialState } from "./utils/initialStates";
import { removeOldWishlistsFromLocalStorage } from "./utils/localStorageHandler";

interface AppProps {}

function App({}: AppProps) {
  const [wishlist, setWishlist] = useState<Wishlist>(wishlistInitialState);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setWishlist(wishlistInitialState);
    removeOldWishlistsFromLocalStorage();
  }, []);

  return (
    <div className="App dark:bg-slate-900 h-screen">
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive
            element={
              <Overlay>
                <WishlistForm
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  items={items}
                  setItems={setItems}
                />
                <ItemList items={items} />
              </Overlay>
            }
          />
          <Route
            path="/:wishlist/:id"
            element={
              <WishlistView wishlist={wishlist} setWishlist={setWishlist} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
