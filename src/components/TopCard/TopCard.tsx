import './styles.css'

export const TopCard = ({ user }) => {
  return (<li key={user.id}>
    <img src={user.avatar} alt="user avatar" />
    <div>
      <h2>{user.name}</h2>
      <p><strong>Leidos:</strong>{user.readBooks}</p>
      <p><strong>Último libro leido:</strong> {user.lastReadBook}</p>
    </div>
  </li>)
}