import { useEffect, useState } from 'react'
import API, { setAuthToken } from '../service/api'

export default function Page({ user1, user2 }) {
  const [user3, setUser3] = useState("")
  const [isLoadingUser, setIsLoadingUser] = useState(false)

  useEffect(() => {
    setIsLoadingUser(true)

    async function loginUser() {
      const { data } = await API.get("http://localhost:3000/api/login")
      setUser3(data.user)
      setIsLoadingUser(false)
    }

    loginUser()
  }, [])

  return (
    <div>
      <div>Usuário 1: {user1}</div>
      <div>Usuário 2: {user2}</div>
      {isLoadingUser ? <div>Carregando usuário</div> : <div>Usuário 3: {user3}</div>}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  setAuthToken("user1:" + Math.round(Math.random() * 10000))
  const req1 = await API.get("http://localhost:3000/api/login")

  setAuthToken("user2:" + Math.round(Math.random() * 10000))
  const req2 = await API.get("http://localhost:3000/api/login")

  return {
    props: {
      user1: req1.data.user,
      user2: req2.data.user,
    }
  }
}