import { Link } from 'react-router-dom'
import { Container } from '../../components/Container/Container'

import './styles.css'
import { MENU_PATHS } from '../../const/const'

export const Login: React.FC = () => {
  return (
    <Container>
      <h1>Inicio de Sesión</h1>

      <div className='login'>
        <form>
          <label>
            <p>Correo</p>
            <input type="email" required autoComplete='email' name="email" />
          </label>
          <label>
            <p>Contraseña</p>
            <input type="password" required autoComplete='current-password' name="password" />
          </label>
          <button className='primary__button' type="submit">Iniciar Sesión</button>
          <label>
            <p>¿No tienes cuenta?</p>
            <Link to={MENU_PATHS.REGISTER}>Regístrate</Link>
          </label>
        </form>

      </div>
    </Container>
  )
}
