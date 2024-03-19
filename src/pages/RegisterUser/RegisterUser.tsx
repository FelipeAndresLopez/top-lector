import { Link } from 'react-router-dom'
import { Container } from '../../components/Container/Container'
import { MENU_PATHS } from '../../const'

export const RegisterUser: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Registro</h1>
        <div className='login'>
          <form>
            <label>
              <p>Nombre</p>
              <input type="text" required autoComplete='name' name="name" />
            </label>
            <label>
              <p>Correo</p>
              <input type="email" required autoComplete='email' name="email" />
            </label>
            <label>
              <p>Contraseña</p>
              <input type="password" required autoComplete='current-password' name="password" />
            </label>
            <label>
              <p>Confirmar contraseña</p>
              <input type="password" required autoComplete='current-password' name="confirmPassword" />
            </label>

            <label>
              <p>Foto</p>
              <input type="file" name="image" />
            </label>
            <button className='primary__button' type="submit">Registrar</button>

            <label>
              <p>¿Ya tienes cuenta?</p>
              <Link to={MENU_PATHS.LOGIN}>Iniciar Sesión</Link>
            </label>
          </form>
        </div>
      </Container>
    </>
  )
}
