import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App.tsx'
import { NotFound } from '../pages/NotFound/NotFound.tsx'
import { Home } from '../pages/Home/Home.tsx'

export const router = createBrowserRouter([
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
        path: 'login',
        element: <div>Login</div>
      },
      {
        path: 'register',
        element: <div>Register</div>
      }
    ]
  }
])
