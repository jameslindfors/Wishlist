import Wishlist from "../../models/model.js";
import logger from "../../../utils/logger.js";
import { nanoid } from "nanoid";

export default {
  AllWishlists: async () => {
    // ! Rarely used (consider deleting)
    const wishlists = await Wishlist.find();
    return wishlists;
  },

  Wishlist: async (_id) => {
      const wishlist = await Wishlist.findById(_id);
      if (!wishlist) {
        throw new Error("Wishlist not found");
      }
      return wishlist;
    
  },

  createWishlist: async ({ wishlist }) => {
    const id = nanoid();
    let itemCount = 0;
    let validatedName, validatedDescription, validatedAuthor;

    if (
      typeof wishlist.name !== "string" ||
      wishlist.name?.length === 0 ||
      wishlist.name?.length > 50 ||
      wishlist.name?.length < 3
    ) {
      validatedName = "Untitled Wishlist";
    } else {
      validatedName = wishlist.name.trim();
    }

    if (
      typeof wishlist.description !== "string" ||
      wishlist.description?.length === 0 ||
      wishlist.description?.length > 200 ||
      wishlist.description?.length < 3
    ) {
      validatedDescription = "My cool wishlist!";
    } else {
      validatedDescription = wishlist.description.trim();
    }

    if (
      typeof wishlist.author !== "string" ||
      wishlist.author?.length === 0 ||
      wishlist.author?.length > 50 ||
      wishlist.author?.length < 1
    ) {
      validatedAuthor = "Anonymous";
    } else {
      validatedAuthor = wishlist.author.trim();
    }

    if (wishlist.items?.length > 0) {
      //
    } else {
      wishlist.items = [];
      validatedDescription = "This wishlist is empty!";
    }

    let url =
      "http://localhost:8080/" +
      "#/" +
      validatedName.toLowerCase().replace(/\s/g, "") +
      "/" +
      id;

    const wl = new Wishlist({
      _id: id,
      url: url,
      name: validatedName,
      description: validatedDescription,
      author: validatedAuthor,
      items: wishlist.items.map((item) => {
        if (item.name.length === 0 || item.image.length === 0 || item.price.length === 0 || item.link.length === 0) {
          return null;
        }
        return {
          _id: itemCount++,
          name: item.name,
          image: item.image,
          price: item.price,
          link: item.link,
        };
      }),
    });

    try {
      const newWishlist = await wl.save();
      return { ...newWishlist._doc };
    } catch (e) {
      logger.error(e.toString());
      return "We're having trouble saving your wishlist. Please try again later.";
    }
  },

  autoGenerateWishlist: async (args) => {
    // const { url } = args;
    // run the url through the scraper
    // return the scraped data
    // return the fields that are needed
    // run python script to scrape the url
    // return the data and the needed fields
  },
};
