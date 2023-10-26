import { Outlet } from "react-router-dom";
import NavBar from "../../Shred/NavBar/NavBar";
import Home from "../../Pages/Home/Home";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <NavBar></NavBar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;