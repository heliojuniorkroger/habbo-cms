import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Articles from './Articles'
import Registration from './Registration'
import Photos from './Photos'
import Rooms from './Rooms'
import Fansites from './Fansites'
import News from './News'
import WhatIsHabbo from './WhatIsHabbo'
import HowToPlay from './HowToPlay'
import HabboWay from './HabboWay'
import Safety from './Safety'
import Help from './Help'
import Hotel from './Hotel'
import NotFound from './NotFound'
import UserService from '../services/UserService'

class PrivateRoute extends Component {
    render() {
        const user = UserService.get()
        if ((this.props.requireSession && !user) || (this.props.requireNoSession && user)) return <Redirect to="/" />
        return <Route {...this.props} />
    }
}

export default class extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Articles} exact={true} />
                <Redirect from="/community" to="/community/photos" exact={true} />
                <Route path="/community/photos" component={Photos} exact={true} />
                <Route path="/community/rooms" component={Rooms} exact={true} />
                <Route path="/community/fansites" component={Fansites} exact={true} />
                <Redirect from="/community/category" to="/community/category/all/1" exact={true} />
                <Route path="/community/category/:category" render={({ match }) => <Redirect to={`/community/category/${match.params.category}/1`} />} exact />
                <Route path="/community/category/:category/:page" component={News} exact={true} />
                <Redirect from="/playing-habbo" to="/playing-habbo/what-is-habbo" exact={true} />
                <Route path="/playing-habbo/what-is-habbo" component={WhatIsHabbo} exact={true} />
                <Route path="/playing-habbo/how-to-play" component={HowToPlay} exact={true} />
                <Route path="/playing-habbo/habbo-way" component={HabboWay} exact={true} />
                <Route path="/playing-habbo/safety" component={Safety} exact={true} />
                <Route path="/playing-habbo/help" component={Help} exact={true} />
                <Route path="/hotel" component={Hotel} exact={true} />
                <PrivateRoute path="/registration" component={Registration} exact={true} requireNoSession={true} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}