const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const UserService = require('../services/user.service');

const service = new UserService();

const typeDefs = `
  type Query {
    hello: String,
    allUsers: [String],
    user(id: Int!): String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    allUsers: async () => {
      const result = []
      const users = await service.find()
      for (const item of users) {
        result.push(item.email)
      }
      return result
    },
    user: async (_, args) => {
      const user = await service.findOne(args.id)
      return JSON.stringify(user)
    }
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ],
  });
  await server.start();
  server.applyMiddleware({app});

};

module.exports = useGraphql


