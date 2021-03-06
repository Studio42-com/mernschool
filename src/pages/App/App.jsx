import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Start from "../Start/Start";
import User from "../User/User";
import Profile from "../Profile/Profile";
import Mod from "../Mod/Mod";
import PrintPage from "../PrintPage/PrintPage";
import Arts from "../Programs/Arts";
import CompSci from "../Programs/CompSci";
import CivilEngineering from "../Programs/CivilEngineering";
import Foreign from "../Programs/Foreign";
import Blank from "../Programs/Blank";
// import styles from '../../index.css';




function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>
        <NavBar setUser={setUser} user={user}/>
          <Routes>
            {/* <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} /> */}
            <Route path="/profile" element = {<Profile />} />
            <Route path="/mod" element = {<Mod />} />
            <Route path="/print" element = {<PrintPage />} />
            <Route path="/" element = {<User />} />
            <Route path="/auth" element = {<User />} />

                      {/* <User /> */}
          </Routes>

        </>
        :
        // <AuthPage setUser={setUser} />
        <>
        <Start />
        
        <Routes>
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/arts" element = {<Arts />} />
          <Route path="/compsci" element = {<CompSci />} />
          <Route path="/civil" element = {<CivilEngineering />} />
          <Route path="/foreign" element = {<Foreign />} />
          <Route path="/home" element = {<Blank />} />
        </Routes>
        </>


      }
    </main>
  );
}

export default App;
