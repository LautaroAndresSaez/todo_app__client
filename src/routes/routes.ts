
import { IRoute } from '../types/Route';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';



import ToDoList from '../pages/ToDoList';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

export const register = new PublicRoute('/register', Register, true);
export const logIn = new PublicRoute('/', LogIn, true);
export const toDoList = new PrivateRoute('/todo-list', ToDoList, true);

const Routes: Array<IRoute> = [
    register,
    logIn,
    toDoList
];


export default Routes;