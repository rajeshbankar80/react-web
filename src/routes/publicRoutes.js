import * as routesConstants from "./routeConstants";
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import aboutComponent from '../components/aboutComponent'
import contactComponent from '../components/contactComponent'
import homeComponent from '../components/homeComponent'

// The Public Route component renders one of the three provided
// Routes (provided that one matches). 
// The / route will only match
// when the pathname is exactly the string "/"
const MainRoute = () => (
    <main>
        <Switch>
            <Route exact path='/' component={homeComponent} />
            <Route exact path={routesConstants.HOME_PAGE} component={homeComponent} />
            <Route path={routesConstants.ABOUT_PAGE} component={aboutComponent} />
            <Route path={routesConstants.CONTACT_PAGE} component={contactComponent} />
        </Switch>
    </main>
)

export default MainRoute