import '../sass/pages/toDoList.scss';

import AddTask from '../components/atoms/AddTask';
import ListTasks from '../components/organims/ListTasks';
import React from 'react';
import TaskProvider from '../contexts/TaskContext';
import Title from '../components/atoms/Title';

const ToDoList: React.FC = () => {


    return (
        <TaskProvider>
            <div className='to-do-list'>
                <Title>
                    Tasks
                </Title>
                <AddTask />
                <ListTasks />
            </div>
        </TaskProvider>
    )
}

export default ToDoList;