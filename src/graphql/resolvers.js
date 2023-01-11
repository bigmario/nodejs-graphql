const { addProduct, allProducts, product, updateProduct, deleteProduct } = require('./product.resolver');
const { allUsers, user } = require('./user.resolver');
const { login } = require('./auth.resolver')
const { addCategory, allCategories } = require('./category.resolver')
const { RegularExpression } = require('graphql-scalars')

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/ )

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
  },
  CategoryNameType
}

module.exports = resolvers
