import { createHashRouter } from 'react-router-dom'
import { App } from '../App.tsx'
import { NotFound } from '../pages/NotFound/NotFound.tsx'
import { Home } from '../pages/Home/Home.tsx'
import { Login } from '../pages/Login/Login.tsx'
import { Register } from '../pages/Register/Register.tsx'
import { TopReaderDetail } from '../pages/TopReaderDetail/TopReaderDetail.tsx'
import { MyProfile } from '../pages/MyProfile/MyProfile.tsx'
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute.tsx'
import { RegisterBook } from '../pages/RegisterBook/RegisterBook.tsx'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:id',
        element: <TopReaderDetail />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },

  {
    path: '/mi-perfil',
    element: <PrivateRoute component={MyProfile} />
  },

  {
    path: '/registrar-libro',
    element: <PrivateRoute component={RegisterBook} />
  }
])
