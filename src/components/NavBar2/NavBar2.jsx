import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <nav>
      <hr />
      <Link to="/profile">Create Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/mod">Modify/Delete Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/print">Print Application</Link>
    </nav>
  )
}

export default NavBar2;