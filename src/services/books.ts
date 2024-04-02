import { BASE_URL } from '../const'
import { type Book } from '../type'

const BOOKS_ENDPOINT = 'books'

export const getBooksByUser: ({ userId }: { userId: string }) => Promise<Book[]> = async ({ userId }: { userId: string }) => {
  console.log(userId)
  try {
    const response = await fetch(`${BASE_URL}${BOOKS_ENDPOINT}`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error getting top readers')
  }
}
