const ProductService = require('../services/product.service');

const productService = new ProductService()

const allProducts = async () => {
  const products = await productService.find({})
  return products
}

const product = (_, args) => {
  return productService.findOne(args.id)
}

const addProduct = (_, { dto }) => {
  return productService.create(dto)
}

const updateProduct = (_, { id, dto }) => {
  return productService.update(id, dto)
}

const deleteProduct = async (_, { id }) => {
  await productService.delete(id)
  return id
}

const productsByCategory = async (parent) => {
  const id = parent.id;
  const products = await productService.findByCategoryId(id)
  return products
}

module.exports = {
  allProducts,
  product,
  addProduct,
  updateProduct,
  deleteProduct,
  productsByCategory
}
