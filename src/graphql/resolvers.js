const {
  addProduct,
  allProducts,
  product,
  updateProduct,
  deleteProduct,
  productsByCategory
} = require('./product.resolver');
const { allUsers, user } = require('./user.resolver');
const { login } = require('./auth.resolver')
const { addCategory, allCategories, category } = require('./category.resolver')
const { RegularExpression } = require('graphql-scalars')

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9 ]{3,100}$/ )

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo',
    allUsers,
    user,
    allProducts,
    product,
    allCategories,
    category
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  },
  CategoryNameType,
  Category: {
    products: productsByCategory
  }
}

module.exports = resolvers
