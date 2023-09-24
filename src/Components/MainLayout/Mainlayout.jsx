import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber";

const Mainlayout = () => {

    return (
        <div>
            <Navber></Navber>
            <div className=" py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;