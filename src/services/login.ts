import { BASE_URL, LOGIN_ENDPOINT } from '../const'
import { type User } from '../type'

interface UserSession extends User {
  token: string
}

const login = async ({ email, password }: { email: string, password: string }): Promise<UserSession> => {
  const response = await window.fetch(`${BASE_URL}/${LOGIN_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  return data
}

export const loginService = { login }
