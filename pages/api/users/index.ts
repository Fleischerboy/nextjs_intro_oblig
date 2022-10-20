// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as userController from '../../../features/users/users.controller'
type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req
  switch (method?.toLowerCase()) {
    case 'post':
      await userController.createUser(req, res)
      break
    case 'get':
      await userController.listAllUsers(req, res)
      break
    default:
      // gir 405 Method Not Allowed hvis brukeren prøver på noe annet
      // enn GET eller POST
      res.status(405).end()
  }
}
