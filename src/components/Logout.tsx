import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/esm/Spinner"

export default function Logout() {

  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    logout()
    navigate('/')
  })
  return (
    <Spinner animation="grow" />
  )
}
