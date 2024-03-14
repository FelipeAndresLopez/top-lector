import { useEffect, useState } from 'react'
import { getTopReaders } from '../services/topReaders'
import { type TopReader } from '../type'

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
