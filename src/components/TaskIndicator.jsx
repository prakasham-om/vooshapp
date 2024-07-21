import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return (
        <div className='flex flex-col items-center mt-4 w-full'>
            <nav className='w-full'>
                <ul className='flex flex-nowrap justify-between p-2 bg-blue-800 rounded-lg shadow-md w-full overflow-x-auto'>
                    <li className='flex-1'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg text-center font-semibold ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-500 hover:text-white'
                                }`
                            }
                        >
                            Todo
                        </NavLink>
                    </li>
                    <li className='flex-1'>
                        <NavLink
                            to="/active"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg text-center font-semibold ${
                                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-500 hover:text-white'
                                }`
                            }
                        >
                            Progress
                        </NavLink>
                    </li>
                    <li className='flex-1'>
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
