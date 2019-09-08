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
  }

  type Cart {
    id: ID!
    createdAt: DateTime!
  }

  type CartItem {
    id: ID!
    cart: Cart!
    quantity: Int!
    product: [Product!]!
  }

  input CartItemInput {
    id: String!
    price: Int!
    quantity: Int
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
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
    addToCart(input: [CartItemInput!]!): Cart
  }
`;

module.exports = typeDefs;
