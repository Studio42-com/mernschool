import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <nav>
      <hr />
      <Link to="/profile"><button>Create Profile</button></Link>
      &nbsp; | &nbsp;
      <Link to="/mod"><button>Modify/Delete Profile</button></Link>
      &nbsp; | &nbsp;
      <Link to="/print" target="_blank"><button>Print Application</button></Link>
    </nav>
  )
}

export default NavBar2;