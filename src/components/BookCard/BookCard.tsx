import { type Book } from '../../type'
import './styles.css'

interface Props {
  book: Book
  className?: string
}

export const BookCard: React.FC<Props> = ({
  book: { id, title, cover, author, rate, comment },
  className = ''
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
    </li>
  )
}
