import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container/Container'

import './styles.css'
import { MENU_PATHS } from '../../const'
import { useState, type FormEvent } from 'react'
import { loginService } from '../../services/login'
import { setSessionToken } from '../../services/books'
import { userService } from '../../services/users'

export const Login: React.FC = () => {
  const [notification, setNotification] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const userCredentials = Object.fromEntries(formData)
    const credentials = {
      email: userCredentials.email as string,
      password: userCredentials.password as string
    }

    try {
      const response = await loginService.login(credentials)
      if (response.error) {
        setNotification({
          message: response.error,
          type: 'error'
        })
      } else {
        setSessionToken(response.token)
        window.localStorage.setItem('loggedUserTopLectorApp', JSON.stringify(response))
        navigate(MENU_PATHS.MY_PROFILE)
      }
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    } catch (error) {
      console.log(error)
    }
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
          {notification !== null && <small className={notification.type}>{notification.message}</small>}
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
