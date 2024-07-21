import React from 'react';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between p-4 md:p-8">
                <div className="flex-grow md:w-1/3 mb-6 md:mb-0">
                    <CreateTask />
                </div>
                <div className="flex-grow w-full md:w-2/3 bg-white p-6 md:p-8 shadow-md rounded-lg">
                    <div className="mb-6">
                        <Outlet />
                    </div>
                    <div className="mt-6">
                        <TaskIndicator />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
