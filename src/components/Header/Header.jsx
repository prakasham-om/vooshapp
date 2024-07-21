import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import './header.css';

function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);

    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    return (
        <div>
            <header className="bg-gray-800 text-white">
                <nav className="container mx-auto flex justify-between items-center p-4">
                    <div className="logo text-2xl font-bold">
                        <NavLink to="/" className="hover:text-gray-400">Todo App</NavLink>
                    </div>
                    <div className="flex items-center space-x-4">
                        {token ? (
                            <div className="flex items-center space-x-4">
                                <p className="text-lg">
                                    Welcome, <span className="font-semibold">{user?.name}</span>
                                </p>
                                <button
                                    onClick={logout}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <ul className="flex space-x-4">
                                <li>
                                    <NavLink
                                        to="/login"
                                        className="hover:text-gray-400"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/register"
                                        className="hover:text-gray-400"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Header;
