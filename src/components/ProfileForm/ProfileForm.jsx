import { Component } from "react";
// import { signUp } from "../../utilities/users-service";

class ProfileForm extends Component {
  state = {
    name: '',
    firstName: '',
    lastName: '',
    streetAddress: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    error: ''
  }


  render() {
    // const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>First Name</label>
            <input type="text" firstName="firstName" placeholder="Enter your first name" onChange={this.handleChange} required />
            <label>Last Name</label>
            <input type="text" lastName="lastName" placeholder="Enter your last name" onChange={this.handleChange} required />
            <label>Street Address</label>
            <input type="text" streetAddress="streetAddress" placeholder="Street address" onChange={this.handleChange} required />
            <label>City</label>
            <input type="text" addresscity="addressCity" placeholder="Enter your City" onChange={this.handleChange} required />
            <label>State</label>
            <select type="text" addressState="adressState"  onChange={this.handleChange} required>
                <option value="CA">California</option>
            </select>
            <label>State</label>
            <input type="number" maxLength="5" placeholder="00000" minLength="5" addressZip="addressZip" />

            <button type="submit">Create Profile</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
}

export default ProfileForm;