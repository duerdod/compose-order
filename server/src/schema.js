const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: ID!
    productName: String!
    brand: String!
    productType: Int!
    description: String!
    image: String
    price: Int!
    order: Order
  }

  type Order {
    id: ID!
    totalPrice: Int!
    currency: String!
    Product: [Product]!
  }

  type CartItem {
    id: ID!
    quantity: Int!
    product: Product
  }

  input OrderInput {
    id: String!
    price: Int!
    count: Int!
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
    createOrder(input: [OrderInput]): Order
    addToCart(id: ID!): CartItem
  }
`;

module.exports = typeDefs;
