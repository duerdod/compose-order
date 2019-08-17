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

function graphServer() {
  return new ApolloServer({
    cors: corsOptions,
    typeDefs,
    resolvers: {
      Query,
      Mutation
    },
    context: { prisma }
  });
}

module.exports = graphServer;
