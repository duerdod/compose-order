/* eslint-disable */
const { ApolloServer } = require('apollo-server-express');
const { prisma } = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const typeDefs = require('./schema');

const corsOptions = {
  origin: '*',
  credentials: true
};

const Types = {
  Cart: {
    // CartItem on Cart
    async cartItem({ id }, args, context) {
      const cartItemsOnCart = await context.prisma.cart({ id }).cartItem();
      return cartItemsOnCart;
    }
  },
  CartItem: {
    // Product on CartItem
    async product(parent, args, context) {
      const productOnCartItem = await context.prisma
        .cartItem({ id: parent.id })
        .product();
      return productOnCartItem;
    }
  }
};

function graphServer() {
  return new ApolloServer({
    cors: corsOptions,
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      ...Types
    },
    context: { prisma }
  });
}

module.exports = graphServer;
