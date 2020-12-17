import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import useRouteHelper from "../hooks/useRouteHelper";

const Routes: React.FC = () => {
    const {processUrlParams} = useRouteHelper();

    const breweryPath = useRouteMatch<{id?: string}>("/brewery-detail/:id");
    const {sortBy} = processUrlParams('sortBy');

    return (
        <Switch>
            <Route exact path='/' component={() => <h1><span>Home Page</span> {sortBy && `sort by: ${sortBy}`}</h1>}/>
            <Route exact
                path='/brewery-detail/:id'
                   component={() => (<h1><span>Brewery Detail</span> id:{breweryPath?.params.id}</h1>)
                }
            />
            <Route component={() => <h1>Error: Page not found</h1>}/>
        </Switch>
    );
};

Routes.defaultProps = {

};

export default Routes;