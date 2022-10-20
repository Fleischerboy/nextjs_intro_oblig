import { ProductData } from './../../types/index'
import db from '../../lib/db'

export const findMany = async () => {
  try {
    const products = await db.product.findMany()
    return { success: true, data: products }
  } catch (error) {
    return { success: false, error: 'Failed finding products' }
  }
}

export const create = async (data) => {
  try {
    const product = await db.product.create({ data })
    return { success: true, data: product }
  } catch (error) {
    return { success: false, error: 'Failed creating product' }
  }
}

export const findUnique = async (identifier: any) => {
  try {
    const product = await db.product.findUnique({
      where: {
        ...identifier,
      },
    })
    return { success: true, data: product }
  } catch (error) {
    return { success: false, error: 'Failed finding product' }
  }
}
