// function Mod(){
//     return (
//         <div>
//             <h1>This is the Modify Profile/Delete Profile page</h1>

//         </div>
//     )
// }

// export default Mod;


import ProfileForm from "../../components/ProfileForm/ProfileForm";
import NavBar2 from "../../components/NavBar2/NavBar2";
import ModForm from "../../components/ModForm/ModForm";
import styles from './Mod.css';

function Mod(){
    return(
    <>
        <div>This is the Profile Modification Page Page</div> 
        <ModForm />
        <NavBar2 />
          
    </>
    )

}

export default Mod;