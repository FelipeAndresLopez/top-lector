import { useEffect, useState } from 'react'
import { getTopReaders } from '../services/users'
import { type TopReader, type Book } from '../type'
import { getBooksByUser } from '../services/books'

export const useTopReaders = (): { topReaders: TopReader[] } => {
  const [topReaders, setTopReaders] = useState<TopReader[]>([])

  useEffect(() => {
    getTopReaders()
      .then((data: TopReader[]) => {
        setTopReaders(data)
      })
      .catch(error => {
        throw new Error(`Error getting top readers ${error}`)
      })
  }, [])

  return { topReaders }
}

export const useBooksByUser = ({ userId }: { userId: string }): { booksByUser: Book[] } => {
  const [booksByUser, setBooksByUser] = useState<Book[]>([])

  useEffect(() => {
    getBooksByUser({ userId })
      .then((data: Book[]) => {
        setBooksByUser(data)
      })
      .catch(error => {
        throw new Error(`Error getting books ${error}`)
      })
  }, [])

  return { booksByUser }
}
