import { Link } from 'react-router-dom'
import { type User } from '../../type'
import './styles.css'

interface Props {
  reader: User
  className?: string
}

export const TopCard: React.FC<Props> = ({
  reader: { id, name, photo, books },
  className = ''
}) => {
  const latestReadBook = books[books.length - 1]
  return (
    <Link to={`/${id}`}>
      <li className={`top-card ${className}`} key={id}>
        {
          photo !== ''
            ? <img src={photo} alt="user photo" />
            : <span className='avatar-placeholder' >{name[0]}</span>
        }
        <div>
          <h2>{name}</h2>
          <p>Leidos: <strong>{books.length}</strong></p>
          {latestReadBook !== undefined && <p>Último libro leído: <strong>{latestReadBook.title}</strong></p>}
        </div>
      </li>
    </Link>
  )
}
