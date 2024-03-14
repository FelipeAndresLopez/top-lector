import { TopCard } from '../components/TopCard/TopCard'
import { useTopReaders } from '../hooks/useTopReaders'
import './styles.css'

export const Home: React.FC = () => {
  const { topReaders } = useTopReaders()
  return (
    <div className='home'>
      <h1>Top Lector</h1>
      <ul className='home__top-readers'>
        {topReaders.map(reader =>
          <TopCard
            key={reader.id}
            reader={reader}
          />
        )}
      </ul>
    </div>
  )
}
