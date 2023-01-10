const ProductService = require('../services/product.service');

const productService = new ProductService()

const allProducts = async () => {
  const products = await productService.findAll()
  return products
}

const product = async (_, args) => {
  const product = await productService.findOne(args.id)
  return product
}

module.exports = {
  allProducts,
  product
}
