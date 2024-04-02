import { Navigate } from 'react-router-dom'
import { MENU_PATHS } from '../../const'

interface Props {
  component: React.FC
}

export const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('loggedUserTopLectorApp') !== null
  return isAuthenticated ? <Component /> : <Navigate to={MENU_PATHS.HOME} />
}
