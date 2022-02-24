import { buildSchema } from "graphql";

export default buildSchema(`
  type Wishlist {
    _id: ID
    url: String
    name: String!
    description: String
    author: String
    createdAt: String
    items: [Item]
  }

  type Item {
    _id: ID!
    name: String
    image: String
    price: Float
    link: String
  }

  type Preference {
    _id: ID!
    backgroundColor: String
    fontColor: String
    fontFamily: String
    fontSize: Int
    fontWeight: Int
  }
  
  input WishlistInput {
    name: String!
    description: String
    author: String
    items: [ItemInput]
  }

  input ItemInput {
    _id: String
    name: String
    image: String
    price: Float
    link: String
  }

  input PreferenceInput {
    _id: String
    backgroundColor: String
    fontColor: String
    fontFamily: String
    fontSize: Int
    fontWeight: Int
  }

type Query {
  AllWishlists: [Wishlist!]
  Wishlist(_id: String!): Wishlist
}

type NewWishlist {
  createWishlist(wishlist:WishlistInput): Wishlist
  autoGenerateWishlist(url:String!): Wishlist
}

  schema {
    query: Query
    mutation: NewWishlist
  }`);
