const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: ID!
    productName: String!
    brand: String!
    productType: Int!
    description: String!
    price: Int!
  }

  type Order {
    id: ID!
    totalPrice: Int!
    currency: String!
    qty: Int!
    Products: [Product]
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    addProduct(
      productName: String!
      brand: String!
      productType: Int!
      description: String!
      price: Int!
      images: String
    ): Product
  }
`;

module.exports = typeDefs;
