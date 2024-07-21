import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js";
import TokenContext from '../context/TokenContext.js';

function Login() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/login", formData);
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token });
            userDispatch({ type: "SET_USER", payload: result.data.user });
            localStorage.setItem("authToken", JSON.stringify(result.data.token));
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
            {userToken && <Navigate to="/" />}
            <section className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col items-center">
                    <img 
                        src="data:image/jpeg;base64,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" 
                        className="w-full rounded-lg mb-[-6rem] mt-[-7rem] " 
                        alt="Sample" 
                    />
                    <h2 className="text-2xl font-bold mb-1">Login</h2>
                    <form method='post' onSubmit={handleSubmit} className="w-full">
                        {/* <div className="flex items-center justify-center space-x-2 mb-4">
                            <button type="button" className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5">
                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </svg>
                            </button>
                            <button type="button" className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                            </button>
                            <button type="button" className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </button>
                        </div> */}
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <p className="mx-4 text-gray-600">Or</p>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        {error && (
                            <div className="text-center border-2 border-red-600 p-2 mb-4 rounded-md bg-red-200 text-red-800 shadow-md">
                                {error.message}
                            </div>
                        )}
                        <div className="mb-4">
                            <input
                                type="text"
                                name='email'
                                onChange={handleChange}
                                className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                id="emailInput"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                name='password'
                                onChange={handleChange}
                                className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                id="passInput"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded bg-white text-blue-600 focus:ring-blue-500"
                                    id="exampleCheck2"
                                />
                                <label className="ml-2 text-gray-600" htmlFor="exampleCheck2">Remember me</label>
                            </div>
                            <Link to="/forgotPassword" className="text-blue-600 hover:text-blue-800">Forgot Password</Link>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Login
                            </button>
                            <p className="text-sm font-semibold mt-4">
                                Don't have an account? <Link to="/register" className="text-red-600 hover:text-red-800">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;
