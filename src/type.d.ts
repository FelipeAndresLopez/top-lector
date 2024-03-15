export interface TopReader {
  id: number
  name: string
  avatar: string
  readBooks: number
  lastReadBook: string
}

export interface Book {
  id: number
  title: string
  cover: string
  author: string
  rate: number
  comment: string
}
