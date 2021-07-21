import React, { useEffect, useState } from 'react';

import { getAllTasks, createTask } from '../../services/dashboardServices';

const Dashboard = () => {
    const token = localStorage.getItem('token');

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [toDo, setToDo] = useState([])

    useEffect(() => {
        const getTask = async () => {
            const { data: { results } } = await getAllTasks(token);
            setToDo(results)
        }
        getTask()
    }, [token])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = {
            name: taskName,
            description: taskDescription,
        }
        await createTask(object, token)
        const { data: { results } } = await getAllTasks(token);
        setToDo(results)
    }

    return (
        <div>
            dashboards
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder='name' />
                    <input
                        type="text"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        placeholder='Descripcion' />
                    <button type="submit" onSubmit={handleSubmit}> guardar</button>
                </form>
            </div>
            <div>
                {
                    toDo.map(el => (
                        <div>
                            <h1>{el.name}</h1>
                            <h2>{el.description}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard
