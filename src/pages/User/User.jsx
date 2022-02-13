import { Component } from "react";
import NavBar2 from "../../components/NavBar2/NavBar2";
import "./User.css";

class User extends Component {
  componentDidMount() {
    const data = { email: localStorage.getItem("email") };
    fetch("/api/profile/read", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState(data);
        // console.log(this.state);
      });
  }

  state = {
    // name: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    addressCity: "",
    addressState: "",
    addressZip: "",
    error: "",
    doRedirect: false,
  };

  retrieveEmail = () => {
    return localStorage.getItem("email");
  };

  render() {
    return (
      <>
      <div>
        <div className="profile">
          <div>
            <h2>Profile Page</h2>
            This is your Profile Page. Please check for accuracy. If everything
            is correct, please print the application using the "Print
            Application" button below.
          </div>

                <div className="profile align-left">
                  <ul>
                    <li>First Name: {this.state.firstName}</li>
                    <li>Last Name: {this.state.lastName}</li>
                    <li>Street: {this.state.streetAddress}</li>
                    <li>City: {this.state.addressCity}</li>
                    <li>State: {this.state.addressState}</li>
                    <li>Zip Code: {this.state.addressZip}</li>
                  </ul>
                </div>

        </div>
        <NavBar2 />
        </div>
              </>
    );
  }
}

export default User;
