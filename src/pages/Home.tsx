import { useEffect, useState } from "react";
import { TopCard } from "../components/TopCard/TopCard";


const USERS_API = 'https://65f217a6034bdbecc76459d6.mockapi.io/api/v1/users';

export const Home = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(USERS_API)
      .then(response => response.json())
      .then(data => setUsers(data))
  })

  return (
    <div>
      <h1>Top Lector</h1>

      <ul>
        {users.map(user =>
          <TopCard key={user.id} user={user} />
        )}
      </ul>
    </div>
  )
}