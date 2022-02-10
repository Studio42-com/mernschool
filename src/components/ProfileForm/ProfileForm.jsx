import { Component } from "react";
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
    } catch {
      // An error occurred...
    }
  };

  retrieveEmail = () => {
    return localStorage.getItem("email");
  };

  render() {
    // const disable = this.state.password !== this.state.confirm;
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
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street address"
              required
            />
            <label>City</label>
            <input
              type="text"
              name="addressCity"
              placeholder="Enter your City"
              required
            />
            <label>State</label>
            <select type="text" name="addressState" required>
              <option value="CA">California</option>
            </select>
            <label>State</label>
            <input
              type="number"
              maxLength="5"
              placeholder="00000"
              minLength="5"
              name="addressZip"
            />
            <input
              type="hidden"
              name="email"
              value={localStorage.getItem("email")}
            />

            <button type="submit">Create Profile</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default ProfileForm;
