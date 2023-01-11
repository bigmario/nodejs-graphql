const { addProduct, allProducts, product, updateProduct, deleteProduct } = require('./product.resolver');
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
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers
