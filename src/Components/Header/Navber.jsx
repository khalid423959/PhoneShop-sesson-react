import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navber = () => {
    return (
        <div className="flex justify-between max-w-[1300px] m-auto shadow-md py-5 px-3">
            <Logo></Logo>
            <nav>
                <ul className="flex gap-10">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;