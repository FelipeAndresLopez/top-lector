import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App.tsx'
import { NotFound } from '../pages/NotFound.tsx'
import { Home } from '../pages/Home.tsx'

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
