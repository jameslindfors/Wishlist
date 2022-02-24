import mongoose from "mongoose";
const schema = mongoose.Schema;

const wishlistSchema = new schema({
  _id: {
    type: String,
  },
  url: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 1000,
  },
  author: {
    type: String,
    minlength: 1,
    maxlength: 50,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
  items: [
    {
      _id: {
        type: String,
      },
      name: {
        type: String,
      },
      image: {
        type: String,
      },
      price: {
        type: Number,
        min: 0,
      },
      link: {
        type: String,
      },
    },
  ],
});

const mongoosemodel = mongoose.model("Wishlist", wishlistSchema);

export default mongoosemodel;
