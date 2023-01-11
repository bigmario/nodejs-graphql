const checkRolesGql = require('../utils/checkRolesGql')
const checkJWTGql = require('../utils/checkJwtGql')


const CategoryService = require('../services/category.service')

const categoryService = new CategoryService()

const addCategory = async (_, { dto }, context) => {
  const user = await checkJWTGql(context)
  checkRolesGql(user, 'admin')
  return categoryService.create({
    ...dto,
    image: dto.image.href
  })
}

const allCategories = async () => {
  const categories = await categoryService.find({})
  return categories
}

const category = async (_, { id }) => {
  const category = await categoryService.findOne(id)
  return category
}

module.exports = {
  addCategory,
  category,
  allCategories
}
