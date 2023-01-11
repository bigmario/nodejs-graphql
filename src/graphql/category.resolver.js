const checkRolesGql = require('../utils/checkRolesGql')
const checkJWTGql = require('../utils/checkJwtGql')


const CategoryService = require('../services/category.service')

const categoryService = new CategoryService()

const addCategory = async (_, { dto }, context) => {
  const user = await checkJWTGql(context)
  checkRolesGql(user, 'admin')
  return categoryService.create(dto)
}

const allCategories = async () => {
  const categories = await categoryService.find({})
  return categories
}

module.exports = {
  addCategory,
  allCategories
}
