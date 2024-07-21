import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return (
        <div className='flex flex-col md:flex-row md:justify-center md:items-center mt-4'>
            <nav className='w-full md:w-auto'>
                <ul className='flex flex-wrap gap-4 p-4 bg-gray-800 rounded-lg shadow-md'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg text-center font-semibold ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-500 hover:text-white'
                                }`
                            }
                        >
                            All Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/active"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg text-center font-semibold ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-500 hover:text-white'
                                }`
                            }
                        >
                            Active
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/completed"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg text-center font-semibold ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-500 hover:text-white'
                                }`
                            }
                        >
                            Completed
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TaskIndicator;
