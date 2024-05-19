import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/contactUs"><a>Contact Us</a></Link></li>
        <li><Link to="dashboard"><a>Dashboard</a></Link></li>
        <li><Link to="/menu"><a>Our Menu</a></Link></li>
        <li><Link to="/order"><a>Order</a></Link></li>
        <li><Link to="/login"><a>Login</a></Link></li>
    </>;
    return (
        <div>
            <div className="navbar bg-black bg-opacity-20 fixed z-10 text-white mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;