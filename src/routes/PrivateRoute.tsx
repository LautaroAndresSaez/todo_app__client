import { Link, Redirect, Route } from 'react-router-dom';
import React, { useContext } from 'react';

import { IRoute } from '../types/Route';
import { UserContext } from '../contexts/UserContext';

const PrivateBuildier: React.FC = ({ children }) => {

    const { user } = useContext(UserContext);

    if (!user) {
        return <Redirect to='/' />
    }

    return (
        <>
            {
                children
            }
        </>
    )
}

class PrivateRoute implements IRoute {
    path: string;
    component: React.FC;
    exact: boolean;
    privateRoute: boolean = true;


    constructor(path: string, component: React.FC, exact: boolean = false) {
        this.path = path;
        this.component = component;
        this.exact = exact;
    }

    toLink(name: string) {
        return <Link to={this.path}>{name}</Link>
    }

    toRoute() {
        const Component = this.component;
        return (
            <Route path={this.path} exact={this.exact}>
                <PrivateBuildier>
                    <Component />
                </PrivateBuildier>
            </Route>
        )
    }

}


export default PrivateRoute;