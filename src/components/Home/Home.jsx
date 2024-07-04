import { Outlet } from "react-router-dom"
import HomeNav from "./HomeNav";
import Header from "../Header";

const Home = () => {
    console.log(location.pathname)
    return(
        <div className='min-h-screen'>
            <div className='w-3/4 mx-auto text-white flex flex-col justify-center items-center'>
                <HomeNav></HomeNav>
                {
                    location.pathname === "/" && <Header></Header> 
                }
                <Outlet></Outlet>
            </div>
            
        </div>
    )
}

export default Home;