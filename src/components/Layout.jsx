import React, { useState } from 'react';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { FaPlus } from 'react-icons/fa'; // Ensure this import is correct and react-icons is installed
import { Outlet } from 'react-router-dom';

function Layout() {
    const [showCreateTask, setShowCreateTask] = useState(false);

    const toggleCreateTask = () => {
        setShowCreateTask(!showCreateTask);
    };

    const handleCloseCreateTask = () => {
        setShowCreateTask(false);
    };

    return (
        <>
            <div className="mt-1">
                        <TaskIndicator />
            </div>
            <div className="min-h-screen bg-gray-200 flex flex-col">
            <div className={`flex flex-col md:flex-row md:justify-between p-4 md:p-8 flex-grow transition-all duration-300 ease-in-out ${showCreateTask ? 'space-y-4' : ''}`}>
                {showCreateTask && (
                    <div className="md:w-1/3 mb-6 md:mb-0 transition-transform transform duration-300 ease-in-out">
                        <CreateTask onClose={handleCloseCreateTask} />
                    </div>
                )}
                <div className={`flex-grow ${showCreateTask ? 'md:w-2/3' : 'w-full'} bg-white p-6 md:p-8 shadow-md rounded-lg transition-all duration-300 ease-in-out`}>
                
                    <div className="mt-3">
                        <Outlet />
                    </div>
                    
                </div>
            </div>
            <button
                onClick={toggleCreateTask}
                className="fixed bottom-4 right-4 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none"
            >
                <FaPlus size={24} />
            </button>
        </div>
        </>
       
    );
}

export default Layout;
