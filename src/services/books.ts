import { API } from '../const/const'

const BOOKS_ENDPOINT = 'books'

export const getBooksByUser = async ({ userId }) => {
  console.log(userId)
  try {
    const response = await fetch(`${API}${BOOKS_ENDPOINT}`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error getting top readers')
  }
}
