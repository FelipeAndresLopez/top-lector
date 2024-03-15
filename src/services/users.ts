import { API } from '../const'
import { type TopReader } from '../type'

const USERS_ENDPOINT = 'users'

export const getTopReaders: () => Promise<TopReader[]> = async () => {
  try {
    const response = await fetch(`${API}${USERS_ENDPOINT}`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error getting top readers')
  }
}
