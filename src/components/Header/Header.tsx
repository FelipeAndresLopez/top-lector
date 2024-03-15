import { NavLink } from 'react-router-dom'
import './styles.css'

const menuItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Iniciar Sesión',
    path: '/login'
  },
  {
    name: 'Registrarse',
    path: '/register'
  }
]

export const Header: React.FC = () => {
  return (
    <header>
      <div />
      <nav>
        <ul>
          {menuItems.map(item =>
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.name}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
