import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container/Container'

import './styles.css'
import { MENU_PATHS } from '../../const'
import { useEffect, useState } from 'react'

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  // TODO: check if user is already logged in and redirect
  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      navigate(MENU_PATHS.MY_PROFILE)
      setIsLoading(false)
    }
  }, [isLoading])

  const login = (event) => {
    setIsLoading(true)
    event.preventDefault()
    const formData = new FormData(event.target)
    const userCredentials = Object.fromEntries(formData)
    // TODO: call endpoint for login
    console.log(userCredentials)
    localStorage.setItem('user', JSON.stringify(userCredentials))

    event.target.reset()
  }

  return (
    <Container>
      <h1>Inicio de Sesión</h1>

      <div className='login'>
        <form onSubmit={login}>
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
