import { Link, Redirect, Route } from 'react-router-dom';
import React, { useContext } from 'react';

import { IRoute } from '../types/Route';
import { UserContext } from '../contexts/UserContext';
import { toDoList } from '../routes/routes';

const PublicBuildier: React.FC = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user) {
        return <Redirect to={toDoList.path} />
    }
    return (
        <>
            {
                children
            }
        </>
    )
}

class PublicRoute implements IRoute {
    path: string;
    privateRoute: boolean = false;
    exact: boolean;
    component: React.FC;

    constructor(path: string, component: React.FC, exact: boolean = false) {
        this.path = path;
        this.exact = exact;
        this.component = component;
    }

    toLink(name: string): React.ReactNode {
        return <Link to={this.path}>{name}</Link>;
    }

    toRoute(): React.ReactNode {
        const Component = this.component;
        return (
            <Route path={this.path} exact={this.exact}>
                <PublicBuildier>
                    <Component />
                </PublicBuildier>
            </Route>
        );
    }

}

export default PublicRoute;