import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllTasks } from '../../services/dashboardServices';
import TaskGrid from '../../Components/TaskGrid/TaskGrid';
import AddTask from '../../Components/AddTask/AddTask';
import Navbar from '../../Components/Navbar/Navbar';

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const history = useHistory();
    const [toDo, setToDo] = useState([])

    useEffect(() => {
        if (!token) history.push('/');

        const getTask = async () => {
            const { data: { results } } = await getAllTasks(token);
            setToDo(results)
        }
        getTask()
    }, [token, toDo, history])


    return (
        <div>
            <Navbar />
            <div>
                <AddTask />
            </div>
            <div>
                <TaskGrid toDo={toDo} />
            </div>
        </div>
    )
}

export default Dashboard
