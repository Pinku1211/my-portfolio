import { Outlet } from "react-router-dom"
import HomeNav from "./HomeNav";
import Header from "../Header";
import HomeAbout from "./HomeAbout";
import Education from "../Education/Education";

const Home = () => {
    return(
        <div>
            <Header></Header>
            <Education></Education>
            <HomeAbout></HomeAbout>    
        </div>
    )
}

export default Home;