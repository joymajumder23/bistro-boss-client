import { BiMenu } from "react-icons/bi";
import { FaDashcube, FaHome, FaRegSave, FaSave, FaShoppingCart } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaDashcube></FaDashcube> My Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaRankingStar></FaRankingStar> Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaRegSave></FaRegSave> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><BiMenu></BiMenu> Menu</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;