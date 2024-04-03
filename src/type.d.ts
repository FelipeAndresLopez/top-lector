export interface User {
  id?: number
  name: string
  email: string
  password: string
  photo: string
  books: Book[]
  error?: string
}

export interface UserCredentials {
  email: User.Email
  password: User.Password
}

export type UserId = User.id

export interface UserSession {
  token: string
  name: User.name
  email: User.email
  id: User.id
  error?: string
}

export interface Book {
  id?: number
  title: string
  author: string
  rating: number
  userComment: string
  error?: string
}

export interface Notification {
  message: string
  type: string
}
