const boom = require('@hapi/boom')

const CategoryService = require('../services/category.service')

const categoryService = new CategoryService()

const addCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate('jwt', {session: false})

  if (!user) {
    throw boom.unauthorized('invalid credentials')
  }
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
