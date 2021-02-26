import { TaskProps } from '../types/Task';
import firebase from 'firebase';

const database = firebase.database();



export const useFirebase = () => {

    const getUid = () => {
        return firebase.auth().currentUser?.uid;
    }

    const updateTask = ( task: TaskProps) => {
        const uid = getUid();
        if(!uid){
            return;
        }

        const { id } = task;
        database.ref(`tasks/${uid}/${id}`).update(task);
    }

    const getTasks = async (): Promise<TaskProps[]> => {
        const uid = getUid();
        if(!uid){
            return [];
        }
        const response = await database.ref(`tasks/${uid}`).once('value');
        const values = response.val();
        if(!values) return [];
        return Object.values<TaskProps>(values);
    }

    const deleteTask = async ( id: string) => {
        const uid = getUid();
        if(!uid){
            return;
        }
        await database.ref(`tasks/${uid}/${id}`).remove();
    }
    
    const addTask = async ( task: TaskProps) => {
        const uid = getUid();
        if(!uid){
            return;
        }
        await database.ref( `tasks/${uid}/${task.id}` ).update(task); 
    }

    return {
        getTasks,
        updateTask,
        deleteTask,
        addTask
    }
}