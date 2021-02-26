import React, { useContext, useState } from 'react'

import { Plus } from 'react-bootstrap-icons';

import { TaskContext } from '../../contexts/TaskContext';
import { TaskProps } from '../../types/Task';

import '../../sass/components/addTask.scss';

const initialTask: TaskProps = { name: '', id: '', complete: false };

const AddTask: React.FC = () => {

    const [task, setTask] = useState<TaskProps>(initialTask)

    const { add } = useContext(TaskContext);

    const onChange = (e: any) => {
        const { value } = e.target;
        setTask({
            ...task,
            name: value
        })
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (add && task.name !== '') {
            add(task);
            setTask(initialTask);
        }
    }

    return (
        <form
            className='add-task'
            onSubmit={onSubmit}
        >
            <div className='add-task__icon'>
                <Plus size={30} />
            </div>
            <input
                className='add-task__name'
                type='text'
                onChange={onChange}
                value={task.name}
                placeholder='Add task'
            />
        </form>
    )
}

export default AddTask;