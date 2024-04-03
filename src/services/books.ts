import { BASE_URL } from '../const'
import { type Book } from '../type'

const BOOKS_ENDPOINT = 'books'

let token: string | null = null

const setSessionToken: (newToken: string) => void = (newToken: string) => {
  token = newToken
}

type RegisterBook = (book: Book) => Promise<Book>

export const registerBook: RegisterBook = async ({ title, author, rating, userComment }) => {
  token = JSON.parse(window.localStorage.getItem('loggedUserTopLectorApp') ?? '')?.token
  try {
    const response = await window.fetch(`${BASE_URL}/${BOOKS_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        author,
        rating,
        userComment
      })
    })

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error registering book')
  }
}

export const bookService = { registerBook, setSessionToken }
