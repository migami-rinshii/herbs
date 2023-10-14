
import { useNavigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const DashFooter = () => {

  const { username, status } = useAuth()

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoHomeClicked = () => navigate('/dash')

  let goHomeButton = null
  if (pathname !== '/dash') {
    goHomeButton = (
        <button
        onClick={onGoHomeClicked}
        >
        HOME
        </button>
    )
  }
  const content = (
    <footer>
    {goHomeButton}
    </footer>
  )
  return content
}

export default DashFooter