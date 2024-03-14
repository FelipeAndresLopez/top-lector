import { type TopReader } from '../type'

const API = 'https://65f217a6034bdbecc76459d6.mockapi.io/api/v1/users'

export const getTopReaders: () => Promise<TopReader[]> = async () => {
  try {
    const response = await fetch(API)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error getting top readers')
  }
}
