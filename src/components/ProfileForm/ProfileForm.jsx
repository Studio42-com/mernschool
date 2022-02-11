import { Component, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

// import { signUp } from "../../utilities/users-service";

class ProfileForm extends Component {
  state = {
    name: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    addressCity: "",
    addressState: "",
    addressZip: "",
    error: "",
    doRedirect: false,
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      const data = new FormData(evt.target);
      console.log(data);
      console.log(data.get("firstName"));
      var object = {};
      data.forEach((value, key) => (object[key] = value));
      var json = JSON.stringify(object);
      console.log(json);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: json,
      };
      fetch("http://localhost:3001/api/profile/save", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
        this.setState({ doRedirect: true });
    } catch {
      // An error occurred...
    }
  };

  retrieveEmail = () => {
    return localStorage.getItem("email");
  };

  render() {
    // const disable = this.state.password !== this.state.confirm;
      if (this.state.doRedirect){
        return <Navigate to="/" />;

      }
    return (

      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
              value={this.state.firstName}
              onChange={(evt) => this.setState({ firstName: evt.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
              value={this.state.lastName}
              onChange={(evt) => this.setState({ lastName: evt.target.value })}
            />
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street address"
              required
              value={this.state.streetAddress}
              onChange={(evt) =>
                this.setState({ streetAddress: evt.target.value })
              }
            />
            <label>City</label>
            <input
              type="text"
              name="addressCity"
              placeholder="Enter your City"
              required
              value={this.state.addressCity}
              onChange={(evt) =>
                this.setState({ addressCity: evt.target.value })
              }
            />
            <label>State</label>
            <select type="text" name="addressState" required
              value={this.addressState}
              onChange={(evt) =>
                this.setState({ addressState: evt.target.value })
              }
            >
              <option value="CA">California</option>
            </select>
            <label>Postal Code:</label>
            <input
              type="number"
              maxLength="5"
              placeholder="00000"
              minLength="5"
              name="addressZip"
              value={this.state.addressZip}
              onChange={(evt) =>
                this.setState({ addressZip: evt.target.value })
              }
            />
            <input
              type="hidden"
              name="email"
              value={localStorage.getItem("email")}
            />
          <div id="buttonrow">
            <Link to="/"><button type="submit">Create DA Profile</button>{" "}</Link> | <Link to="/"><button type="cancel">Cancel</button></Link>
          </div>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default ProfileForm;

