import { useNavigate } from "react-router-dom"

export default function Topbar() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate('/')
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" data-widget="fullscreen" href="#" role="button">
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={handleLogOut} role="button">
            <i className="fas fa-power-off"></i>
          </a>
        </li>

      </ul>
    </nav>
  )
}
