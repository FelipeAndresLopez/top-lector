export interface User {
  id?: number
  name: string
  email: string
  password: string
  photo: string
  books: Book[]
}

export interface Book {
  id: number
  title: string
  cover: string
  author: string
  rating: number
  userComment: string
}
