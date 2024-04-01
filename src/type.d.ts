export interface TopReader {
  id: number
  name: string
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
