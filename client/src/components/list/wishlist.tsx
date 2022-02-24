import React, { useEffect, useState } from "react";
import type { WishlistRenderProps } from "../../../types/types";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { loadWishlist } from "../../utils/gql";
import { wishlistInitialState } from "../../utils/initialStates";

import WishlistHeader from "./wishlistHeader";
import WishlistContent from "./wishlistContent";
import NotFound from "../routes/notfound";

const WishlistView = ({ wishlist, setWishlist }: WishlistRenderProps) => {
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  useEffect(() => {
    if (id) {
      loadWishlist(id, setWishlist)
        .then(() => {
          setLoaded(true);
        })
        .catch(() => {
          navigate("/notfound");
        });
    }
  }, []);

  return (
    <>
      {loaded && (
        <div className="flex-col pt-5 mx-56 h-screen">
          <WishlistHeader wishlist={wishlist} />
          <div className="flex  justify-center my-2" id="items">
            <WishlistContent wishlist={wishlist} />
          </div>
          <footer className="flex justify-center items-center my-10">
            <Link
              to="/"
              onClick={() => {
                setWishlist(wishlistInitialState);
              }}
              className="font-mono font-medium text-l underline text-grey-800 dark:text-slate-100"
            >
              Create your own!
            </Link>
          </footer>
        </div>
      )}
    </>
  );
};

export default WishlistView;
