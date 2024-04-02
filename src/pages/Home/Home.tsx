import { Container } from '../../components/Container/Container'
import { TopCard } from '../../components/TopCard/TopCard'
import { useGetTopReaders } from '../../hooks/useTopReaders'
import './styles.css'

export const Home: React.FC = () => {
  const { topReaders } = useGetTopReaders()
  return (
    <Container>
      <h1>Top Lector</h1>
      <ul className='home'>
        {topReaders.map(reader =>
          <TopCard
            key={reader.id}
            reader={reader}
          />
        )}
      </ul>
    </Container>
  )
}
