import { timeLog } from 'console'
import { ProductData } from './../../types/index'
import * as productRepo from './products.repository'

export const getAllProducts = async () => {
  const products = await productRepo.findMany()

  if (!products.success) return { success: false, error: products.error }

  return { success: true, data: products.data }
}

export const create = async (data: ProductData) => {
  const { title, imageUrl, price } = data

  const createdProduct = await productRepo.create({
    title: title.toLowerCase(),
    imageUrl: imageUrl,
    price: price,
  })

  if (!createdProduct.success) {
    return { success: false, error: createdProduct.error }
  }

  return { success: true, data: createdProduct.data }
}

export const findProductByTitle = async (data) => {
  const { title } = data
  const productFound = await productRepo.findUnique({
    title: title.toLowerCase(),
  })
  if (!productFound.data) {
    return {
      success: false,
      type: 'product.NotExist',
      error: `product with ${title} does not exist`,
    }
  }
  return { success: true, data: productFound.data }
}
