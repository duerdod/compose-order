const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime

  type Product {
    id: ID!
    productName: String!
    brand: String!
    productType: Int!
    description: String!
    image: String
    price: Int!
    cartItem: CartItem
  }

  type Cart {
    id: ID!
    cartItem: [CartItem!]!
    createdAt: DateTime!
  }

  type CartItem {
    id: ID!
    cart: Cart!
    quantity: Int!
    product: Product!
  }

  input CartItemInput {
    id: String!
    price: Int!
    quantity: Int
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
    cart(id: ID!): Cart
    cartItems(id: ID!): [CartItem]!
  }

  type Mutation {
    addProduct(
      productName: String!
      brand: String!
      productType: Int
      description: String!
      price: Int!
      image: String
    ): Product
    addToCart(input: [CartItemInput!]!): Cart!
    removeFromCart(id: ID!, cartId: ID): Cart
    incrementCartItem(id: ID!, cartId: ID): CartItem!
    decrementCartItem(id: ID!, cartId: ID): CartItem
  }
`;

module.exports = typeDefs;
