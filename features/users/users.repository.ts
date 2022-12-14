import db from '../../lib/db'

export const findMany = async () => {
  try {
    const users = await db.user.findMany()
    return { success: true, data: users }
  } catch (e) {
    return { success: false, error: 'Failed finding users' }
  }
}

export const create = async (data) => {
  try {
    const user = await db.user.create({ data })
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed creating user' }
  }
}

export const exist = async ({ email }) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed finding user' }
  }
}
