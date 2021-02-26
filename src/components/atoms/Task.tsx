import { Check2, Trash } from 'react-bootstrap-icons';
import React, { useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContext';
import { TaskProps } from '../../types/Task';

const Task: React.FC<TaskProps> = ({ complete, name, id }) => {

    const { edit, remove } = useContext(TaskContext);

    const handlerChange = () => {
        if (edit) {
            edit(id, name, !complete);
        }
    }

    const handlerDelete = () => {
        if (remove) {
            remove(id);
        }
    }

    return (
        <div className='task' >
            <button onClick={handlerChange} className={`task__checkbox ${complete ? 'task__checkbox--success' : ''}`}>
                <Check2 size={20} />
            </button>
            <p className='task__name'>{name}
                <button className='task__delete' onClick={handlerDelete}>
                    <Trash size={20} />
                </button>
            </p>

        </div>
    )
}

export default Task;