import { useParams } from 'react-router-dom'
import { useGetUserInfo } from '../../hooks/useTopReaders'
import { Container } from '../../components/Container/Container'
import { BookCard } from '../../components/BookCard/BookCard'

import './styles.css'

export const TopReaderDetail: React.FC = () => {
  const { id: userId = '' } = useParams()
  const { userInfo } = useGetUserInfo({ userId })

  return (
    <Container>
      <h1>{userInfo.name}</h1>
      <ul className='top-reader-detail'>
        {userInfo.books.map(book =>
          <BookCard
            key={book.id}
            book={book}
          />
        )}
      </ul>
    </Container>
  )
}
