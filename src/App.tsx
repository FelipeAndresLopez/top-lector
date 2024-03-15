import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
