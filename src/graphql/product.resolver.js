const ProductService = require('../services/product.service');

const productService = new ProductService()

const allProducts = async () => {
  const products = await productService.find({})
  return products
}

const product = async (_, args) => {
  const product = await productService.findOne(args.id)
  return product
}

const addProduct = async (_, { dto }) => {
  const newProduct = await productService.create(dto)
  return newProduct
}

module.exports = {
  allProducts,
  product,
  addProduct
}
