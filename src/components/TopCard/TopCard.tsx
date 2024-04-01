import { Link } from 'react-router-dom'
import { type TopReader } from '../../type'
import './styles.css'

interface Props {
  reader: TopReader
  className?: string
}

export const TopCard: React.FC<Props> = ({
  reader: { id, name, photo, books },
  className = ''
}) => {
  const latestReadBook = books.length > 0 ? books[books.length - 1] : ''
  return (
    <Link to={`/${id}`}>
      <li className={`top-card ${className}`} key={id}>
        <img src={photo} alt="user photo" />
        <div>
          <h2>{name}</h2>
          <p>Leidos: <strong>{books.length}</strong></p>
          <p>Último libro leído: <strong>{latestReadBook as string}</strong></p>
        </div>
      </li>
    </Link>
  )
}
