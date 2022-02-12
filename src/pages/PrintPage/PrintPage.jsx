import { Component, useEffect } from "react";
// import { Link } from "react-router-dom";

// import { signUp } from "../../utilities/users-service";

class PrintPage extends Component {
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
      <div id="print">
                    <h1>MERNSchool Enrollment Application</h1>
            123 Main Street, Anyville, Denial, 54321
            <hr />
        <h2>Enrollment Agreement</h2>        
                First Name: {this.state.firstName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name: {this.state.lastName}
         <br />
         Address: {this.state.streetAddress}, {this.state.addressCity}, {this.state.addressState} {this.state.addressZip}
        <br />        <br />        <br />        <br />
        Tuition and Fees: 1 Eternal Human Soul, not necessarily yours, or 15 politician souls, subject to approval(may have already been used). Consent for forfeiture of soul not necessary. Payable upon enrollment. Financial Aid not available.
 <br />        <br /> 

     <div id="signatureRow">

     <div>Signature: _________________________________   </div>

     <form><label>Date:</label> <input type="date" size="15"/></form>
 </div>

 <br />        <br />        <br />        <br />
Disclaimer: This is NOT a legally binding document. Signature is only for demonstration purposes.
<hr />        "Located in src/pages/Print/Print.jsx"



{/* <hr />
Preview section<br />
                  {this.state.firstName} 
                   {this.state.lastName} 
                   {this.state.streetAddress} 
                   {this.state.addressCity} 
                   {this.state.addressState} 
                   {this.state.addressZip}
                   <hr /> */}
      </div>
    );
  }
}






// Tuition and Fees: 1 Eternal Human Soul, not necessarily yours. or 15 politician souls, subject to approval(may have already been used). Consent for forfeiture of soul not necessary. Payable upon enrollment. Financial Aid not available.
// <br />        <br /> 

//     <div id="signatureRow">

//     <div>Signature: _________________________________   </div>

//     <form><label>Date:</label> <input type="date" size="15"/></form>
// </div>

// <br />        <br />        <br />        <br />
// Disclaimer: This is NOT a legally binding document. Signature is only for demonstration purposes.
// <hr />
//         "Located in src/pages/Print/Print.jsx"
//         </div>
//     )
// }

export default PrintPage;