import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container/Container'
import { MENU_PATHS } from '../../const'
import { useEffect, useState } from 'react'
import { useBooksByUser } from '../../hooks/useTopReaders'
import { BookCard } from '../../components/BookCard/BookCard'

import './styles.css'

export const MyProfile: React.FC = () => {
  const email = JSON.parse(localStorage.getItem('user'))?.email || ''
  console.log(email)
  const [isLoading, setIsLoading] = useState(false)
  const { booksByUser } = useBooksByUser({ userId: '1' })

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('user') && isLoading) {
      navigate(MENU_PATHS.HOME)
    }
  }, [localStorage, isLoading])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoading(true)
  }

  const handleBookCreation = () => {

  }

  return (
    <Container className='my-profile'>
      <div className='my-profile'>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="user avatar"
        />
        <h1>{email}</h1>
        <button className='link-button' type='button' onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <h2>Mis Libros</h2>
      <ul className=''>
        {booksByUser.map(book =>
          <BookCard
            key={book.id}
            book={book}
          />
        )}
      </ul>

      <Link className='float-button' to={MENU_PATHS.REGISTER_BOOK}>
        +
      </Link>

    </Container>
  )
}
