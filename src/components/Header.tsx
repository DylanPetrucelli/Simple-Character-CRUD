import { Link, useLocation } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  const location = useLocation();

    return (
        <header>
        <div className="header">

          <Link to="/" style={{ textDecoration: "none" }} >
            <h1 id="main-page-link">Character Manager</h1>
          </Link>
          
          {
            location.pathname !== "/create" && (
              <Link to="/create">
                <button className="create-button">Create New Character</button>
              </Link>
            )
          }
        </div>
      </header>
    )
}

export default Header;