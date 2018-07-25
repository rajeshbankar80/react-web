import * as routesConstants from "./routeConstants";
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutComponent from '../components/About/AboutComponent'
import ContactComponent from '../components/Contact/ContactComponent'
import HomeComponent from '../components/Home/HomeComponent'
import PlayersComponent from "../components/Players/PlayersComponent";

// The Public Route component renders one of the three provided
// Routes (provided that one matches). 
// The / route will only match
// when the pathname is exactly the string "/"
const MainRoute = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path={routesConstants.HOME_PAGE} component={HomeComponent} />
            <Route path={routesConstants.ABOUT_PAGE} component={AboutComponent} />
            <Route path={routesConstants.CONTACT_PAGE} component={ContactComponent} />
            <Route path={routesConstants.PLAYERS_PAGE} component={PlayersComponent} />
        </Switch>
    </main>
)

export default MainRoute