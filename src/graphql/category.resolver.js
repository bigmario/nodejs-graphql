const CategoryService = require('../services/category.service')

const categoryService = new CategoryService()

const addCategory = (_, { dto }) => {
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
