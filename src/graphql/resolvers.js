const { addProduct, allProducts, product } = require('./product.resolver');
const { allUsers, user } = require('./user.resolver');

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    allUsers,
    user,
    allProducts,
    product
  },
  Mutation: {
    addProduct
  }
}

module.exports = resolvers
