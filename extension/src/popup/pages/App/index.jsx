// Libraries
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PageHome from "./Home";

const PageApp = props => {
    const {
        match,
        match: { path, url }
    } = props;

    return (
        <Switch>
            <Route component={PageHome} path={`${path}/home`} />
            <Redirect to={`${url}/home`} />
        </Switch>
    );
};

export default PageApp;
