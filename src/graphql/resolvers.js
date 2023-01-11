const { addProduct, allProducts, product, updateProduct, deleteProduct } = require('./product.resolver');
const { allUsers, user } = require('./user.resolver');
const { login } = require('./auth.resolver')
const { addCategory, allCategories } = require('./category.resolver')

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    allUsers,
    user,
    allProducts,
    product,
    allCategories
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  }
}

module.exports = resolvers
