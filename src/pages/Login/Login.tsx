import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container/Container'

import './styles.css'
import { MENU_PATHS } from '../../const'
import { type FormEvent } from 'react'

export const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleLogin = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const userCredentials = Object.fromEntries(formData)
    // TODO: call endpoint for login
    console.log(userCredentials)
    localStorage.setItem('user', JSON.stringify(userCredentials))
    navigate(MENU_PATHS.MY_PROFILE)
  }

  return (
    <Container>
      <h1>Inicio de Sesión</h1>

      <div className='login'>
        <form onSubmit={handleLogin}>
          <label>
            <p>Correo</p>
            <input type="email" required autoComplete='email' name="email" />
          </label>
          <label>
            <p>Contraseña</p>
            <input type="password" required autoComplete='current-password' name="password" />
          </label>
          <button className='button btn-primary' type="submit">Iniciar Sesión</button>
          <label>
            <p>¿No tienes cuenta?</p>
            <Link to={MENU_PATHS.REGISTER_USER}>Regístrate</Link>
          </label>
        </form>

      </div>
    </Container>
  )
}
