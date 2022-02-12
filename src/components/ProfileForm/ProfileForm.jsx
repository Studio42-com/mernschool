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
              <option value="AK">Alaska</option>
            	<option value="AZ">Arizona</option>
            	<option value="AR">Arkansas</option>
            	<option value="CA" selected>California</option>
            	<option value="CO">Colorado</option>
            	<option value="CT">Connecticut</option>
            	<option value="DE">Delaware</option>
            	<option value="DC">District Of Columbia</option>
            	<option value="FL">Florida</option>
            	<option value="GA">Georgia</option>
            	<option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
            	<option value="IL">Illinois</option>
            	<option value="IN">Indiana</option>
            	<option value="IA">Iowa</option>
            	<option value="KS">Kansas</option>
            	<option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
            	<option value="ME">Maine</option>
            	<option value="MD">Maryland</option>
            	<option value="MA">Massachusetts</option>
            	<option value="MI">Michigan</option>
            	<option value="MN">Minnesota</option>
            	<option value="MS">Mississippi</option>
            	<option value="MO">Missouri</option>
            	<option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
            	<option value="NV">Nevada</option>
            	<option value="NH">New Hampshire</option>
            	<option value="NJ">New Jersey</option>
            	<option value="NM">New Mexico</option>
            	<option value="NY">New York</option>
            	<option value="NC">North Carolina</option>
            	<option value="ND">North Dakota</option>
            	<option value="OH">Ohio</option>
            	<option value="OK">Oklahoma</option>
            	<option value="OR">Oregon</option>
            	<option value="PA">Pennsylvania</option>
            	<option value="RI">Rhode Island</option>
            	<option value="SC">South Carolina</option>
            	<option value="SD">South Dakota</option>
            	<option value="TN">Tennessee</option>
            	<option value="TX">Texas</option>
            	<option value="UT">Utah</option>
            	<option value="VT">Vermont</option>
            	<option value="VA">Virginia</option>
            	<option value="WA">Washington</option>
            	<option value="WV">West Virginia</option>
            	<option value="WI">Wisconsin</option>
            	<option value="WY">Wyoming</option>
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
<button type="submit">Create Profile</button>{" "} | <Link to="/"><button type="cancel">Cancel</button></Link>
          </div>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default ProfileForm;

