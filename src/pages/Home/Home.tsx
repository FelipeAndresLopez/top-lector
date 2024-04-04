import { Container } from '../../components/Container/Container'
import { UserList } from '../../components/UserList/UserList'
import { useGetUsers } from '../../hooks/useTopReaders'
import './styles.css'

export const Home: React.FC = () => {
  const { users } = useGetUsers()
  const orderedUsers = users.sort((a, b) => b.books.length - a.books.length)
  return (
    <Container>
      <h1>Top Lector</h1>
      <UserList users={orderedUsers} />
    </Container>
  )
}
