// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as productController from '../../../features/products/products.controller'

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await productController.listProducts(req, res)
      break
    case 'post':
      await productController.createProduct(req, res)
      break
    default:
      res.status(405).end()
  }
}
