import { Link } from "react-router-dom";

function Start() {

    return (

        <div>
            <h1>Start or landing page</h1>
            <Link to="/auth" ><button>Sign Up/Log In</button></Link> | <button>Log In</button>
        </div>
    )


};


export default Start;