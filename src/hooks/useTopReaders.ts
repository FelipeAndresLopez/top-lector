import { useEffect, useState } from 'react'
import { userService } from '../services/users'
import { type User } from '../type'

export const useGetTopReaders = (): { topReaders: User[] } => {
  const [topReaders, setTopReaders] = useState<User[]>([])

  useEffect(() => {
    userService.getUsers()
      .then((data: User[]) => {
        setTopReaders(data)
      })
      .catch(error => {
        throw new Error(`Error getting top readers ${error}`)
      })
  }, [])

  return { topReaders }
}

export const useGetUserInfo = ({ userId }: { userId: string }): { userInfo: User } => {
  const [userInfo, setUserInfo] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    photo: '',
    books: []
  })

  useEffect(() => {
    userService.getUserById({ userId })
      .then((data: User) => {
        setUserInfo(data)
      })
      .catch(error => {
        throw new Error(`Error getting user info ${error}`)
      })
  }, [])

  return { userInfo }
}
