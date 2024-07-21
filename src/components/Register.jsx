import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js";
import TokenContext from '../context/TokenContext.js';


function Register() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/register", formData);
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token });
            userDispatch({ type: "SET_USER", payload: result.data.user });
            localStorage.setItem("authToken", JSON.stringify(result.data.token));
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message });
        }
    };

    return (
        <div>
            {userToken && <Navigate to="/" />}
            <section className="register-container flex justify-center items-center min-h-screen bg-gray-100">
                <div className="container max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <img src="data:image/jpeg;base64,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" alt="Voosh" className="w-full rounded-lg" />
                        </div>
                        <div className="flex-1 mt-6 lg:mt-0 lg:ml-6">
                            <form method='post' onSubmit={handleSubmit}>
                                {error && (
                                    <div className="text-center border-2 border-red-600 p-2 mb-4 rounded-md bg-red-200 shadow-md">
                                        {error.message}
                                    </div>
                                )}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name='name'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded-md transition ease-in-out focus:border-blue-600"
                                        placeholder="Full name"
                                        onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name='email'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded-md transition ease-in-out focus:border-blue-600"
                                        placeholder="Email address"
                                        onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded-md transition ease-in-out focus:border-blue-600"
                                        placeholder="Password"
                                        onChange={handleChange} />
                                </div>
                                <div className="flex items-center mb-6">
                                    <input type="checkbox" className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:outline-none transition duration-200 mt-1 cursor-pointer" id="rememberMe" defaultChecked />
                                    <label className="ml-2 text-gray-800" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out w-full">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
