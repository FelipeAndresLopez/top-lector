import { type Book } from '../../type'
import './styles.css'

interface Props {
  book: Book
  className?: string
  children?: React.ReactNode
}

export const BookCard: React.FC<Props> = ({
  book: { id, title, cover, author, rating, userComment },
  className = '',
  children
}) => {
  return (
    <li className={`book-card ${className}`} key={id}>
      <img src="https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png" alt="user avatar" />

      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <small>{'★'.repeat(rating)}</small>
        <p>{userComment}</p>
      </div>
      {children}
    </li>
  )
}
