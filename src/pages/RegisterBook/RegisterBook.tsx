import { type FormEvent, useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../../components/Container/Container'
import { RATING } from '../../const'
import './styles.css'

export const RegisterBook: React.FC = () => {
  const navigate = useNavigate()
  const [star, setStar] = useState(RATING.BEST)
  const handleUserRegistration = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const userData = Object.fromEntries(formData)
    console.log(userData)
  }

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const rate = event.target.value
    const bookRating = Object
      .values(RATING)
      .find(rating => rating.value === rate)
    setStar(bookRating ?? RATING.BEST)
  }
  return (
    <>
      <Container>
        <h1>Registro de Libros</h1>
        <div className='register-book'>
          <form onSubmit={handleUserRegistration}>
            <label>
              <p>Nombre del libro</p>
              <input type="text" required autoComplete='title' name="title" />
            </label>
            <label>
              <p>Autor</p>
              <input type="text" required autoComplete='author' name="author" />
            </label>
            <label>
              <p>🤯 ¿Que es lo que más te ha sorprendido del libro al leerlo?</p>
              <textarea autoComplete='comment' name="comment" rows={5} />
            </label>
            <label >
              <p>Calificación: {star.value}</p>
              <div className='rate'>
                <input
                  type="range"
                  list="markers"
                  min="1" max="5"
                  value={star.value}
                  name="rate"
                  onChange={handleRangeChange}
                />
                <datalist id="markers">
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                </datalist>
                <span className='emoji-rate'>{star.label}</span>
              </div>
            </label>
            <button className='button btn-primary' type="submit">Registrar</button>
            <button
              className='button btn-secondary'
              onClick={() => { navigate(-1) }}
              type="submit"
            >
              Cancelar
            </button>
          </form>
        </div>
      </Container>
    </>
  )
}
