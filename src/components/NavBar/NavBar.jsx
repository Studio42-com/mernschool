import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>

      <span>Welcome, {user.name}!</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">
        <button>Log Out</button>
      </Link>
      <hr />
    </nav>
  );
}

export default NavBar;
