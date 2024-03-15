import { Link } from 'react-router-dom'
import { type TopReader } from '../../type'
import './styles.css'

interface Props {
  reader: TopReader
  className?: string
}

export const TopCard: React.FC<Props> = ({
  reader: { id, name, avatar, readBooks, lastReadBook },
  className = ''
}) => {
  return (
    <Link to={`/${id}`}>
      <li className={`top-card ${className}`} key={id}>
        <img src={avatar} alt="user avatar" />
        <div>
          <h2>{name}</h2>
          <p>Leidos: <strong>{readBooks}</strong></p>
          <p>Último libro leído: <strong>{lastReadBook}</strong></p>
        </div>
      </li>
    </Link>
  )
}
