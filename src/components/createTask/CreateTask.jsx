import React, { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js";
import "./createTask.css";

function CreateTask({ onClose }) {
    const { dispatch } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/task/addTask", { title, description }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });

            dispatch({
                type: "ADD_TASK",
                title,
                description
            });

            setTitle("");
            setDescription("");
            setToastMessage("Task added successfully!");
            setShowToast(true);

            setTimeout(() => setShowToast(false), 2000);
            onClose(); // Close the form after adding the task
        } catch (error) {
            console.log(error);
            setToastMessage("Error adding task. Please try again.");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
        }
    };

    return (
        <div className="addContainer p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Create Task</h2>
            <form onSubmit={handleAdd}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        rows={5}
                        name="description"
                        id="description"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ resize: "none" }}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className='bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Add
                    </button>
                </div>
            </form>
            {showToast && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-center">
                    {toastMessage}
                </div>
            )}
        </div>
    );
}

export default CreateTask;
