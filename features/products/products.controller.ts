import type { NextApiRequest, NextApiResponse } from 'next'
import * as productService from '../../features/products/products.service'

type Data = {}

export const listProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const products = await productService.getAllProducts()

  if (products.error) return res.status(500).json(products.error)

  res.status(200).json(products)
}

export const createProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { title, imageUrl, price } = req.body

  if (!(title && imageUrl && price)) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, imageUrl, price or stock',
    })
  }

  const createdProduct = await productService.create({
    title,
    imageUrl,
    price,
  })

  if (!createdProduct?.success) {
    return res.status(500).json({
      success: false,
      error: createdProduct.error,
    })
  }

  return res.status(201).json({
    success: true,
    data: createdProduct.data,
  })
}

export const getProductByTitle = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { title } = req.query
  if (!title) {
    return res.status(400).json({
      success: false,
      error: 'Missing product title',
    })
  }

  const product = await productService.findProductByTitle({ title })

  if (!product?.success) {
    switch (product?.type) {
      case 'product.NotExist':
        return res.status(404).json({
          success: false,
          error: product.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: product.error,
        })
    }
  }

  return res.status(200).json(product)
}
