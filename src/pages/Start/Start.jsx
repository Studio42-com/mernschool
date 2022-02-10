import { Link } from "react-router-dom";

function Start() {

    return (
        <>
        <div><Link to="/auth" ><button>Sign Up/Log In</button></Link></div>
        
        
        <div>
            <h1>Welcome to the MERNSchool</h1>
            <br /><br />
            Welcome to the School. Learn a new trade, learn a new skill, make your mark on the world.
            
        </div>

        <div>To learn more, please click on any of the links below
            <hr/>
            <Link to="/arts" ><button>Arts and Theater</button></Link> | <Link to="/compsci" ><button>Computer Science</button></Link> |<Link to="/civil" ><button>Civil Engineering</button></Link> | <Link to="/foreign" ><button>Foreign Studies</button></Link> |<Link to="/home" ><button>Home</button></Link>
            </div>
        </>
    )


};


export default Start;