import './styles.css'

const menuItems = [
  {
    name: 'Iniciar Sesión',
    path: '/login'
  },
  {
    name: 'Registrarse',
    path: '/register'
  }
]

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {menuItems.map(item => <li key={item.path}><a href={item.path}>{item.name}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}
