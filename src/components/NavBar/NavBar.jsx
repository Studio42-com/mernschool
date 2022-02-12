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
      {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp; */}
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
