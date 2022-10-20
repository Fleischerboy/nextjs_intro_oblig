import * as usersRepo from './users.repository'

const type = {}

export const create = async ({ email, password }) => {
  const user = await usersRepo.exist({ email })

  if (user?.error) return { success: false, error: user.error }

  if (user.data) return { success: false, error: 'User already exist' }

  const createdUser = await usersRepo.create({ email, password })

  if (!createdUser.success) return { success: false, error: createdUser.error }

  return { success: true, data: createdUser.data }
}
