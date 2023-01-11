import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./navBar.css"


const NavBar = () => {

    return(
      <div className="navBar">
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Juanita Market</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link active " aria-current="page" to="/categoria/cocina">cocina</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/categoria/limpieza" >limpieza</NavLink>
          </li>
        </ul>
        <NavLink to="/cart" className="CartWidgetContainer">
          <CartWidget/>
        </NavLink>
      </div>
    </div>
  </nav>
  </div>

    )
  }

  export default NavBar