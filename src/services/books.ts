import { BASE_URL } from '../const'
import { type Book } from '../type'

const BOOKS_ENDPOINT = 'books'

let token = null

export const setSessionToken = (newToken: string) => {
  token = newToken
}

export const getBooksByUser: ({ userId }: { userId: string }) => Promise<Book[]> = async ({ userId }: { userId: string }) => {
  console.log(userId)
  try {
    const response = await window.fetch(`${BASE_URL}/${BOOKS_ENDPOINT}`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error('Error getting top readers')
  }
}
