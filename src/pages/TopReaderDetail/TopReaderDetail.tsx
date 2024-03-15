import { useParams } from 'react-router-dom'
import { useBooksByUser } from '../../hooks/useTopReaders'
import { Container } from '../../components/Container/Container'
import { BookCard } from '../../components/BookCard/BookCard'

import './styles.css'

export const TopReaderDetail: React.FC = () => {
  const { id: userId } = useParams()
  console.log(userId)
  const { booksByUser } = useBooksByUser({ userId })

  console.log(booksByUser)
  return (
    <Container>
      <h1>usuario: {userId}</h1>
      <ul className='top-reader-detail'>
        {booksByUser.map(book =>
          <BookCard
            key={book.id}
            book={book}
          />
        )}
      </ul>
    </Container>
  )
}
