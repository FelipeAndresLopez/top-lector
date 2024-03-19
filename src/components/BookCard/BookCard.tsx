import { type Book } from '../../type'
import './styles.css'

interface Props {
  book: Book
  className?: string
  children?: React.ReactNode
}

export const BookCard: React.FC<Props> = ({
  book: { id, title, cover, author, rate, comment },
  className = '',
  children
}) => {
  return (
    <li className={`book-card ${className}`} key={id}>
      <img src={cover} alt="user avatar" />
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <small>{'★'.repeat(rate)}</small>
        <p>{comment}</p>
      </div>
      {children}
    </li>
  )
}
