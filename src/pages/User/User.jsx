import { Component, useEffect } from "react";
// import ProfileForm from "../../components/ProfileForm/ProfileForm";
import NavBar2 from "../../components/NavBar2/NavBar2";
import NavBar from "../../components/NavBar/NavBar";

import styles from "./User.css";

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
        console.log(this.state);
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
        <div className="profile">
          <div id="blackoutline">
            <h2>Profile Page</h2>
            This is your Profile Page. Please check for accuracy. If everything
            is correct, please print the application using the "Print
            Application" button below.
          </div>
          <table>
            <theader>
              <th>User Profile Information</th>
              <th>2</th>
            </theader>

            <tr>
              <td>
                <div id="blackoutline">
                  <ul>
                    <li>First Name: {this.state.firstName}</li>
                    <li>Last Name: {this.state.lastName}</li>
                    <li>Street: {this.state.streetAddress}</li>
                    <li>City: {this.state.addressCity}</li>
                    <li>State: {this.state.addressState}</li>
                    <li>Zip Code: {this.state.addressZip}</li>
                  </ul>
                </div>
              </td>
              <td>[Error] or Show profile information(limited)</td>
            </tr>
          </table>

          <NavBar2 />
        </div>
      </>
    );
  }
}

export default User;
