import type { NextApiRequest, NextApiResponse } from 'next'
import * as usersService from './users.service'

type Data = {}

export async function listAllUsers(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('hello')
  res.send('liste ut brukere')
}

export const createUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { email, password } = req.body

  if (!(email && password)) {
    return res
      .status(400)
      .json({ success: false, error: 'Missing required field: email' })
  }

  const createdUser = await usersService.create({
    email,
    password,
  })

  if (!createdUser?.success) {
    return res.status(500).json({
      success: false,
      error: createdUser.error,
    })
  }

  return res.status(201).json({
    success: true,
    data: createdUser.data,
  })
}
