const { addProduct, allProducts, product, updateProduct, deleteProduct } = require('./product.resolver');
const { allUsers, user } = require('./user.resolver');
const { login } = require('./auth.resolver')

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    allUsers,
    user,
    allProducts,
    product
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers
