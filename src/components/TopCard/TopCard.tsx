import { type TopReader } from '../../type'
import './styles.css'

interface Props {
  reader: TopReader
  className?: string
}

export const TopCard: React.FC<Props> = ({
  reader: { id, name, avatar, readBooks, lastReadBook },
  className
}) => {
  return (
    <li className={`home__top-card ${className}`} key={id}>
      <img src={avatar} alt="user avatar" />
      <div>
        <h2>{name}</h2>
        <p><strong>Leidos:</strong>{readBooks}</p>
        <p><strong>Último libro leído:</strong> {lastReadBook}</p>
      </div>
    </li>
  )
}
