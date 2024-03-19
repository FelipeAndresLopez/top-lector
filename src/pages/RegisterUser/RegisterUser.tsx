import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/Container/Container'
import { MENU_PATHS } from '../../const'

export const RegisterUser: React.FC = () => {
  const handleUserRegistration = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const userData = Object.fromEntries(formData)
    console.log(userData)
  }

  return (
    <>
      <Container>
        <h1>Registro de Usuarios</h1>
        <div className='login'>
          <form onSubmit={handleUserRegistration}>
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
            <button className='button btn-primary' type="submit">Registrar</button>

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
