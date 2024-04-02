import { BASE_URL } from '../const'
import { type User } from '../type'

const USERS_ENDPOINT = 'users'

const getUsers: () => Promise<User[]> = async () => {
  try {
    const response = await fetch(`${BASE_URL}${USERS_ENDPOINT}`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error getting top readers')
  }
}

interface UserError {
  error: string
}

const createUser: ({ name, email, password, photo }: User) => Promise<User | UserError> = async ({
  name,
  email,
  password,
  photo
}) => {
  try {
    const response = await fetch(`${BASE_URL}${USERS_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        photo
      })
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error creating user')
  }
}

const getUserById = async ({ userId }: { userId: string }): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}${USERS_ENDPOINT}/${userId}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error getting user')
  }
}

export const userService = { getUsers, createUser, getUserById }
