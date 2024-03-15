import { useEffect, useState } from 'react'
import { getTopReaders } from '../services/users'
import { type TopReader } from '../type'
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

export const useBooksByUser = ({ userId }: { userId: string }) => {
  const [booksByUser, setBooksByUser] = useState([])

  useEffect(() => {
    getBooksByUser({ userId })
      .then((data) => {
        setBooksByUser(data)
      })
      .catch(error => {
        throw new Error(`Error getting books ${error}`)
      })
  }, [])

  return { booksByUser }
}
